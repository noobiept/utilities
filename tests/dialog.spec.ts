import { test, expect } from "@playwright/test";

test.describe("Dialog", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("http://localhost:8080/dialog.html");
    });

    test("Should open and close a basic dialog.", async ({ page }) => {
        const dialog = page.locator(".dialog");
        await expect(dialog).not.toBeVisible();

        await page.locator("#OpenModalDialog").click();
        await expect(dialog).toBeVisible();

        await page.locator(".dialogButton").click();
        await expect(dialog).not.toBeVisible();
    });

    test("Should close the dialog when the 'escape' key is pressed.", async ({
        page,
    }) => {
        const dialog = page.locator(".dialog");
        await expect(dialog).not.toBeVisible();

        await page.locator("#OpenModalDialog").click();
        await expect(dialog).toBeVisible();

        await page.keyboard.press("Escape");
        await expect(dialog).not.toBeVisible();
    });

    test("Should close the dialog when the 'enter' key is pressed.", async ({
        page,
    }) => {
        const dialog = page.locator(".dialog");
        expect(dialog).not.toBeVisible();

        await page.locator("#OpenModalDialog").click();
        await expect(dialog).toBeVisible();

        await page.keyboard.press("Enter");
        await expect(dialog).not.toBeVisible();
    });
});
