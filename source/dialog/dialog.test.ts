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
    key: string,
    init?: KeyboardEventInit
) {
    // like the browser's keyboard events (which also get out of a shadow DOM)
    const event = new KeyboardEvent(type, {
        key,
        bubbles: true,
        cancelable: true,
        composed: true,
        ...init,
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
        const inputButton = document.createElement("input");
        inputButton.type = "button";
        const form = document.createElement("form");
        const formField = document.createElement("input");
        form.append(formField);
        const details = document.createElement("details");
        const summary = document.createElement("summary");
        details.append(summary);
        body.append(textarea, button, inputButton, form, details);

        const dialog = new Dialog({ title: "", body });
        dialog.open();

        [textarea, button, inputButton, formField, summary].forEach(
            (control) => {
                const keyDown = keyboardEvent(control, "keydown", "Enter");
                keyboardEvent(control, "keyup", "Enter");

                expect(keyDown.defaultPrevented).toBe(false);
                expect(dialog.isOpened()).toBe(true);
            }
        );

        // 'escape' still closes it
        pressKey(textarea, "Escape");
        expect(dialog.isOpened()).toBe(false);
    });

    test("The 'enter' key on a field outside of a form, or on a checkbox, still closes the dialog (regression: it did nothing, so a prompt couldn't be confirmed with it).", () => {
        ["text", "checkbox"].forEach((type) => {
            const input = document.createElement("input");
            input.type = type;

            const dialog = new Dialog({ title: "", body: input });
            dialog.open();

            const keyDown = keyboardEvent(input, "keydown", "Enter");
            keyboardEvent(input, "keyup", "Enter");
            expect(keyDown.defaultPrevented).toBe(true);
            expect(dialog.isOpened()).toBe(false);
        });
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

    test("The 'enter' key is left to the controls inside a shadow DOM (regression: the event's target is the host element, so it closed the dialog).", () => {
        const host = document.createElement("div");
        const textarea = document.createElement("textarea");
        host.attachShadow({ mode: "open" }).appendChild(textarea);

        const dialog = new Dialog({ title: "", body: host });
        dialog.open();

        const keyDown = keyboardEvent(textarea, "keydown", "Enter");
        keyboardEvent(textarea, "keyup", "Enter");
        expect(keyDown.defaultPrevented).toBe(false);
        expect(dialog.isOpened()).toBe(true);
    });

    test("The 'enter' key is left to the controls opened on top of a modal dialog (regression: a popup outside of the dialog closed it).", () => {
        const dialog = new Dialog({ title: "", body: "" });
        dialog.open();

        // a popup added to the page after the dialog was opened (like the options of an autocomplete), and a non-modal dialog on top
        const popupOption = document.createElement("button");
        document.body.appendChild(popupOption);
        const nonModal = new Dialog({ title: "", body: "", modal: false });
        nonModal.open();

        [popupOption, nonModal.buttons!.querySelector("button")!].forEach(
            (control) => {
                const keyDown = keyboardEvent(control, "keydown", "Enter");
                keyboardEvent(control, "keyup", "Enter");

                expect(keyDown.defaultPrevented).toBe(false);
                expect(dialog.isOpened()).toBe(true);
            }
        );
    });

    test("A key that something else already took care of doesn't close the dialog (regression: a widget's own 'escape', or an input method composing text, closed it).", () => {
        // a widget that closes its own popup on 'escape'
        const input = document.createElement("input");
        input.addEventListener("keydown", (event) => {
            event.preventDefault();
        });

        const dialog = new Dialog({ title: "", body: input });
        dialog.open();

        pressKey(input, "Escape");
        expect(dialog.isOpened()).toBe(true);

        // 'escape' cancels the text that an input method is composing
        keyboardEvent(document.body, "keydown", "Escape", {
            isComposing: true,
        });
        keyboardEvent(document.body, "keyup", "Escape");
        expect(dialog.isOpened()).toBe(true);

        pressKey(document.body, "Escape");
        expect(dialog.isOpened()).toBe(false);
    });

    test("The page behind a modal dialog is inert, and the focus moves into the dialog (regression: the focused button behind it could open another dialog).", () => {
        const opener = document.createElement("button");
        const alreadyInert = document.createElement("div");
        alreadyInert.setAttribute("inert", "");
        document.body.append(opener, alreadyInert);
        opener.focus();

        const dialog = new Dialog({ title: "", body: "" });
        dialog.open();

        expect(opener.hasAttribute("inert")).toBe(true);
        expect(dialog.container.hasAttribute("inert")).toBe(false);
        expect(
            document.querySelector(".dialogOverlay")!.hasAttribute("inert")
        ).toBe(false);
        expect(document.activeElement).toBe(dialog.container);

        dialog.close();
        expect(opener.hasAttribute("inert")).toBe(false);
        expect(alreadyInert.hasAttribute("inert")).toBe(true);

        // the focus goes back to where it was
        expect(document.activeElement).toBe(opener);
    });

    test("The page stays inert until the last modal dialog is closed, in any order.", () => {
        const page = document.createElement("div");
        document.body.appendChild(page);

        const first = new Dialog({ title: "", body: "" });
        const second = new Dialog({ title: "", body: "" });
        first.open();
        second.open();
        expect(page.hasAttribute("inert")).toBe(true);
        expect(first.container.hasAttribute("inert")).toBe(true);
        expect(second.container.hasAttribute("inert")).toBe(false);

        // closing the one below first
        first.close();
        expect(page.hasAttribute("inert")).toBe(true);

        // opened again, now on top
        first.open();
        expect(first.container.hasAttribute("inert")).toBe(false);
        expect(second.container.hasAttribute("inert")).toBe(true);

        first.close();
        expect(second.container.hasAttribute("inert")).toBe(false);
        expect(page.hasAttribute("inert")).toBe(true);

        second.close();
        expect(page.hasAttribute("inert")).toBe(false);
    });

    test("Releasing a key after another modal dialog opened on top doesn't close the one below (regression: it closed it under the other one).", () => {
        const first = new Dialog({ title: "", body: "" });
        const second = new Dialog({ title: "", body: "" });
        first.open();

        keyboardEvent(document.body, "keydown", "Escape");
        second.open();
        keyboardEvent(document.body, "keyup", "Escape");

        expect(first.isOpened()).toBe(true);
        expect(second.isOpened()).toBe(true);
    });

    test("A dialog that failed to open can be opened again, and doesn't affect the other dialogs (regression: it stayed marked as opened, with its overlay blocking the page, and closing it took another dialog off the keyboard shortcuts).", () => {
        const first = new Dialog({ title: "", body: "" });
        const second = new Dialog({ title: "", body: "" });
        first.open();

        // the overlay is added, but not the dialog
        const append = document.body.appendChild.bind(document.body);
        const spy = vi
            .spyOn(document.body, "appendChild")
            .mockImplementationOnce((node) => append(node))
            .mockImplementationOnce(() => {
                throw new Error("failed");
            });
        expect(() => second.open()).toThrow("failed");
        spy.mockRestore();

        expect(second.isOpened()).toBe(false);
        expect(document.querySelectorAll(".dialogOverlay")).toHaveLength(1);
        second.close();

        // the other dialog still reacts to the keyboard
        pressKey(document.body, "Escape");
        expect(first.isOpened()).toBe(false);

        second.open();
        expect(second.isOpened()).toBe(true);
    });

    test("A non-modal dialog opened again over a modal dialog isn't inert (regression: it kept the inert from when it was behind the modal).", () => {
        const nonModal = new Dialog({ title: "", body: "", modal: false });
        nonModal.open();
        const modal = new Dialog({ title: "", body: "" });
        modal.open();
        expect(nonModal.container.hasAttribute("inert")).toBe(true);

        nonModal.close();
        nonModal.open();
        expect(nonModal.container.hasAttribute("inert")).toBe(false);
    });

    test("A key whose release got lost doesn't close the dialog on a later press that something else took care of (regression: it closed it).", () => {
        // a widget that takes care of 'escape' itself
        const input = document.createElement("input");
        input.addEventListener("keydown", (event) => {
            event.preventDefault();
        });

        const dialog = new Dialog({ title: "", body: input });
        dialog.open();

        // the release of this one never comes (the window lost the focus, for example)
        keyboardEvent(document.body, "keydown", "Escape");

        pressKey(input, "Escape");
        expect(dialog.isOpened()).toBe(true);
    });

    test("Closing a modal dialog under another one passes on where to give the focus back (regression: it was lost when a wizard's next step opened before the current one closed).", () => {
        const opener = document.createElement("button");
        document.body.appendChild(opener);
        opener.focus();

        const current = new Dialog({ title: "", body: "" });
        current.open();
        const next = new Dialog({ title: "", body: "" });
        next.open();
        current.close();
        expect(document.activeElement).toBe(next.container);

        next.close();
        expect(document.activeElement).toBe(opener);
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
