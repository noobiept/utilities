export interface DialogArgs {
    title: string;
    body: string;
    onClose?: () => void;
    modal?: boolean;
}

/**
 * Create a dialog window with the given message.
 * Can be a modal (forces user interaction) or not.
 */
export default class Dialog {
    private container: HTMLElement;
    private overlay?: HTMLElement;
    private onClose?: () => void;
    private keyUp?: (event: KeyboardEvent) => void;

    constructor(args: DialogArgs) {
        this.onClose = args.onClose;
        this.container = this.createContainer(args.title, args.body);

        // if its not modal, then it doesn't have an overlay and the keyboard shortcuts
        if (args.modal !== false) {
            this.overlay = this.createOverlay();
            this.keyUp = this.setupKeyboardShortcuts();
        }

        this.open();
    }

    private createContainer(titleText: string, bodyText: string) {
        const container = document.createElement("div");
        const title = document.createElement("div");
        const body = document.createElement("div");
        const horizontalRule = document.createElement("hr");
        const buttons = document.createElement("div");
        const ok = document.createElement("button");

        title.className = "dialogTitle";
        body.className = "dialogBody";

        container.className = "dialog";
        buttons.className = "dialogButtons";
        ok.className = "dialogButton";

        ok.innerText = "Ok";
        ok.onclick = () => {
            this.close();
        };
        body.innerHTML = bodyText;
        title.innerHTML = titleText;

        buttons.appendChild(ok);
        container.appendChild(title);
        container.appendChild(body);
        container.appendChild(horizontalRule);
        container.appendChild(buttons);

        return container;
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

        document.addEventListener("keyup", keyUp);
        return keyUp;
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
        if (this.overlay) {
            document.body.appendChild(this.overlay);
        }

        document.body.appendChild(this.container);
    }

    /**
     * Remove the dialog from the page.
     */
    close() {
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
}
