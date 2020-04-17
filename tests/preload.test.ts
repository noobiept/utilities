import * as Utilities from "../source/utilities";
import { createMockXHR } from "./mocks/xhr";

describe("Preload", () => {
    const nativeXMLHttpRequest = window.XMLHttpRequest;

    afterEach(() => {
        window.XMLHttpRequest = nativeXMLHttpRequest;
    });

    test("Loading json.", () => {
        expect.assertions(4);

        // @ts-ignore
        window.XMLHttpRequest = createMockXHR({
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
});
