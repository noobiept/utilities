import * as Utilities from "../source/utilities";

test("Validate arguments.", () => {
    var timeout = new Utilities.Timeout();
    var func = function() {};

    expect(() => {
        timeout.start();
    }).toThrow();

    expect(function() {
        timeout.start(func);
    }).toThrow();

    expect(() => {
        timeout.start(null, 1000);
    }).toThrow();

    expect(() => {
        timeout.start(func, "asd");
    }).toThrow();

    // just in case a test fails and starts the timeout
    timeout.clear();
});

test("Test with valid arguments.", (done) => {
    expect.assertions(1);

    const timeout = new Utilities.Timeout();
    const func = jest.fn(() => {
        expect(func).toBeCalled();
        done();
    });

    timeout.start(func, 10);
});

test("Test the 'isActive()' method.", (done) => {
    expect.assertions(3);
    const timeout = new Utilities.Timeout();

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

    const timeout = new Utilities.Timeout();
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
