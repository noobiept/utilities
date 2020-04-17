import { EventDispatcher } from "../source/utilities";

describe("EventDispatcher", () => {
    test("addEventListener", () => {
        const dispatcher = new EventDispatcher();

        expect(dispatcher.hasListeners("test")).toBe(false);
    });
});
