import { Timeout } from "./timeout";

describe("Timeout", () => {
    test("with valid arguments.", (done) => {
        expect.assertions(1);

        const timeout = new Timeout();
        const func = jest.fn(() => {
            expect(func).toHaveBeenCalled();
            done();
        });

        timeout.start(func, 10);
    });

    test("the 'isActive()' method.", (done) => {
        expect.assertions(3);
        const timeout = new Timeout();

        // not active yet
        expect(timeout.isActive()).toBe(false);

        timeout.start(() => {
            // not active anymore
            expect(timeout.isActive()).toBe(false);
            done();
        }, 10);

        // active during this time
        expect(timeout.isActive()).toBe(true);
    });

    test("'.start()' on an already active timeout.", (done) => {
        expect.assertions(2);

        const timeout = new Timeout();
        const first = jest.fn();
        const second = jest.fn(() => {
            expect(first).not.toHaveBeenCalled();
            expect(second).toHaveBeenCalled();
            done();
        });

        // this won't be called
        timeout.start(first, 10);

        // starting the timeout should reset the previous one
        timeout.start(second, 100);
    });
});
