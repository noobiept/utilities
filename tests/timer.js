// Timer //
QUnit.module("Timer");
QUnit.test("Validate arguments.", function(assert) {
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

QUnit.test("Test without an argument.", function(assert) {
    var timer = new Utilities.Timer();

    assert.deepEqual(timer.getTimeString(), "0 seconds");
    assert.deepEqual(timer.getTimeSeconds(), 0);
});

QUnit.test("Test with a given html element.", function(assert) {
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

QUnit.test("Test a 2 second duration.", function(assert) {
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

QUnit.test("Test with a start value.", function(assert) {
    const timer = new Utilities.Timer();
    timer.start({ startValue: 5000 });

    assert.deepEqual(timer.getTimeSeconds(), 5);
    assert.deepEqual(timer.getTimeString(), "5 seconds");
});

QUnit.test("Test with an end value.", function(assert) {
    const done = assert.async();
    const timer = new Utilities.Timer();
    timer.start({
        endValue: 1,
        endCallback: () => {
            assert.ok(true, "Called the 'end' callback.");
            assert.deepEqual(timer.getTimeSeconds(), 1);
            done();
        },
    });
});

QUnit.test("Test the 'tick' callback.", function(assert) {
    const done = assert.async();
    let count = 2;

    const timer = new Utilities.Timer();
    timer.start({
        startValue: count * 1000,
        endValue: 4000,
        endCallback: () => {
            assert.ok(true, "Called the 'end' callback.");
            assert.deepEqual(timer.getTimeSeconds(), 4);
            done();
        },
        tickCallback: () => {
            // 1 second has passed, check if its all correct
            count++;
            assert.deepEqual(timer.getTimeSeconds(), count);
        },
    });
});

QUnit.test("Test a count down timer.", function(assert) {
    const done = assert.async();
    const timer = new Utilities.Timer();

    timer.start({
        startValue: 7000,
        endValue: 6000,
        countDown: true,
        endCallback: () => {
            assert.ok(true, "Called the 'end' callback.");
            assert.deepEqual(timer.getTimeSeconds(), 6);
            done();
        },
    });
});

QUnit.test("Test the 'add' method.", function(assert) {
    const timer = new Utilities.Timer();

    timer.start({ startValue: 5000 });
    assert.deepEqual(timer.getTimeSeconds(), 5);
    assert.deepEqual(timer.getTimeMilliseconds(), 5000);
    assert.deepEqual(timer.getTimeString(), "5 seconds");

    timer.add(5000);
    assert.deepEqual(timer.getTimeSeconds(), 10);
    assert.deepEqual(timer.getTimeMilliseconds(), 10000);
    assert.deepEqual(timer.getTimeString(), "10 seconds");
});
