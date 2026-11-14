import { describe, test, expect, beforeEach, afterEach, vi } from "vitest";
import { Dialog, DialogButtons, DialogPosition } from "./dialog";

// keeps track of the opened dialogs ('clearMocks' resets it before each test)
const openSpy = vi.spyOn(Dialog.prototype, "open");

beforeEach(() => {
    document.body.replaceChildren();
});

afterEach(() => {
    // close the dialogs a test left opened, otherwise their keyboard listeners (on the document) react to the next tests' key events
    openSpy.mock.contexts.forEach((dialog) => dialog.close());
});

function keyboardEvent(
    target: EventTarget,
    type: "keydown" | "keyup",
    key: string
) {
    const event = new KeyboardEvent(type, {
        key,
        bubbles: true,
        cancelable: true,
    });
    target.dispatchEvent(event);

    return event;
}

function pressKey(target: EventTarget, key: string) {
    keyboardEvent(target, "keydown", key);
    keyboardEvent(target, "keyup", key);
}

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

    test("If the callback is called.", () => {
        const onClose = vi.fn();

        const dialog = new Dialog({
            title: "",
            body: "",
            onClose,
        });
        dialog.open();

        (document.querySelector(".dialogButton") as HTMLElement).click();

        expect(onClose).toHaveBeenCalled();
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
            dialog.close();
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

    test("Clicking the overlay closes the dialog when enabled.", () => {
        const onClose = vi.fn();
        const dialog = new Dialog({
            title: "",
            body: "",
            closeOnOverlay: true,
            onClose,
        });
        dialog.open();

        const overlay = document.querySelector(".dialogOverlay") as HTMLElement;
        overlay.click();

        expect(dialog.isOpened()).toBe(false);
        expect(document.querySelector(".dialog")).toBeNull();
        expect(onClose).toHaveBeenCalled();
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

    test("Strings are set as plain text, not parsed as HTML.", () => {
        const dialog = new Dialog({
            title: "<b>a title</b>",
            body: '<img src="x" onerror="alert(1)">',
        });
        dialog.open();

        // no elements should have been created from the strings
        expect(document.querySelector(".dialogTitle b")).toBeNull();
        expect(document.querySelector(".dialogBody img")).toBeNull();

        // the markup shows up as literal text instead
        expect(document.querySelector(".dialogTitle")?.textContent).toBe(
            "<b>a title</b>"
        );
        expect(document.querySelector(".dialogBody")?.textContent).toBe(
            '<img src="x" onerror="alert(1)">'
        );
    });

    test("Creating a dialog with custom buttons.", () => {
        const custom = document.createElement("button");
        custom.innerText = "Custom";

        const dialog = new Dialog({
            title: "",
            body: "",
            buttons: [custom],
        });
        dialog.open();

        // the buttons container should have the styling class as well
        const buttons = document.querySelector(".dialogButtons");
        expect(buttons).toBeTruthy();
        expect(buttons?.children[0]).toBe(custom);
    });

    test("A dialog with HTMLElement's as the title.", () => {
        const title = document.createElement("div");
        const titleButton = document.createElement("button");

        titleButton.textContent = "a button";
        title.className = "something";
        title.textContent = "title ";
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

        bodyText.textContent = "yay";
        body.className = "cool";
        body.textContent = "body";
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

    test("The 'escape' and 'enter' keys close a modal dialog.", () => {
        ["Escape", "Enter"].forEach((key) => {
            const dialog = new Dialog({ title: "", body: "" });
            dialog.open();

            pressKey(document.body, key);
            expect(dialog.isOpened()).toBe(false);
        });
    });

    test("Releasing a key that was pressed before the dialog opened doesn't close it (regression: opening with 'enter' closed it right away).", () => {
        const dialog = new Dialog({ title: "", body: "" });

        // the key that opened the dialog is released after it's already opened
        keyboardEvent(document.body, "keydown", "Enter");
        dialog.open();
        keyboardEvent(document.body, "keyup", "Enter");
        expect(dialog.isOpened()).toBe(true);

        // a key pressed before a previous close doesn't carry over to the next open either
        keyboardEvent(document.body, "keydown", "Escape");
        dialog.close();
        dialog.open();
        keyboardEvent(document.body, "keyup", "Escape");
        expect(dialog.isOpened()).toBe(true);

        pressKey(document.body, "Enter");
        expect(dialog.isOpened()).toBe(false);
    });

    test("Opening from an element's 'keydown' listener doesn't close it on the release (regression: the key press still reached the dialog's listener).", () => {
        ["Enter", "Escape"].forEach((key) => {
            const input = document.createElement("input");
            document.body.appendChild(input);

            const dialog = new Dialog({ title: "", body: "" });
            input.addEventListener("keydown", (event) => {
                if (event.key === key) {
                    dialog.open();
                }
            });

            const keyDown = keyboardEvent(input, "keydown", key);
            keyboardEvent(input, "keyup", key);
            expect(keyDown.defaultPrevented).toBe(false);
            expect(dialog.isOpened()).toBe(true);

            // the next key press closes it
            pressKey(document.body, key);
            expect(dialog.isOpened()).toBe(false);
        });
    });

    test("The 'enter' key is left to the controls inside the dialog.", () => {
        const body = document.createElement("div");
        const textarea = document.createElement("textarea");
        const button = document.createElement("button");
        body.append(textarea, button);

        const dialog = new Dialog({ title: "", body });
        dialog.open();

        [textarea, button].forEach((control) => {
            const keyDown = keyboardEvent(control, "keydown", "Enter");
            keyboardEvent(control, "keyup", "Enter");

            expect(keyDown.defaultPrevented).toBe(false);
            expect(dialog.isOpened()).toBe(true);
        });

        // 'escape' still closes it
        pressKey(textarea, "Escape");
        expect(dialog.isOpened()).toBe(false);
    });

    test("The 'enter' key doesn't reach the page behind a modal dialog.", () => {
        const pageButton = document.createElement("button");
        document.body.appendChild(pageButton);

        const dialog = new Dialog({ title: "", body: "" });
        dialog.open();

        // otherwise it would activate the focused button behind the dialog (like the one that opened it)
        const keyDown = keyboardEvent(pageButton, "keydown", "Enter");
        expect(keyDown.defaultPrevented).toBe(true);

        keyboardEvent(pageButton, "keyup", "Enter");
        expect(dialog.isOpened()).toBe(false);

        // once closed, the page gets the key again
        expect(
            keyboardEvent(pageButton, "keydown", "Enter").defaultPrevented
        ).toBe(false);
    });

    test("A non-modal dialog doesn't have keyboard shortcuts.", () => {
        const dialog = new Dialog({ title: "", body: "", modal: false });
        dialog.open();

        pressKey(document.body, "Escape");
        pressKey(document.body, "Enter");
        expect(dialog.isOpened()).toBe(true);
    });

    test("A key press only closes the modal dialog on top (regression: it closed all of them).", () => {
        const first = new Dialog({ title: "", body: "" });
        const second = new Dialog({ title: "", body: "" });
        first.open();
        second.open();

        pressKey(document.body, "Escape");
        expect(second.isOpened()).toBe(false);
        expect(first.isOpened()).toBe(true);

        pressKey(document.body, "Escape");
        expect(first.isOpened()).toBe(false);
    });

    test("Closing a dialog that was already taken out of the page (regression: it threw).", () => {
        const onClose = vi.fn();
        const dialog = new Dialog({ title: "", body: "", onClose });
        dialog.open();

        document.body.replaceChildren();

        expect(() => dialog.close()).not.toThrow();
        expect(dialog.isOpened()).toBe(false);
        expect(onClose).toHaveBeenCalledTimes(1);

        // its keyboard listeners were removed as well
        pressKey(document.body, "Escape");
        expect(onClose).toHaveBeenCalledTimes(1);
    });
});
