import * as Utilities from "../../build/utilities.esm.js";

window.onload = function() {
    const openDialog = document.getElementById("OpenDialog");
    const dialogCount = document.getElementById("DialogCount");

    let count = 0;

    openDialog.onclick = () => {
        Utilities.createDialog({
            title: "A Dialog",
            body: "Hello there!",
            onClose: () => {
                count++;
                dialogCount.innerText = count.toString();
            },
        });
    };
};
