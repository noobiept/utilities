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
