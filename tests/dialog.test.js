import { createDialog } from "../source/utilities";

beforeEach(() => {
    document.body.innerHTML = "";
});

test("Verify that all elements are created.", () => {
    createDialog({
        title: "",
        body: "",
        onClose: () => {},
    });

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

    createDialog({
        title: title,
        body: body,
        onClose: () => {},
    });

    expect(document.querySelector(".dialogTitle").innerHTML).toBe(title);
    expect(document.querySelector(".dialogBody").innerHTML).toBe(body);
    expect(document.querySelector(".dialogButton").innerText).toBe("Ok");
});

test("If the dialog is correctly removed after pressing the button.", () => {
    createDialog({
        title: "",
        body: "",
        onClose: () => {},
    });
    expect(document.body.innerHTML).not.toBe("");

    document.querySelector(".dialogButton").click();
    expect(document.body.innerHTML).toBe("");
});

test("If the callback is called.", (done) => {
    expect.assertions(1);

    const onClose = jest.fn(() => {
        expect(onClose).toBeCalled();
        done();
    });

    createDialog({
        title: "",
        body: "",
        onClose,
    });

    document.querySelector(".dialogButton").click();
});
/*
test("If the dialog is correctly removed after pressing the 'enter' key.", (done) => {
    expect.assertions(3);

    const onClose = jest.fn(() => {
        expect(onClose).toBeCalled();
        expect(document.body.innerHTML).toBe("");
        done();
    });

    // test the 'enter' key
    createDialog({
        title: "",
        body: "",
        onClose,
    });
    expect(document.body.innerHTML).not.toBe("");

    const escape = new KeyboardEvent("keyup", { key: "Enter" });
    document.dispatchEvent(escape);
});

test("If the dialog is correctly removed after pressing the 'escape' key.", (done) => {
    expect.assertions(3);

    const onClose = jest.fn(() => {
        expect(onClose).toBeCalled();
        expect(document.body.innerHTML).toBe("");
        done();
    });

    // test the 'escape' key
    createDialog({
        title: "",
        body: "",
        onClose,
    });
    expect(document.body.innerHTML).not.toBe("");

    const escape = new KeyboardEvent("keyup", { key: "Escape" });
    document.dispatchEvent(escape);
});
*/
