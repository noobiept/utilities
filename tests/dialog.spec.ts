import { test, expect } from "@playwright/test";

test.describe("Dialog", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("http://localhost:8080/dialog.html");
    });

    test("Should open and close a basic dialog.", async ({ page }) => {
        await expect(page.locator(".dialog")).not.toBeVisible();

        await page.locator("#OpenModalDialog").click();
        await expect(page.locator(".dialog")).toBeVisible();

        await page.locator(".dialogButton").click();
        await expect(page.locator(".dialog")).not.toBeVisible();
    });

    test("Should close the dialog when the 'escape' key is pressed.", async ({
        page,
    }) => {
        await expect(page.locator(".dialog")).not.toBeVisible();

        await page.locator("#OpenModalDialog").click();
        await expect(page.locator(".dialog")).toBeVisible();

        await page.keyboard.press("Escape");
        await expect(page.locator(".dialog")).not.toBeVisible();
    });

    test("Should close the dialog when the 'enter' key is pressed.", async ({
        page,
    }) => {
        expect(page.locator(".dialog")).not.toBeVisible();

        await page.locator("#OpenModalDialog").click();
        await expect(page.locator(".dialog")).toBeVisible();

        await page.keyboard.press("Enter");
        await expect(page.locator(".dialog")).not.toBeVisible();
    });

    test("Should stay open when opened with the 'enter' key.", async ({
        page,
    }) => {
        // the button's click happens on the key press, so the key is released with the dialog already opened (regression: that closed it right away)
        await page.locator("#OpenModalDialog").focus();
        await page.keyboard.press("Enter");
        await expect(page.locator(".dialog")).toHaveCount(1);
        await expect(page.locator(".dialog")).toBeVisible();

        // the button still has the focus, pressing 'enter' again closes the dialog instead of opening another one
        await page.keyboard.press("Enter");
        await expect(page.locator(".dialog")).toHaveCount(0);
        await expect(page.locator("#ModalDialogCount")).toHaveText("1");
    });

    test("Should apply the dialog stylesheet.", async ({ page }) => {
        await page.locator("#OpenModalDialog").click();
        const dialog = page.locator(".dialog");
        await expect(dialog).toBeVisible();

        // These values come only from dialog.css — an unstyled <div> would be
        // position:static / z-index:auto, and the title would not be bold. So
        // if the stylesheet failed to load, these assertions fail.
        await expect(dialog).toHaveCSS("position", "fixed");
        await expect(dialog).toHaveCSS("z-index", "101");
        await expect(page.locator(".dialogTitle")).toHaveCSS(
            "font-weight",
            "700"
        );
    });
});
