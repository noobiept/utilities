import { Dialog, DialogPosition } from "../../source/dialog.js";

window.onload = function() {
    const openModalDialog = document.getElementById("OpenModalDialog");
    const modalDialogCount = document.getElementById("ModalDialogCount");

    const openDialog = document.getElementById("OpenDialog");
    const dialogCount = document.getElementById("DialogCount");

    let modalCount = 0;
    let count = 0;

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

    // setup dialog without buttons
    const openWithout = document.getElementById("OpenDialogWithoutButtons");
    const dialogWithout = new Dialog({
        title: "Without",
        body: "Without buttons",
        okButton: false,
    });

    openWithout.onclick = () => {
        dialogWithout.toggle();
    };

    // setup dialog positioned in bottom left
    const openBottomLeft = document.getElementById("OpenDialogBottomLeft");
    openBottomLeft.onclick = () => {
        const dialog = new Dialog({
            title: "Bottom-left",
            body: "Positioned in the bottom left.",
            okButton: false,
            position: DialogPosition.bottomLeft,
        });
        dialog.open();
    };
};
