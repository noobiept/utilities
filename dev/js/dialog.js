import Dialog from "../../source/dialog.js";

window.onload = function() {
    const openModalDialog = document.getElementById("OpenModalDialog");
    const modalDialogCount = document.getElementById("ModalDialogCount");

    const openDialog = document.getElementById("OpenDialog");
    const dialogCount = document.getElementById("DialogCount");

    let modalCount = 0;
    let count = 0;

    openModalDialog.onclick = () => {
        new Dialog({
            title: "A Dialog",
            body: "Hi.",
            onClose: () => {
                modalCount++;
                modalDialogCount.innerText = modalCount.toString();
            },
        });
    };

    openDialog.onclick = () => {
        new Dialog({
            title: "Non-modal dialog",
            body: "Hello there!",
            modal: false,
            onClose: () => {
                count++;
                dialogCount.innerText = count.toString();
            },
        });
    };
};
