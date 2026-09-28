export enum DialogPosition {
    center,
    bottomLeft,
    bottom,
    bottomRight,
}

export enum DialogButtons {
    none,
    ok,
}

export type DialogButtonsArg = DialogButtons | HTMLElement[];

export interface DialogArgs {
    title: string | HTMLElement; // a string is set as plain text, pass an HTMLElement if you need HTML content
    body: string | HTMLElement; // same as 'title', a string is set as plain text
    onClose?: () => void;
    modal?: boolean;
    closeOnOverlay?: boolean; // close the dialog when clicking on the overlay
    buttons?: DialogButtonsArg; // either one of the included options or pass your own buttons implementation (by default the 'ok' button is included)
    position?: DialogPosition;
}

/**
 * Whether the element does something itself on the 'enter' key (activates a button/link, submits a form, adds a new line, etc).
 */
function handlesEnter(element: Node) {
    return (
        element instanceof HTMLElement &&
        (element.isContentEditable ||
            element.matches("button, a[href], input, select, textarea"))
    );
}

/**
 * Create a dialog window with the given message.
 * Can be a modal (forces user interaction) or not.
 *
 * Usage:
 *
 *     const dialog = new Dialog({
 *         title: 'the title',
 *         body: 'the body'
 *     });
 *     dialog.open();
 *
 * There's some basic styling available, that you can import in case there's no need for custom styling (may require to setup a css/style loader on your build configuration).
 *
 *     import "@drk4/utilities/build/dialog.css";
 */
export class Dialog {
    readonly container: HTMLElement;
    readonly title: HTMLElement;
    readonly body: HTMLElement;
    readonly buttons?: HTMLElement;
    private overlay?: HTMLElement;
    private onClose?: () => void;
    private keyboardShortcuts?: {
        keyDown: (event: KeyboardEvent) => void;
        keyUp: (event: KeyboardEvent) => void;
    };
    private pressedKey?: string; // shortcut key that was pressed while the dialog was opened (and not released yet)
    private opened: boolean;

    constructor(args: DialogArgs) {
        this.onClose = args.onClose;

        const elements = this.createContainer(args);

        this.container = elements.container;
        this.title = elements.title;
        this.body = elements.body;
        this.opened = false;
        this.buttons = this.createButtonsList(elements.container, args.buttons);

        this.setTitle(args.title);
        this.setBody(args.body);

        // if its not modal, then it doesn't have an overlay and the keyboard shortcuts
        if (args.modal !== false) {
            this.overlay = this.createOverlay(args.closeOnOverlay);
            this.keyboardShortcuts = this.setupKeyboardShortcuts();
        }
    }

    private createContainer(args: DialogArgs) {
        const container = document.createElement("div");
        const title = document.createElement("div");
        const body = document.createElement("div");

        title.className = "dialogTitle";
        body.className = "dialogBody";

        container.className = "dialog";

        switch (args.position) {
            case DialogPosition.bottomLeft:
                container.classList.add("dialog-bottomLeft");
                break;
            case DialogPosition.bottom:
                container.classList.add("dialog-bottom");
                break;
            case DialogPosition.bottomRight:
                container.classList.add("dialog-bottomRight");
                break;

            default:
                container.classList.add("dialog-center");
                break;
        }

        container.appendChild(title);
        container.appendChild(body);

        return { container, title, body };
    }

    private createButtonsList(
        container: HTMLElement,
        buttonsArg?: DialogButtonsArg
    ) {
        if (buttonsArg === DialogButtons.none) {
            return;
        }

        if (typeof buttonsArg === "undefined") {
            buttonsArg = DialogButtons.ok;
        }

        const horizontalRule = this.createHorizontalRule();
        const buttons = this.createButtons(buttonsArg);

        container.appendChild(horizontalRule);
        container.appendChild(buttons);

        return buttons;
    }

    private createHorizontalRule() {
        const horizontalRule = document.createElement("hr");
        return horizontalRule;
    }

