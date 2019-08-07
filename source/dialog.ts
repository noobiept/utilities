export interface DialogArgs {
    title: string;
    body: string;
    onClose: () => void;
}

export function createDialog(args: DialogArgs) {
    const overlay = document.createElement("div");
    const container = document.createElement("div");
    const title = document.createElement("div");
    const body = document.createElement("div");
    const horizontalRule = document.createElement("hr");
    const buttons = document.createElement("div");
    const ok = document.createElement("button");

    title.className = "dialogTitle";
    body.className = "dialogBody";
    overlay.className = "dialogOverlay";
    container.className = "dialog";
    buttons.className = "dialogButtons";
    ok.className = "dialogButton";

    const keyUp = (event: KeyboardEvent) => {
        switch (event.key) {
            case "Escape":
            case "Enter":
                removeDialog();
                break;
        }
    };
    const removeDialog = () => {
        document.removeEventListener("keyup", keyUp);
        document.body.removeChild(overlay);
        document.body.removeChild(container);

        args.onClose();
    };

    ok.innerText = "Ok";
    ok.onclick = removeDialog;
    body.innerHTML = args.body;
    title.innerHTML = args.title;

    buttons.appendChild(ok);
    container.appendChild(title);
    container.appendChild(body);
    container.appendChild(horizontalRule);
    container.appendChild(buttons);

    document.body.appendChild(overlay);
    document.body.appendChild(container);

    document.addEventListener("keyup", keyUp);
}
