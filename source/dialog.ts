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
    title: string | HTMLElement;
    body: string | HTMLElement;
    onClose?: () => void;
    modal?: boolean;
    closeOnOverlay?: boolean; // close the dialog when clicking on the overlay
    buttons?: DialogButtonsArg; // either one of the included options or pass your own buttons implementation (by default the 'ok' button is included)
    position?: DialogPosition;
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
    private keyUp?: (event: KeyboardEvent) => void;
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
            this.keyUp = this.setupKeyboardShortcuts();
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

        if (Array.isArray(info)) {
            info.forEach((button) => buttons.appendChild(button));
        } else if (info === DialogButtons.ok) {
            const ok = document.createElement("button");

            buttons.className = "dialogButtons";
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
        const keyUp = (event: KeyboardEvent) => {
            switch (event.key) {
                case "Escape":
                case "Enter":
                    this.close();
                    break;
            }
        };

        return keyUp;
    }

    private addKeyboardShortcuts() {
        if (this.keyUp) {
            document.addEventListener("keyup", this.keyUp);
        }
    }

    private removeKeyboardShortcuts() {
        if (this.keyUp) {
            document.removeEventListener("keyup", this.keyUp);
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
     */
    setTitle(content: string | HTMLElement) {
        if (content instanceof HTMLElement) {
            this.title.appendChild(content);
        } else {
            this.title.innerHTML = content;
        }
    }

    /**
     * Change the body of the dialog.
     */
    setBody(content: string | HTMLElement) {
        if (content instanceof HTMLElement) {
            this.body.appendChild(content);
        } else {
            this.body.innerHTML = content;
        }
    }
}
