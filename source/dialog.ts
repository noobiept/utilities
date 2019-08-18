export interface DialogArgs {
    title: string;
    body: string;
    onClose: () => void;
    modal?: boolean;
}

/**
 * Create a dialog window with the given message.
 * Can be a modal (forces user interaction) or not.
 */
export function createDialog(args: DialogArgs) {
    // if its not modal, then it doesn't have an overlay and the keyboard shortcuts
    if (args.modal === false) {
        const onClose = () => {
            document.body.removeChild(container);
            args.onClose();
        };

        const container = createContainer(args.title, args.body, onClose);
        document.body.appendChild(container);
    } else {
        const onClose = () => {
            removeKeyboardShortcuts(keyUp);
            document.body.removeChild(overlay);
            document.body.removeChild(container);
            args.onClose();
        };

        const overlay = createOverlay();
        const container = createContainer(args.title, args.body, onClose);

        document.body.appendChild(overlay);
        document.body.appendChild(container);

        const keyUp = setupKeyboardShortcuts(onClose);
    }
}

function createContainer(
    titleText: string,
    bodyText: string,
    removeDialog: () => void
) {
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
    ok.onclick = removeDialog;
    body.innerHTML = bodyText;
    title.innerHTML = titleText;

    buttons.appendChild(ok);
    container.appendChild(title);
    container.appendChild(body);
    container.appendChild(horizontalRule);
    container.appendChild(buttons);

    return container;
}

function createOverlay() {
    const overlay = document.createElement("div");
    overlay.className = "dialogOverlay";

    return overlay;
}

function setupKeyboardShortcuts(removeDialog: () => void) {
    const keyUp = (event: KeyboardEvent) => {
        switch (event.key) {
            case "Escape":
            case "Enter":
                removeDialog();
                break;
        }
    };

    document.addEventListener("keyup", keyUp);
    return keyUp;
}

function removeKeyboardShortcuts(
    keyUpListener: (event: KeyboardEvent) => void
) {
    document.removeEventListener("keyup", keyUpListener);
}
