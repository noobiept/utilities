import * as Utilities from "../source/utilities";
import { mockXHR, mockURL, mockImage, mockAudio } from "./mocks/global_objects";
import {
    generateFakeImageResponse,
    generateFakeAudioResponse,
} from "./mocks/generate_data";

describe("Preload", () => {
    const nativeXMLHttpRequest = window.XMLHttpRequest;
    const nativeURL = window.URL;
    const nativeImage = window.Image;
    const nativeAudio = window.Audio;

    afterEach(() => {
        window.XMLHttpRequest = nativeXMLHttpRequest;
        window.URL = nativeURL;
        window.Image = nativeImage;
        window.Audio = nativeAudio;
    });

    test("Loading json.", () => {
        expect.assertions(4);

        mockXHR(
            JSON.stringify({
                ok: true,
            })
        );

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

    test("Loading a text file.", () => {
        expect.assertions(1);

        const textContent = "test test";
        mockXHR(textContent);

        const preload = new Utilities.Preload();
        const manifest = [{ id: "text", path: "text.txt" }];

        preload.addEventListener("complete", (data) => {
            const text = preload.get("text");
            expect(text).toBe(textContent);
        });
        preload.loadManifest(manifest);
    });

    test("Loading a .ogg audio file.", () => {
        expect.assertions(1);

        mockXHR(generateFakeAudioResponse());
        mockURL();
        mockAudio();

        const preload = new Utilities.Preload();
        const manifest = [{ id: "ogg", path: "test.ogg" }];

        preload.addEventListener("complete", (data) => {
            const audio = preload.get("ogg");
            expect(audio instanceof Audio).toBe(true);
        });
        preload.loadManifest(manifest);
    });

    test("Loading a .mp3 audio file.", () => {
        expect.assertions(1);

        mockXHR(generateFakeAudioResponse());
        mockURL();
        mockAudio();

        const preload = new Utilities.Preload();
        const manifest = [{ id: "mp3", path: "test.mp3" }];

        preload.addEventListener("complete", (data) => {
            const audio = preload.get("mp3");
            expect(audio instanceof Audio).toBe(true);
        });
        preload.loadManifest(manifest);
    });

    test("Saving in a global object instead of on the preload instance.", () => {
        expect.assertions(2);

        const textContent = "test test";
        const id = "text";
        mockXHR(textContent);

        const preload = new Utilities.Preload({ saveGlobal: true });
        const manifest = [{ id, path: "text.txt" }];

        preload.addEventListener("complete", (data) => {
            // shouldn't be in the instance
            const text = preload.get(id);
            expect(text).toBeUndefined();

            // but in the global state
            const globalText = Utilities.Preload.get(id);
            expect(globalText).toBe(textContent);
        });
        preload.loadManifest(manifest);
    });

    test("When an asset failed to load, its ID should be on the 'complete' event 'failed_ids' array.", () => {
        expect.assertions(2);

        const textContent = "test test";
        const id = "text";
        mockXHR(textContent, 500);

        const preload = new Utilities.Preload();
        const manifest = [{ id, path: "text.txt" }];

        preload.addEventListener("complete", (data) => {
            expect(data.loaded_ids.length).toBe(0);
            expect(data.failed_ids[0]).toBe(id);
        });
        preload.loadManifest(manifest);
    });
});
