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

// the modal dialogs that are opened, the last one is on top (and it's the only one that reacts to the keyboard shortcuts)
const OPENED_MODALS: Dialog[] = [];

/**
 * Whether the element does something itself on the 'enter' key (activates a button/link/summary, submits a form, adds a new line, etc).
 */
function handlesEnter(element: EventTarget) {
    if (!(element instanceof HTMLElement)) {
        return false;
    }

    if (element.isContentEditable) {
        return true;
    }

    // the input buttons are activated, and the other inputs only submit their form (without a form, the key does nothing there)
    if (element instanceof HTMLInputElement) {
        return (
            ["button", "submit", "reset", "image"].includes(element.type) ||
            element.form !== null
        );
    }

    return element.matches("button, a[href], select, textarea, summary");
}

/**
 * Whether the event comes from the page behind a modal dialog (which is inert while the dialog is opened).
 */
function isBehindModal(event: Event) {
    return event
        .composedPath()
        .some(
            (target) =>
                target instanceof Element && target.hasAttribute("inert")
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
 *     import "@drk4/utilities/dialog.css";
 */
export class Dialog {
    readonly container: HTMLElement;
    readonly title: HTMLElement;
    readonly body: HTMLElement;
    readonly buttons?: HTMLElement;
    private overlay?: HTMLElement;
    private onClose?: () => void;
    private keyboardShortcuts?: {
        markKeyDown: (event: KeyboardEvent) => void;
        keyDown: (event: KeyboardEvent) => void;
        keyUp: (event: KeyboardEvent) => void;
    };
    private pressedKey?: string; // shortcut key that was pressed while the dialog was opened (and not released yet)
    private keyDownsWhileOpened = new WeakSet<Event>(); // the 'keydown' events that started after the dialog was opened
    private inertElements: Element[] = []; // the elements behind the modal dialog that it made inert
    private previousFocus?: HTMLElement; // the element that had the focus before the modal dialog was opened
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

            // so it can take the focus when opened
            this.container.tabIndex = -1;
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
        // listens on the capture phase of the window (the first stop of an event), so it misses the key press that opened the dialog, which was already past it
        const markKeyDown = (event: KeyboardEvent) => {
            this.keyDownsWhileOpened.add(event);
        };

        const keyDown = (event: KeyboardEvent) => {
            // ignore the key press that opened the dialog (when opened from a 'keydown' listener on an element, the event still bubbles up to the document afterwards)
            if (!this.keyDownsWhileOpened.has(event)) {
                return;
            }

            // only the dialog on top reacts, otherwise a single key press would close all the opened dialogs
            if (!this.isOnTop()) {
                return;
            }

            // something else already took care of the key (a widget in the dialog, or an input method that is composing text, where 229 is for Safari)
            if (
                event.defaultPrevented ||
                event.isComposing ||
                event.keyCode === 229
            ) {
                // and if the release of an earlier press of this key got lost (the window lost the focus, for example), this release doesn't close the dialog either
                if (event.key === this.pressedKey) {
                    this.pressedKey = undefined;
                }

                return;
            }

            switch (event.key) {
                case "Escape":
                    this.pressedKey = event.key;
                    break;

                case "Enter":
                    // leave it to the controls that handle the 'enter' key themselves (in the dialog, or in something opened on top of it, like a popup), but not to the ones in the page behind it
                    // the first target of the path is the element where it started, the event's 'target' is the host element when it comes from a shadow DOM
                    if (
                        handlesEnter(event.composedPath()[0]) &&
                        !isBehindModal(event)
                    ) {
                        return;
                    }

                    // the key is for the dialog, so it doesn't do anything else
                    event.preventDefault();
                    this.pressedKey = event.key;
                    break;
            }
        };

        // only close on the release of a key that was pressed while the dialog was opened, otherwise releasing the key that opened the dialog would close it right away
        const keyUp = (event: KeyboardEvent) => {
            if (event.key === this.pressedKey) {
                this.pressedKey = undefined;

                // unless another dialog was opened on top of this one in the meantime
                if (this.isOnTop()) {
                    this.close();
                }
            }
        };

        return { markKeyDown, keyDown, keyUp };
    }

    private isOnTop() {
        return OPENED_MODALS[OPENED_MODALS.length - 1] === this;
    }

    /**
     * A modal dialog takes over the page: the page behind it is made inert (it can't take the focus, or be clicked), the focus moves into the dialog, and it reacts to the keyboard shortcuts.
     */
    private addModal() {
        if (!this.keyboardShortcuts) {
            return;
        }

        this.pressedKey = undefined;
        this.keyDownsWhileOpened = new WeakSet();
        OPENED_MODALS.push(this);
        window.addEventListener("keydown", this.keyboardShortcuts.markKeyDown, {
            capture: true,
        });
        document.addEventListener("keydown", this.keyboardShortcuts.keyDown);
        document.addEventListener("keyup", this.keyboardShortcuts.keyUp);

        const focused = document.activeElement;
        this.previousFocus =
            focused instanceof HTMLElement && focused !== document.body
                ? focused
                : undefined;

        // only what is in the page right now, so what opens on top of the dialog later (like a popup) still works, and the elements that were already inert are left alone
        for (const element of document.body.children) {
            if (
                element !== this.overlay &&
                element !== this.container &&
                !element.hasAttribute("inert")
            ) {
                element.setAttribute("inert", "");
                this.inertElements.push(element);
            }
        }

        this.container.focus({ preventScroll: true });
    }

    private removeModal() {
        if (!this.keyboardShortcuts) {
            return;
        }

        // it's not on the list if the opening failed half way
        const index = OPENED_MODALS.indexOf(this);
        if (index !== -1) {
            OPENED_MODALS.splice(index, 1);
        }

        window.removeEventListener(
            "keydown",
            this.keyboardShortcuts.markKeyDown,
            { capture: true }
        );
        document.removeEventListener("keydown", this.keyboardShortcuts.keyDown);
        document.removeEventListener("keyup", this.keyboardShortcuts.keyUp);

        // with another modal dialog still opened on top of this one, the page stays inert until that one closes as well
        const above = index !== -1 ? OPENED_MODALS[index] : undefined;

        if (above) {
            above.inertElements.push(...this.inertElements);

            // the one above can't give the focus back into this dialog (like a wizard, where the next step opens before the current one closes), so it gives it back to where this one would have
            if (
                above.previousFocus === undefined ||
                this.container.contains(above.previousFocus)
            ) {
                above.previousFocus = this.previousFocus;
            }
        } else {
            this.inertElements.forEach((element) =>
                element.removeAttribute("inert")
            );
        }
        this.inertElements = [];

        // give the focus back (unless it already went somewhere else)
        const focused = document.activeElement;

        if (
            this.previousFocus?.isConnected &&
            (focused === null || focused === document.body)
        ) {
            this.previousFocus.focus({ preventScroll: true });
        }
        this.previousFocus = undefined;
    }

    /**
     * Add the dialog to the page.
     */
    open() {
        if (this.opened) {
            return;
        }

        // a modal dialog that was opened on top of this one before might have left it inert
        this.overlay?.removeAttribute("inert");
        this.container.removeAttribute("inert");

        if (this.overlay) {
            document.body.appendChild(this.overlay);
        }

        // it's only opened once it's in the page, so it can be opened again if this fails
        try {
            document.body.appendChild(this.container);
        } catch (error) {
            this.overlay?.remove();
            throw error;
        }

        this.opened = true;
        this.addModal();
    }

    /**
     * Remove the dialog from the page.
     */
    close() {
        if (!this.opened) {
            return;
        }
        this.opened = false;

        // remove the html elements (doesn't throw if something else already took them out of the page)
        this.overlay?.remove();
        this.container.remove();

        // clean up the event listeners, and give the page back
        this.removeModal();

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
