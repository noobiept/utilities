import { Dialog, DialogPosition, DialogButtons } from "../build/utilities.js";

window.onload = function () {
    dialogModal();
    dialogNonModal();
    dialogWithoutButtons();
    dialogBottomLeft();
    dialogWithHTMLElements();
    dialogWithStyling();
    dialogOverlayClose();
    dialogWithCustomButtons();
};

function dialogModal() {
    const openModalDialog = document.getElementById("OpenModalDialog");
    const modalDialogCount = document.getElementById("ModalDialogCount");

    let modalCount = 0;

    openModalDialog.onclick = () => {
        const dialog = new Dialog({
            title: "A Dialog",
            body: "Hi.",
            onClose: () => {
                modalCount++;
                modalDialogCount.innerText = modalCount.toString();
            },
        });
        dialog.open();
    };
}

function dialogNonModal() {
    const openDialog = document.getElementById("OpenDialog");
    const dialogCount = document.getElementById("DialogCount");
    let count = 0;

    openDialog.onclick = () => {
        const dialog = new Dialog({
            title: "Non-modal dialog",
            body: "Hello there!",
            modal: false,
            onClose: () => {
                count++;
                dialogCount.innerText = count.toString();
            },
        });
        dialog.open();
    };
}

function dialogWithoutButtons() {
    const openWithout = document.getElementById("OpenDialogWithoutButtons");
    const dialogWithout = new Dialog({
        title: "Without",
        body: "Without buttons",
        buttons: DialogButtons.none,
        closeOnOverlay: true,
    });

    openWithout.onclick = () => {
        dialogWithout.toggle();
    };
}

function dialogBottomLeft() {
    const openBottomLeft = document.getElementById("OpenDialogBottomLeft");
    openBottomLeft.onclick = () => {
        const dialog = new Dialog({
            title: "Bottom-left",
            body: "Positioned in the bottom left.",
            position: DialogPosition.bottomLeft,
        });
        dialog.open();
    };
}

function dialogWithHTMLElements() {
    const title = document.createElement("div");
    title.innerText = "The title";
    const titleButton = document.createElement("button");
    titleButton.innerText = "click me";

    title.appendChild(titleButton);

    const body = document.createElement("div");
    body.innerText = "The body";
    const hr = document.createElement("hr");
    const em = document.createElement("em");
    em.innerText = "yay";

    body.appendChild(hr);
    body.appendChild(em);

    const openWithHTMLElements = document.getElementById(
        "OpenDialogHTMLElement"
    );
    openWithHTMLElements.onclick = () => {
        const dialog = new Dialog({
            title,
            body,
        });
        dialog.open();
    };
}

function dialogWithStyling() {
    const openWithStyling = document.getElementById("OpenDialogWithStyling");
    openWithStyling.onclick = () => {
        const dialog = new Dialog({
            title: "title",
            body: "body",
        });
        dialog.container.id = "Alternate";
        dialog.open();
    };
}

function dialogOverlayClose() {
    const dialog = document.getElementById("OpenDialogOverlayClose");
    dialog.onclick = () => {
        const dialog = new Dialog({
            title: "title",
            body: "body",
            closeOnOverlay: true,
        });
        dialog.open();
    };
}

function dialogWithCustomButtons() {
    const button1 = document.createElement("button");
    button1.innerText = "Button 1";

    const button2 = document.createElement("button");
    button2.innerText = "Button 2";

    const button = document.getElementById("OpenDialogWithCustomButtons");
    button.onclick = () => {
        const dialog = new Dialog({
            title: "title",
            body: "body",
            buttons: [button1, button2],
        });
        dialog.open();
    };
}
