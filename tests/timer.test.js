import * as Utilities from "../source/utilities";

test("Validate arguments.", () => {
    // doesn't need an argument
    expect(new Utilities.Timer()).toBeDefined();

    // not an html element
    expect(function() {
        new Utilities.Timer(0);
    }).toThrow();
});

test("Test without an argument.", () => {
    var timer = new Utilities.Timer();

    expect(timer.getTimeString()).toBe("0 seconds");
    expect(timer.getTimeSeconds()).toBe(0);
});

test("Test with a given html element.", () => {
    var htmlElement = document.createElement("div");
    var timer = new Utilities.Timer(htmlElement);

    // starting value of the timer (0 seconds)
    // starting time string (from the html element)
    expect(htmlElement.innerHTML).toBe("0 seconds");

    // starting time (from the timer object)
    expect(timer.getTimeString()).toBe("0 seconds");

    // 0 seconds
    expect(timer.getTimeSeconds()).toBe(0);
});

test("Test a 2 second duration.", (done) => {
    expect.assertions(1);
    const timer = new Utilities.Timer();
    timer.start();

    const waitSeconds = 2;
    const timeout = waitSeconds * 1000 + 10; // we add an extra time to make sure the timer was updated

    window.setTimeout(() => {
        expect(timer.getTimeSeconds()).toBe(waitSeconds);
        done();
    }, timeout);
});

test("Test with a start value.", () => {
    const timer = new Utilities.Timer();
    timer.start({ startValue: 5000 });

    expect(timer.getTimeSeconds()).toBe(5);
    expect(timer.getTimeString()).toBe("5 seconds");
});

test("Test with an end value.", (done) => {
    expect.assertions(1);

    const timer = new Utilities.Timer();
    timer.start({
        endValue: 1,
        onEnd: () => {
            expect(timer.getTimeSeconds()).toBe(1);
            done();
        },
    });
});

test("Test the 'tick' callback.", (done) => {
    expect.assertions(3);

    let count = 2;
    const timer = new Utilities.Timer();

    timer.start({
        startValue: count * 1000,
        endValue: 4000,
        onEnd: () => {
            expect(timer.getTimeSeconds()).toBe(4);
            done();
        },
        onTick: () => {
            // 1 second has passed, check if its all correct
            count++;
            expect(timer.getTimeSeconds()).toBe(count);
        },
    });
});

test("Test a count down timer.", (done) => {
    expect.assertions(1);
    const timer = new Utilities.Timer();

    timer.start({
        startValue: 7000,
        endValue: 6000,
        countDown: true,
        onEnd: () => {
            expect(timer.getTimeSeconds()).toBe(6);
            done();
        },
    });
});

test("Test the 'add' method.", () => {
    const timer = new Utilities.Timer();

    timer.start({ startValue: 5000 });
    expect(timer.getTimeSeconds()).toBe(5);
    expect(timer.getTimeMilliseconds()).toBe(5000);
    expect(timer.getTimeString()).toBe("5 seconds");

    timer.add(5000);
    expect(timer.getTimeSeconds()).toBe(10);
    expect(timer.getTimeMilliseconds()).toBe(10000);
    expect(timer.getTimeString()).toBe("10 seconds");
});
