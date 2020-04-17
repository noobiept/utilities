import * as Utilities from "../source/utilities";
import { mockXHR, mockURL, mockImage } from "./mocks/global_objects";
import { generateFakeImageResponse } from "./mocks/generate_data";

describe("Preload", () => {
    const nativeXMLHttpRequest = window.XMLHttpRequest;
    const nativeURL = window.URL;
    const nativeImage = window.Image;

    afterEach(() => {
        window.XMLHttpRequest = nativeXMLHttpRequest;
        window.URL = nativeURL;
        window.Image = nativeImage;
    });

    test("Loading json.", () => {
        expect.assertions(4);

        mockXHR({
            ok: true,
        });

        const preload = new Utilities.Preload();
        const manifest = [{ id: "json", path: "test.json" }];

        preload.addEventListener("complete", (data) => {
            expect(data.failed_ids.length).toBe(0);
            expect(data.loaded_ids.length).toBe(1);
            expect(data.loaded_ids[0]).toBe("json");

            const json = preload.get("json");
            expect(json["ok"]).toBe(true);
        });
        preload.loadManifest(manifest);
    });

    test("Loading an image.", () => {
        expect.assertions(1);

        mockXHR(generateFakeImageResponse());
        mockURL();
        mockImage();

        const preload = new Utilities.Preload();
        const manifest = [{ id: "image", path: "test.png" }];

        preload.addEventListener("complete", (data) => {
            const image = preload.get("image");
            expect(image instanceof Image).toBe(true);
        });
        preload.loadManifest(manifest);
    });
});
