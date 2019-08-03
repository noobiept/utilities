import { Timer } from "../source/utilities";

test("Validate arguments.", () => {
    // doesn't need an argument
    expect(new Timer()).toBeDefined();

    // not an html element
    expect(function() {
        new Timer(0);
    }).toThrow();
});

test("Test without an argument.", () => {
    var timer = new Timer();

    expect(timer.getTimeString()).toBe("0 seconds");
    expect(timer.getTimeSeconds()).toBe(0);
});

test("Test with a given html element.", () => {
    var htmlElement = document.createElement("div");
    var timer = new Timer(htmlElement);

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
    const timer = new Timer();
    timer.start();

    const waitSeconds = 2;
    const timeout = waitSeconds * 1000 + 10; // we add an extra time to make sure the timer was updated

    window.setTimeout(() => {
        expect(timer.getTimeSeconds()).toBe(waitSeconds);
        done();
    }, timeout);
});

test("Test with a start value.", () => {
    const timer = new Timer();
    timer.start({ startValue: 5000 });

    expect(timer.getTimeSeconds()).toBe(5);
    expect(timer.getTimeString()).toBe("5 seconds");
});

test("Test with an end value.", (done) => {
    expect.assertions(1);

    const timer = new Timer();
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
    const timer = new Timer();

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
    const timer = new Timer();

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
    const timer = new Timer();

    timer.start({ startValue: 5000 });
    expect(timer.getTimeSeconds()).toBe(5);
    expect(timer.getTimeMilliseconds()).toBe(5000);
    expect(timer.getTimeString()).toBe("5 seconds");

    timer.add(5000);
    expect(timer.getTimeSeconds()).toBe(10);
    expect(timer.getTimeMilliseconds()).toBe(10000);
    expect(timer.getTimeString()).toBe("10 seconds");
});

test("Start a timer that is already active.", (done) => {
    expect.assertions(2);

    const timer = new Timer();
    const notCalled = jest.fn();
    const called = jest.fn(() => {
        expect(notCalled).not.toBeCalled();
        expect(called).toBeCalled();
        done();
    });

    timer.start({ endValue: 1000, onEnd: notCalled });
    timer.start({ endValue: 2000, onEnd: called });
});

test("Resume a timer that is already active.", (done) => {
    expect.assertions(1);

    const timer = new Timer();
    const called = jest.fn(() => {
        expect(called).toBeCalled();
        done();
    });

    timer.start({ endValue: 1000, onEnd: called });
    timer.resume(); // shouldn't have an impact
});

test("Reset a timer.", (done) => {
    expect.assertions(5);
    document.body.innerHTML = "";

    const timer = new Timer(document.body);
    const onEnd = jest.fn();

    timer.start({
        startValue: 1000,
        endValue: 5000,
        onEnd: onEnd,
        onTick: () => {
            expect(timer.getTimeMilliseconds()).toBe(2000);
            expect(document.body.innerHTML).toBe("2 seconds");

            // we reset the timer before it reaches the end value
            timer.reset();

            expect(onEnd).not.toBeCalled();
            expect(timer.getTimeMilliseconds()).toBe(1000); // should go back to initial value
            expect(document.body.innerHTML).toBe("1 second");
            done();
        },
    });
});

test("Restart a timer.", (done) => {
    expect.assertions(3);

    const timer = new Timer();
    const onTick = jest.fn();
    const onEnd = jest.fn(() => {
        expect(onTick).toBeCalledTimes(2);
        expect(onEnd).toBeCalled();
        expect(timer.getTimeSeconds()).toBe(3);

        done();
    });

    timer.start({
        startValue: 1000,
        endValue: 3000,
        onTick: onTick,
        onEnd: onEnd,
    });

    // should still keep all the callbacks, etc
    timer.restart();
});
