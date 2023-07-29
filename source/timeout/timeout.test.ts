import { Timeout } from "./timeout";

describe("Timeout", () => {
    test("Test with valid arguments.", (done) => {
        expect.assertions(1);

        const timeout = new Timeout();
        const func = jest.fn(() => {
            expect(func).toBeCalled();
            done();
        });

        timeout.start(func, 10);
    });

    test("Test the 'isActive()' method.", (done) => {
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

    test("Test '.start()' on an already active timeout.", (done) => {
        expect.assertions(2);

        const timeout = new Timeout();
        const first = jest.fn();
        const second = jest.fn(() => {
            expect(first).not.toBeCalled();
            expect(second).toBeCalled();
            done();
        });

        // this won't be called
        timeout.start(first, 10);

        // starting the timeout should reset the previous one
        timeout.start(second, 100);
    });
});
