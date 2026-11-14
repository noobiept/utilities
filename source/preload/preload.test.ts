import { describe, test, expect, afterEach, vi } from "vitest";
import {
    mockXHR,
    mockURL,
    mockImage,
    mockAudio,
} from "../tests/mocks/global_objects";
import {
    generateFakeImageResponse,
    generateFakeAudioResponse,
} from "../tests/mocks/generate_data";
import { Preload } from "./preload";

type XhrListener = (event: ProgressEvent) => void;

type ControlledXhr = {
    status: number;
    response: any;
    responseType: XMLHttpRequestResponseType;
    trigger: (type: string, event?: ProgressEvent) => void;
};

function mockControlledXHR() {
    const requests: ControlledXhr[] = [];

    class MockXHR {
        status = 200;
        response: any = "";
        responseType: XMLHttpRequestResponseType = "";
        private listeners: Record<string, XhrListener[]> = {};

        constructor() {
            requests.push(this);
        }

        open = vi.fn();
        send = vi.fn();

        addEventListener(type: string, listener: XhrListener) {
            if (!this.listeners[type]) {
                this.listeners[type] = [];
            }

            this.listeners[type].push(listener);
        }

        trigger(type: string, event = new ProgressEvent(type)) {
            this.listeners[type]?.forEach((listener) => {
                listener.call(this, event);
            });
        }
    }

    window.XMLHttpRequest = MockXHR as any;

    return requests;
}

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

        const preload = new Preload();
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

        const preload = new Preload();
        const manifest = [{ id: "image", path: "test.png" }];

        preload.addEventListener("complete", (_data) => {
            const image = preload.get("image");
            expect(image instanceof Image).toBe(true);
        });
        preload.loadManifest(manifest);
    });

    test("The image object URL is revoked after the image loads.", () => {
        expect.assertions(2);

        mockXHR(generateFakeImageResponse());
        mockURL();
        mockImage();

        const preload = new Preload();

        preload.addEventListener("complete", (_data) => {
            expect(window.URL.createObjectURL).toHaveBeenCalled();
            expect(window.URL.revokeObjectURL).toHaveBeenCalledWith("asd");
        });
        preload.load("image", "test.png");
    });

    test("The image object URL is revoked after the image fails.", () => {
        expect.assertions(3);

        mockXHR(generateFakeImageResponse());
        mockURL();

        class ErrorImage {
            onload: () => void = () => {};
            onerror: () => void = () => {};

            set src(_url: string) {
                this.onerror();
            }
        }

        window.Image = ErrorImage as any;

        const preload = new Preload();

        preload.addEventListener("complete", (data) => {
            expect(data.loaded_ids).toEqual([]);
            expect(data.failed_ids).toEqual(["image"]);
            expect(window.URL.revokeObjectURL).toHaveBeenCalledWith("asd");
        });
        preload.load("image", "test.png");
    });

    test("Loading a text file.", () => {
        expect.assertions(1);

        const textContent = "test test";
        mockXHR(textContent);

        const preload = new Preload();
        const manifest = [{ id: "text", path: "text.txt" }];

        preload.addEventListener("complete", (_data) => {
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

        const preload = new Preload();
        const manifest = [{ id: "ogg", path: "test.ogg" }];

        preload.addEventListener("complete", (_data) => {
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

        const preload = new Preload();
        const manifest = [{ id: "mp3", path: "test.mp3" }];

        preload.addEventListener("complete", (_data) => {
            const audio = preload.get("mp3");
            expect(audio instanceof Audio).toBe(true);
        });
        preload.loadManifest(manifest);
    });

    test("Audio object URLs are revoked when the audio fails.", () => {
        expect.assertions(3);

        mockXHR(generateFakeAudioResponse());
        mockURL();

        class ErrorAudio {
            oncanplay: () => void = () => {};
            onerror: () => void = () => {};

            set src(_url: string) {}

            load() {
                this.onerror();
            }
        }

        window.Audio = ErrorAudio as any;

        const preload = new Preload();

        preload.addEventListener("complete", (data) => {
            expect(data.loaded_ids).toEqual([]);
            expect(data.failed_ids).toEqual(["mp3"]);
            expect(window.URL.revokeObjectURL).toHaveBeenCalledWith("asd");
        });
        preload.load("mp3", "test.mp3");
    });

    test("Audio is only loaded once, even if 'canplay' fires again later (regression: after seeking it was reported again).", () => {
        mockXHR(generateFakeAudioResponse());
        mockURL();

        const audios: SeekableAudio[] = [];

        class SeekableAudio {
            oncanplay: (() => void) | null = null;
            onerror: (() => void) | null = null;

            constructor() {
                audios.push(this);
            }

            set src(_url: string) {}

            load() {
                this.oncanplay?.();
            }
        }

        window.Audio = SeekableAudio as any;

        const preload = new Preload();
        const onFileLoad = vi.fn();
        const onComplete = vi.fn();

        preload.addEventListener("fileload", onFileLoad);
        preload.addEventListener("complete", onComplete);
        preload.load("mp3", "test.mp3");

        // what the browser does later on (after seeking, or on a playback error)
        audios[0].oncanplay?.();
        audios[0].onerror?.();

        expect(onFileLoad).toHaveBeenCalledTimes(1);
        expect(onComplete).toHaveBeenCalledTimes(1);
        expect(onComplete).toHaveBeenCalledWith({
            failed_ids: [],
            loaded_ids: ["mp3"],
        });
    });

    test("Saving in a global object instead of on the preload instance.", () => {
        expect.assertions(2);

        const textContent = "test test";
        const id = "text";
        mockXHR(textContent);

        const preload = new Preload({ saveGlobal: true });
        const manifest = [{ id, path: "text.txt" }];

        preload.addEventListener("complete", (_data) => {
            // shouldn't be in the instance
            const text = preload.get(id);
            expect(text).toBeUndefined();

            // but in the global state
            const globalText = Preload.get(id);
            expect(globalText).toBe(textContent);
        });
        preload.loadManifest(manifest);
    });

    test("When an asset failed to load, its ID should be on the 'complete' event 'failed_ids' array.", () => {
        expect.assertions(2);

        const textContent = "test test";
        const id = "text";
        mockXHR(textContent, 500);

        const preload = new Preload();
        const manifest = [{ id, path: "text.txt" }];

        preload.addEventListener("complete", (data) => {
            expect(data.loaded_ids.length).toBe(0);
            expect(data.failed_ids[0]).toBe(id);
        });
        preload.loadManifest(manifest);
    });

    test("A failed load event is tracked as a failed asset.", () => {
        expect.assertions(2);

        const requests = mockControlledXHR();
        const preload = new Preload();

        preload.addEventListener("complete", (data) => {
            expect(data.loaded_ids).toEqual([]);
            expect(data.failed_ids).toEqual(["text"]);
        });

        preload.load("text", "text.txt");
        requests[0].status = 500;
        requests[0].trigger("load");
    });

    test("An HTTP error status dispatches the 'error' event, before the 'complete' event.", () => {
        const requests = mockControlledXHR();
        const preload = new Preload();
        const events: string[] = [];

        preload.addEventListener("error", (data) => {
            events.push(`error ${data.id}`);
        });
        preload.addEventListener("complete", (data) => {
            events.push(`complete ${data.failed_ids}`);
        });

        preload.load("missing", "missing.txt");
        requests[0].status = 404;
        requests[0].trigger("load");

        expect(events).toEqual(["error missing", "complete missing"]);
    });

    test("The 'error'/'abort' events are dispatched before the 'complete' event (regression: 'complete' came first).", () => {
        ["error", "abort"].forEach((type) => {
            const requests = mockControlledXHR();
            const preload = new Preload();
            const events: string[] = [];

            preload.addEventListener(type as "error" | "abort", () => {
                events.push(type);
            });
            preload.addEventListener("complete", () => {
                events.push("complete");
            });

            preload.load("file", "file.txt");
            requests[0].trigger(type);

            expect(events).toEqual([type, "complete"]);
        });
    });

    test("A listener that throws doesn't stop the 'complete' event (regression: the file wasn't counted).", () => {
        const cases = [
            { listener: "error", trigger: "error", status: 200 },
            { listener: "abort", trigger: "abort", status: 200 },
            { listener: "error", trigger: "load", status: 404 },
            { listener: "fileload", trigger: "load", status: 200 },
        ] as const;

        cases.forEach(({ listener, trigger, status }) => {
            const requests = mockControlledXHR();
            const preload = new Preload();
            const complete = vi.fn();
            const throwing = () => {
                throw new Error("listener failed");
            };

            preload.addEventListener(listener, throwing);
            preload.addEventListener("complete", complete);

            preload.load("file", "file.txt");
            requests[0].status = status;
            expect(() => requests[0].trigger(trigger)).toThrow(
                "listener failed"
            );
            expect(complete).toHaveBeenCalledTimes(1);

            // the next load still works
            preload.removeEventListener(listener, throwing);
            preload.load("other", "other.txt");
            requests[1].trigger("error");
            expect(complete).toHaveBeenCalledTimes(2);
        });
    });

    test("The file type comes from the file name, ignoring the case and the url's query/hash (regression: 'Image.PNG' or 'data.json?v=2' loaded as text).", () => {
        const requests = mockControlledXHR();
        const preload = new Preload();

        preload.load("image", "assets/Image.PNG?v=2");
        preload.load("json", "assets/data.JSON#top");
        preload.load("text", "assets.v2/file");

        expect(requests.map((request) => request.responseType)).toEqual([
            "blob",
            "text",
            "text",
        ]);

        requests[1].response = '{ "ok": true }';
        requests[1].trigger("load");
        expect(preload.get("json")).toEqual({ ok: true });

        requests[2].response = "some text";
        requests[2].trigger("load");
        expect(preload.get("text")).toBe("some text");
    });

    test("Non-200 successful statuses are accepted.", () => {
        expect.assertions(2);

        const requests = mockControlledXHR();
        const preload = new Preload();
        const statuses = [204, 304, 0];

        preload.addEventListener("complete", (data) => {
            expect(data.failed_ids).toEqual([]);
            expect(data.loaded_ids).toEqual(["created", "cached", "local"]);
        });

        preload.loadManifest([
            { id: "created", path: "created.txt" },
            { id: "cached", path: "cached.txt" },
            { id: "local", path: "local.txt" },
        ]);

        requests.forEach((request, index) => {
            request.status = statuses[index];
            request.response = request.status.toString();
            request.trigger("load");
        });
    });

    test("Invalid json responses fail the asset.", () => {
        const requests = mockControlledXHR();
        const preload = new Preload();
        const onComplete = vi.fn();

        preload.addEventListener("complete", onComplete);
        preload.load("json", "test.json");

        // what a browser gives back for an invalid file (regression: with the 'json' response type it's 'null', which was loaded as a valid value)
        const request = requests[0];
        request.response =
            request.responseType === "json" ? null : "{ not valid json";
        request.trigger("load");

        expect(onComplete).toHaveBeenCalledWith({
            failed_ids: ["json"],
            loaded_ids: [],
        });
    });

    test("Every file that fails dispatches the 'error' event, with the status and the reason (regression: only network errors and HTTP error statuses did, without the status).", () => {
        const requests = mockControlledXHR();
        mockURL();

        class ErrorImage {
            onload: () => void = () => {};
            onerror: () => void = () => {};

            set src(_url: string) {
                this.onerror();
            }
        }

        class ErrorAudio {
            oncanplay: () => void = () => {};
            onerror: () => void = () => {};

            set src(_url: string) {}

            load() {
                this.onerror();
            }
        }

        window.Image = ErrorImage as any;
        window.Audio = ErrorAudio as any;

        const preload = new Preload();
        const errors: any[] = [];
        const onComplete = vi.fn();
        preload.addEventListener("error", (data) => errors.push(data));
        preload.addEventListener("complete", onComplete);

        preload.loadManifest([
            { id: "missing", path: "missing.txt" },
            { id: "json", path: "invalid.json" },
            { id: "image", path: "broken.png" },
            { id: "audio", path: "broken.mp3" },
            { id: "offline", path: "offline.txt" },
        ]);

        requests[0].status = 404;
        requests[0].trigger("load");
        requests[1].response = "{ not valid json";
        requests[1].trigger("load");
        requests[2].response = new Blob();
        requests[2].trigger("load");
        requests[3].response = new ArrayBuffer(1);
        requests[3].trigger("load");
        requests[4].status = 0;
        requests[4].trigger("error");

        expect(
            errors.map(({ id, status, error }) => [
                id,
                status,
                error?.constructor,
            ])
        ).toEqual([
            ["missing", 404, undefined],
            ["json", 200, SyntaxError],
            ["image", 200, Error],
            ["audio", 200, Error],
            ["offline", 0, undefined],
        ]);
        errors.forEach((data) => {
            expect(data.event).toBeInstanceOf(ProgressEvent);
        });
        expect(onComplete).toHaveBeenCalledWith({
            failed_ids: ["missing", "json", "image", "audio", "offline"],
            loaded_ids: [],
        });
    });

    test("The 'complete' event data is kept intact after the event (regression: the arrays were emptied).", () => {
        mockXHR("test test");

        const preload = new Preload();
        const completed: { failed_ids: string[]; loaded_ids: string[] }[] = [];

        preload.addEventListener("complete", (data) => {
            completed.push(data);
        });
        preload.load("first", "first.txt");
        preload.load("second", "second.txt");

        expect(completed).toEqual([
            { failed_ids: [], loaded_ids: ["first"] },
            { failed_ids: [], loaded_ids: ["second"] },
        ]);
    });

    test("More files can be loaded from the 'complete' listener.", () => {
        const requests = mockControlledXHR();
        const preload = new Preload();
        const loaded: string[][] = [];
        const progressValues: number[] = [];

        preload.addEventListener("progress", (progress) => {
            progressValues.push(progress);
        });
        preload.addEventListener("complete", (data) => {
            loaded.push(data.loaded_ids);

            if (loaded.length === 1) {
                preload.load("second", "second.txt");
            }
        });

        preload.load("first", "first.txt");
        requests[0].trigger("load");

        requests[1].trigger(
            "progress",
            new ProgressEvent("progress", {
                lengthComputable: true,
                loaded: 50,
                total: 100,
            })
        );
        requests[1].trigger("load");

        expect(progressValues).toEqual([50]);
        expect(loaded).toEqual([["first"], ["second"]]);
    });

    test("On abort event.", () => {
        expect.assertions(3);

        const requests = mockControlledXHR();
        const preload = new Preload();

        preload.addEventListener("abort", (event) => {
            expect(event.id).toBe("test");
        });
        preload.addEventListener("complete", (data) => {
            expect(data.loaded_ids).toEqual([]);
            expect(data.failed_ids).toEqual(["test"]);
        });

        preload.load("test", "test.txt");
        requests[0].trigger("abort");
    });

    test("On progress event.", () => {
        expect.assertions(1);

        mockXHR("test");

        const preload = new Preload();
        preload.addEventListener("progress", (progress) => {
            expect(typeof progress === "number").toBeTruthy();
        });
        preload.load("test", "test.txt");
    });

    test("Progress includes all files loading in parallel.", () => {
        expect.assertions(1);

        const requests = mockControlledXHR();
        const preload = new Preload();
        const progressValues: number[] = [];

        preload.addEventListener("progress", (progress) => {
            progressValues.push(progress);
        });

        preload.loadManifest([
            { id: "one", path: "one.txt" },
            { id: "two", path: "two.txt" },
        ]);

        requests[0].trigger(
            "progress",
            new ProgressEvent("progress", {
                lengthComputable: true,
                loaded: 50,
                total: 100,
            })
        );
        requests[1].trigger(
            "progress",
            new ProgressEvent("progress", {
                lengthComputable: true,
                loaded: 25,
                total: 100,
            })
        );

        requests[0].response = "one";
        requests[0].trigger("load");

        requests[1].trigger(
            "progress",
            new ProgressEvent("progress", {
                lengthComputable: true,
                loaded: 50,
                total: 100,
            })
        );

        expect(progressValues).toEqual([25, 38, 75]);
    });

    test("On error event.", () => {
        expect.assertions(1);

        mockXHR("test", 500); // Mock a failed request

        const preload = new Preload();
        preload.addEventListener("error", (e) => {
            expect(e).toBeTruthy();
        });
        preload.load("test", "test.txt");
    });
});
