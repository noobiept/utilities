import { Dialog, DialogButtons, DialogPosition } from "./dialog";

beforeEach(() => {
    document.body.innerHTML = "";
});

describe("Dialog", () => {
    test("Verify that all elements are created.", () => {
        const dialog = new Dialog({
            title: "",
            body: "",
        });
        dialog.open();

        expect(document.querySelector(".dialogOverlay")).toBeTruthy();
        expect(document.querySelector(".dialog")).toBeTruthy();
        expect(document.querySelector(".dialogTitle")).toBeTruthy();
        expect(document.querySelector(".dialogBody")).toBeTruthy();
        expect(document.querySelector(".dialog hr")).toBeTruthy();
        expect(document.querySelector(".dialogButtons")).toBeTruthy();
        expect(document.querySelector(".dialogButton")).toBeTruthy();
    });

    test("Check if the title and body are correctly set.", () => {
        const title = "The title.";
        const body = "The body.";

        const dialog = new Dialog({
            title: title,
            body: body,
        });
        dialog.open();

        expect(document.querySelector(".dialogTitle")?.innerHTML).toBe(title);
        expect(document.querySelector(".dialogBody")?.innerHTML).toBe(body);
        expect(
            (document.querySelector(".dialogButton") as HTMLElement).innerText
        ).toBe("Ok");
    });

    test("If the dialog is correctly removed after pressing the button.", () => {
        const dialog = new Dialog({
            title: "",
            body: "",
        });
        dialog.open();

        expect(document.body.innerHTML).not.toBe("");

        const dialogButton = document.querySelector(
            ".dialogButton"
        ) as HTMLElement;
        dialogButton?.click();
        expect(document.body.innerHTML).toBe("");
    });

    test("If the callback is called.", (done) => {
        expect.assertions(1);

        const onClose = jest.fn(() => {
            expect(onClose).toHaveBeenCalled();
            done();
        });

        const dialog = new Dialog({
            title: "",
            body: "",
            onClose,
        });
        dialog.open();

        (document.querySelector(".dialogButton") as HTMLElement).click();
    });

    test("The 'position' argument.", () => {
        const testDialogPosition = (
            position: DialogPosition | undefined,
            dialogCss: string
        ) => {
            const dialog = new Dialog({
                title: "a",
                body: "b",
                position,
            });
            dialog.open();

            const dialogElement = document.querySelector(".dialog");
            expect(dialogElement?.classList.contains(dialogCss)).toBe(true);

            // clear the previous dialog
            document.body.innerHTML = "";
        };

        // default is 'center'
        testDialogPosition(undefined, "dialog-center");

        // test that when setting the 'position' argument you get the correct css class set
        const positions = {
            "dialog-bottomLeft": DialogPosition.bottomLeft,
            "dialog-bottom": DialogPosition.bottom,
            "dialog-bottomRight": DialogPosition.bottomRight,
            "dialog-center": DialogPosition.center,
        };

        Object.entries(positions).forEach(([key, value]) => {
            testDialogPosition(value, key);
        });
    });

    test("The '.open()' method.", () => {
        const dialog = new Dialog({
            title: "",
            body: "",
        });

        // not added yet
        expect(document.querySelector(".dialog")).not.toBeTruthy();
        expect(dialog.isOpened()).toBe(false);

        // added
        dialog.open();
        expect(document.querySelector(".dialog")).toBeTruthy();
        expect(dialog.isOpened()).toBe(true);

        // already opened, shouldn't make a difference
        dialog.open();
        expect(document.querySelector(".dialog")).toBeTruthy();
        expect(dialog.isOpened()).toBe(true);
    });

    test("The '.close()' method.", () => {
        const dialog = new Dialog({
            title: "",
            body: "",
        });

        // not added yet
        expect(document.querySelector(".dialog")).not.toBeTruthy();
        expect(document.querySelector(".dialogOverlay")).not.toBeTruthy();
        expect(dialog.isOpened()).toBe(false);

        // added
        dialog.open();
        expect(document.querySelector(".dialog")).toBeTruthy();
        expect(document.querySelector(".dialogOverlay")).toBeTruthy();
        expect(dialog.isOpened()).toBe(true);

        // closed
        dialog.close();
        expect(document.querySelector(".dialog")).not.toBeTruthy();
        expect(document.querySelector(".dialogOverlay")).not.toBeTruthy();
        expect(dialog.isOpened()).toBe(false);

        // already closed, shouldn't make a difference
        dialog.close();
        expect(document.querySelector(".dialog")).not.toBeTruthy();
        expect(document.querySelector(".dialogOverlay")).not.toBeTruthy();
        expect(dialog.isOpened()).toBe(false);
    });

    test("The '.close()' on a non-modal dialog.", () => {
        const dialog = new Dialog({
            title: "",
            body: "",
            modal: false,
        });

        // not added yet
        expect(document.querySelector(".dialog")).not.toBeTruthy();
        expect(document.querySelector(".dialogOverlay")).not.toBeTruthy();
        expect(dialog.isOpened()).toBe(false);

        // added
        dialog.open();
        expect(document.querySelector(".dialog")).toBeTruthy();
        expect(document.querySelector(".dialogOverlay")).not.toBeTruthy();
        expect(dialog.isOpened()).toBe(true);

        // closed
        dialog.close();
        expect(document.querySelector(".dialog")).not.toBeTruthy();
        expect(document.querySelector(".dialogOverlay")).not.toBeTruthy();
        expect(dialog.isOpened()).toBe(false);
    });

    test("The '.toggle()' method.", () => {
        const dialog = new Dialog({
            title: "",
            body: "",
        });

        // not added yet
        expect(document.querySelector(".dialog")).not.toBeTruthy();
        expect(document.querySelector(".dialogOverlay")).not.toBeTruthy();
        expect(dialog.isOpened()).toBe(false);

        // opened
        dialog.toggle();
        expect(document.querySelector(".dialog")).toBeTruthy();
        expect(document.querySelector(".dialogOverlay")).toBeTruthy();
        expect(dialog.isOpened()).toBe(true);

        // closed
        dialog.toggle();
        expect(document.querySelector(".dialog")).not.toBeTruthy();
        expect(document.querySelector(".dialogOverlay")).not.toBeTruthy();
        expect(dialog.isOpened()).toBe(false);

        // opened again
        dialog.toggle();
        expect(document.querySelector(".dialog")).toBeTruthy();
        expect(dialog.isOpened()).toBe(true);
    });

    test("The '.setTitle()' method.", () => {
        const dialog = new Dialog({
            title: "First.",
            body: "",
        });
        dialog.open();
        expect(document.querySelector(".dialogTitle")?.innerHTML).toBe(
            "First."
        );

        dialog.setTitle("Second.");
        expect(document.querySelector(".dialogTitle")?.innerHTML).toBe(
            "Second."
        );
    });

    test("The '.setBody()' method.", () => {
        const dialog = new Dialog({
            title: "",
            body: "First.",
        });
        dialog.open();
        expect(document.querySelector(".dialogBody")?.innerHTML).toBe("First.");

        dialog.setBody("Second.");
        expect(document.querySelector(".dialogBody")?.innerHTML).toBe(
            "Second."
        );
    });

    test("Creating a non-modal dialog.", () => {
        const dialog = new Dialog({
            title: "",
            body: "",
            modal: false,
        });
        dialog.open();

        expect(document.querySelector(".dialog")).toBeTruthy();
        expect(document.querySelector(".dialogOverlay")).not.toBeTruthy();
    });

    test("Creating a dialog without the 'ok' button.", () => {
        const dialog = new Dialog({
            title: "",
            body: "",
            modal: false,
            buttons: DialogButtons.none,
        });
        dialog.open();

        expect(document.querySelector(".dialog")).toBeTruthy();
        expect(document.querySelector(".dialogOverlay")).not.toBeTruthy();
        expect(document.querySelector(".dialogTitle")).toBeTruthy();
        expect(document.querySelector(".dialogBody")).toBeTruthy();
        expect(document.querySelector(".dialog hr")).not.toBeTruthy();
        expect(document.querySelector(".dialogButtons")).not.toBeTruthy();
        expect(document.querySelector(".dialogButton")).not.toBeTruthy();
    });

    test("A dialog with HTMLElement's as the title.", () => {
        const title = document.createElement("div");
        const titleButton = document.createElement("button");

        titleButton.innerHTML = "a button";
        title.className = "something";
        title.innerHTML = "title ";
        title.appendChild(titleButton);

        const dialog = new Dialog({
            title,
            body: "The body",
        });
        dialog.open();

        expect(document.querySelector(".dialogTitle")?.innerHTML).toBe(
            '<div class="something">title <button>a button</button></div>'
        );
        expect(document.querySelector(".dialogBody")?.innerHTML).toBe(
            "The body"
        );
    });

    test("A dialog with HTMLElement's as the body.", () => {
        const body = document.createElement("div");
        const bodyHr = document.createElement("hr");
        const bodyText = document.createElement("div");

        bodyText.innerHTML = "yay";
        body.className = "cool";
        body.innerHTML = "body";
        body.appendChild(bodyHr);
        body.appendChild(bodyText);

        const dialog = new Dialog({
            title: "title",
            body,
        });
        dialog.open();

        expect(document.querySelector(".dialogTitle")?.innerHTML).toBe("title");
        expect(document.querySelector(".dialogBody")?.innerHTML).toBe(
            '<div class="cool">body<hr><div>yay</div></div>'
        );
    });

    test("A dialog with a specific ID.", () => {
        const id = "SpecificID";
        const dialog = new Dialog({
            title: "title",
            body: "body",
        });
        dialog.container.id = id;
        dialog.open();

        const container = document.querySelector(".dialog");
        expect(container?.id).toBe(id);
    });
});
