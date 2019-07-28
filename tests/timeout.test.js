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

    timeout.start(function() {
        expect(true).toBe(true);
        done();
    }, 10);
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
