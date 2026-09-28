import { test, expect, type Page } from "@playwright/test";

// These run in a real browser, since the unit tests mock the XMLHttpRequest/Image/Audio objects (and can't catch how the browser really behaves).

type ManifestData = { id: string; path: string; type?: string }[];

/**
 * Preload the files on the page, and resolve with the 'complete' event data plus the events that were dispatched (in order).
 */
function preload(page: Page, manifest: ManifestData) {
    return page.evaluate(async (manifest) => {
        // the dev build served by the test server (in a variable, since it's not a module the editor can resolve)
        const devBuild = "/build/index.js";
        const { Preload } = await import(devBuild);
        const preload = new Preload();
        const events: string[] = [];

        preload.addEventListener("fileload", (data: { id: string }) => {
            events.push(`fileload ${data.id}`);
        });
        preload.addEventListener("error", (data: { id: string }) => {
            events.push(`error ${data.id}`);
        });

        return new Promise<{
            loaded: string[];
            failed: string[];
            events: string[];
        }>((resolve) => {
            preload.addEventListener(
                "complete",
                (data: { loaded_ids: string[]; failed_ids: string[] }) => {
                    events.push("complete");
                    (window as any).preload = preload; // to check the loaded files afterwards
                    resolve({
                        loaded: data.loaded_ids,
                        failed: data.failed_ids,
                        events,
                    });
                }
            );
            preload.loadManifest(manifest);
        });
    }, manifest);
}

test.describe("Preload", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("http://localhost:8080/index.html");
    });

    test("Should load every supported file type.", async ({ page }) => {
        const result = await preload(page, [
            { id: "json", path: "assets/test.json" },
            { id: "json2", path: "assets/json_without_ext", type: "json" },
            { id: "image", path: "assets/image.png" },
            { id: "text", path: "assets/text.txt" },
            { id: "mp3", path: "assets/scumm_bar.mp3" },
            { id: "ogg", path: "assets/space_ship_1.ogg" },
        ]);

        expect(result.failed).toEqual([]);
        expect([...result.loaded].sort()).toEqual(
            ["image", "json", "json2", "mp3", "ogg", "text"].sort()
        );

        const loaded = await page.evaluate(() => {
            const preload = (window as any).preload;

            return {
                json: preload.get("json"),
                json2: preload.get("json2"),
                text: preload.get("text"),
                image: preload.get("image") instanceof HTMLImageElement,
                mp3: preload.get("mp3") instanceof HTMLAudioElement,
                ogg: preload.get("ogg") instanceof HTMLAudioElement,
            };
        });
        expect(loaded).toEqual({
            json: { ok: true },
            json2: { nice: true },
            text: "Some text.\n",
            image: true,
            mp3: true,
            ogg: true,
        });
    });

    test("Should fail a json file with invalid content.", async ({ page }) => {
        // with the browser's own json parsing, an invalid file came back as 'null' (and was loaded as a valid value)
        await page.route("**/invalid.json", (route) =>
            route.fulfill({
                contentType: "application/json",
                body: "{ not valid json",
            })
        );

        const result = await preload(page, [
            { id: "invalid", path: "invalid.json" },
        ]);

        expect(result.loaded).toEqual([]);
        expect(result.failed).toEqual(["invalid"]);
    });

    test("Should dispatch the 'error' event for an HTTP error status, before 'complete'.", async ({
        page,
    }) => {
        await page.route("**/missing.txt", (route) =>
            route.fulfill({ status: 404, body: "not found" })
        );

        const result = await preload(page, [
            { id: "missing", path: "missing.txt" },
        ]);

        expect(result.failed).toEqual(["missing"]);
        expect(result.events).toEqual(["error missing", "complete"]);
    });

    test("Should report an audio file only once, even after seeking.", async ({
        page,
    }) => {
        // the browser fires 'canplay' again after seeking, which dispatched the 'fileload'/'complete' events again
        await preload(page, [{ id: "mp3", path: "assets/scumm_bar.mp3" }]);

        const eventsAfterSeeking = await page.evaluate(async () => {
            const preload = (window as any).preload;
            const audio: HTMLAudioElement = preload.get("mp3");
            let events = 0;

            preload.addEventListener("fileload", () => events++);
            preload.addEventListener("complete", () => events++);

            for (const time of [5, 0]) {
                audio.currentTime = time;
                await new Promise((resolve) =>
                    audio.addEventListener("canplay", resolve, { once: true })
                );
            }

            return events;
        });

        expect(eventsAfterSeeking).toBe(0);
    });
});
