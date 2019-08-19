export enum DialogPosition {
    center,
    bottomLeft,
    bottom,
    bottomRight,
}

export interface DialogArgs {
    title: string;
    body: string;
    onClose?: () => void;
    modal?: boolean;
    okButton?: boolean; // if it shows the 'ok' button or not (if not then the dialog can only be closed with code)
    position?: DialogPosition;
}

/**
 * Create a dialog window with the given message.
 * Can be a modal (forces user interaction) or not.
 *
 * Usage:
 *     const dialog = new Dialog({
 *         title: 'the title',
 *         body: 'the body'
 *     });
 *     dialog.open();
 */
export default class Dialog {
    private container: HTMLElement;
    private title: HTMLElement;
    private body: HTMLElement;
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

        // if its not modal, then it doesn't have an overlay and the keyboard shortcuts
        if (args.modal !== false) {
            this.overlay = this.createOverlay();
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

        body.innerHTML = args.body;
        title.innerHTML = args.title;

        container.appendChild(title);
        container.appendChild(body);

        if (args.okButton !== false) {
            const horizontalRule = this.createHorizontalRule();
            const buttons = this.createButtons();

            container.appendChild(horizontalRule);
            container.appendChild(buttons);
        }

        return { container, title, body };
    }

    private createHorizontalRule() {
        const horizontalRule = document.createElement("hr");
        return horizontalRule;
    }

    private createButtons() {
        const buttons = document.createElement("div");
        const ok = document.createElement("button");

        buttons.className = "dialogButtons";
        ok.className = "dialogButton";
        ok.innerText = "Ok";
        ok.onclick = () => {
            this.close();
        };

        buttons.appendChild(ok);

        return buttons;
    }

    private createOverlay() {
        const overlay = document.createElement("div");
        overlay.className = "dialogOverlay";

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
    setTitle(title: string) {
        this.title.innerHTML = title;
    }

    /**
     * Change the body of the dialog.
     */
    setBody(body: string) {
        this.body.innerHTML = body;
    }
}
