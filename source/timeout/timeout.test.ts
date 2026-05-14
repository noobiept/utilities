import { describe, test, expect, vi } from "vitest";
import { Timeout } from "./timeout";

describe("Timeout", () => {
    test("with valid arguments.", () => {
        expect.assertions(1);

        return new Promise<void>((resolve) => {
            const timeout = new Timeout();
            const func = vi.fn(() => {
                expect(func).toHaveBeenCalled();
                resolve();
            });

            timeout.start(func, 10);
        });
    });

    test("the 'isActive()' method.", () => {
        expect.assertions(3);

        return new Promise<void>((resolve) => {
            const timeout = new Timeout();

            // not active yet
            expect(timeout.isActive()).toBe(false);

            timeout.start(() => {
                // not active anymore
                expect(timeout.isActive()).toBe(false);
                resolve();
            }, 10);

            // active during this time
            expect(timeout.isActive()).toBe(true);
        });
    });

    test("'.start()' on an already active timeout.", () => {
        expect.assertions(2);

        return new Promise<void>((resolve) => {
            const timeout = new Timeout();
            const first = vi.fn();
            const second = vi.fn(() => {
                expect(first).not.toHaveBeenCalled();
                expect(second).toHaveBeenCalled();
                resolve();
            });

            // this won't be called
            timeout.start(first, 10);

            // starting the timeout should reset the previous one
            timeout.start(second, 100);
        });
    });
});
