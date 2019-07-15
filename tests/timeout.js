// Timeout //
QUnit.module("Timeout");
QUnit.test("Validate arguments.", function(assert) {
    var expect = Error;
    var timeout = new Utilities.Timeout();
    var func = function() {};

    assert.throws(
        function() {
            timeout.start();
        },
        expect,
        "No arguments given."
    );

    assert.throws(
        function() {
            timeout.start(func);
        },
        expect,
        "Only one argument"
    );

    assert.throws(
        function() {
            timeout.start(null, 1000);
        },
        expect,
        "Passing null to the function argument."
    );

    assert.throws(
        function() {
            timeout.start(func, "asd");
        },
        expect,
        "Wrong time of interval."
    );

    // just in case a test fails and starts the timeout
    timeout.clear();
});

QUnit.test("Test with valid arguments.", function(assert) {
    const done = assert.async();
    const timeout = new Utilities.Timeout();

    timeout.start(function() {
        assert.ok(true, "Finished the timeout.");
        done();
    }, 10);
});

QUnit.test("Test the 'isActive()' method.", function(assert) {
    const done = assert.async();
    const timeout = new Utilities.Timeout();

    assert.deepEqual(timeout.isActive(), false, "Not active yet.");
    timeout.start(() => {
        assert.deepEqual(timeout.isActive(), false, "Not active anymore.");
        assert.ok(true, "Finished the timeout.");
        done();
    }, 10);

    assert.deepEqual(timeout.isActive(), true, "Active during this time.");
});
