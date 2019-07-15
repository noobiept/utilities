// Timer //
QUnit.module("Timer");
QUnit.test("validate arguments", function(assert) {
    var expect = Error;
    assert.ok(new Utilities.Timer(), "Doesn't need an argument.");

    assert.throws(
        function() {
            new Utilities.Timer(0);
        },
        expect,
        "Not an html element."
    );
});

QUnit.test("test without an argument.", function(assert) {
    var timer = new Utilities.Timer();

    assert.deepEqual(timer.getTimeString(), "0 seconds");
    assert.deepEqual(timer.getTimeSeconds(), 0);
});

QUnit.test("test with a given html element.", function(assert) {
    var htmlElement = document.createElement("div");
    var timer = new Utilities.Timer(htmlElement);

    // starting value of the timer (0 seconds)
    assert.deepEqual(
        htmlElement.innerHTML,
        "0 seconds",
        "Starting time string (from the html element)."
    );
    assert.deepEqual(
        timer.getTimeString(),
        "0 seconds",
        "Starting time (from the timer object)."
    );
    assert.deepEqual(timer.getTimeSeconds(), 0, "0 seconds.");
});

QUnit.test("test the timeout.", function(assert) {
    const done = assert.async();
    const timer = new Utilities.Timer();
    timer.start();

    const waitSeconds = 2;
    const timeout = waitSeconds * 1000 + 10; // we add an extra time to make sure the timer was updated

    window.setTimeout(() => {
        assert.deepEqual(timer.getTimeSeconds(), waitSeconds);
        done();
    }, timeout);
});