    private createButtons(info: DialogButtons | HTMLElement[]) {
        const buttons = document.createElement("div");
        buttons.className = "dialogButtons";

        if (Array.isArray(info)) {
            info.forEach((button) => buttons.appendChild(button));
        } else if (info === DialogButtons.ok) {
            const ok = document.createElement("button");

            ok.className = "dialogButton";
            ok.innerText = "Ok";
            ok.onclick = () => {
                this.close();
            };

            buttons.appendChild(ok);
        }

        return buttons;
    }

    private createOverlay(closeOnOverlay?: boolean) {
        const overlay = document.createElement("div");
        overlay.className = "dialogOverlay";

        if (closeOnOverlay) {
            overlay.onclick = () => {
                this.close();
            };
        }

        return overlay;
    }

    private setupKeyboardShortcuts() {
        const keyDown = (event: KeyboardEvent) => {
            switch (event.key) {
                case "Escape":
                    this.pressedKey = event.key;
                    break;

                case "Enter":
                    // leave it to the controls inside the dialog that handle the 'enter' key themselves
                    if (
                        event.target instanceof Node &&
                        this.container.contains(event.target) &&
                        handlesEnter(event.target)
                    ) {
                        return;
                    }

                    // it's a modal, so don't let the key reach the page behind it (it would activate the button that opened the dialog again, for example)
                    event.preventDefault();
                    this.pressedKey = event.key;
                    break;
            }
        };

        // only close on the release of a key that was pressed while the dialog was opened, otherwise releasing the key that opened the dialog would close it right away
        const keyUp = (event: KeyboardEvent) => {
            if (event.key === this.pressedKey) {
                this.pressedKey = undefined;
                this.close();
            }
        };

        return { keyDown, keyUp };
    }

    private addKeyboardShortcuts() {
        if (this.keyboardShortcuts) {
            this.pressedKey = undefined;
            document.addEventListener(
                "keydown",
                this.keyboardShortcuts.keyDown
            );
            document.addEventListener("keyup", this.keyboardShortcuts.keyUp);
        }
    }

    private removeKeyboardShortcuts() {
        if (this.keyboardShortcuts) {
            document.removeEventListener(
                "keydown",
                this.keyboardShortcuts.keyDown
            );
            document.removeEventListener("keyup", this.keyboardShortcuts.keyUp);
        }
    }

    /**
     * Add the dialog to the page.
     */
    open() {
        if (this.opened) {
            return;
        }
        this.opened = true;

        if (this.overlay) {
            document.body.appendChild(this.overlay);
        }

        document.body.appendChild(this.container);
        this.addKeyboardShortcuts();
    }

    /**
     * Remove the dialog from the page.
     */
    close() {
        if (!this.opened) {
            return;
        }
        this.opened = false;

        // remove the html elements
        if (this.overlay) {
            document.body.removeChild(this.overlay);
        }

        document.body.removeChild(this.container);

        // clean up the event listeners
        this.removeKeyboardShortcuts();

        // call the given callback
        if (this.onClose) {
            this.onClose();
        }
    }

    /**
     * Check if the dialog is opened or not.
     */
    isOpened() {
        return this.opened;
    }

    /**
     * Toggle between the open/close state.
     */
    toggle() {
        if (this.opened) {
            this.close();
        } else {
            this.open();
        }
    }

    /**
     * Change the title of the dialog.
     * A string is set as plain text — pass an `HTMLElement` if you need HTML content.
     */
    setTitle(content: string | HTMLElement) {
        if (content instanceof HTMLElement) {
            this.title.textContent = "";
            this.title.appendChild(content);
        } else {
            this.title.textContent = content;
        }
    }

    /**
     * Change the body of the dialog.
     * A string is set as plain text — pass an `HTMLElement` if you need HTML content.
     */
    setBody(content: string | HTMLElement) {
        if (content instanceof HTMLElement) {
            this.body.textContent = "";
            this.body.appendChild(content);
        } else {
            this.body.textContent = content;
        }
    }
}
