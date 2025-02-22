import { Timer } from "./timer";

describe("Timer", () => {
    test("Validate arguments.", () => {
        // doesn't need an argument
        expect(new Timer()).toBeDefined();
    });

    test("without an argument.", () => {
        const timer = new Timer();

        expect(timer.getTimeString()).toBe("0 seconds");
        expect(timer.getTimeSeconds()).toBe(0);
    });

    test("with a given html element.", () => {
        const htmlElement = document.createElement("div");
        const timer = new Timer({
            updateElement: {
                element: htmlElement,
            },
        });

        // starting value of the timer (0 seconds)
        // starting time string (from the html element)
        expect(htmlElement.textContent).toBe("0 seconds");

        // starting time (from the timer object)
        expect(timer.getTimeString()).toBe("0 seconds");

        // 0 seconds
        expect(timer.getTimeSeconds()).toBe(0);
    });

    test("the default timer.", (done) => {
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

    test("with a start value.", () => {
        const timer = new Timer();
        timer.start({ startValue: 5000 });

        expect(timer.getTimeSeconds()).toBe(5);
        expect(timer.getTimeString()).toBe("5 seconds");
    });

    test("with an end value.", (done) => {
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

    test("the 'tick' callback.", (done) => {
        expect.assertions(3);

        let count = 2;
        const interval = 100;
        const timer = new Timer();

        timer.start({
            startValue: count * interval,
            endValue: 4 * interval,
            onEnd: () => {
                expect(timer.getTimeSeconds()).toBe(0.4);
                done();
            },
            onTick: () => {
                // 1 second has passed, check if its all correct
                count++;
                expect(timer.getTimeMilliseconds()).toBe(count * interval);
            },
            interval,
        });
    });

    test("a count down timer.", (done) => {
        expect.assertions(1);
        const timer = new Timer();

        timer.start({
            startValue: 700,
            endValue: 600,
            countDown: true,
            onEnd: () => {
                expect(timer.getTimeSeconds()).toBe(0.6);
                done();
            },
            interval: 100,
        });
    });

    test("the 'add' method.", () => {
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
            expect(notCalled).not.toHaveBeenCalled();
            expect(called).toHaveBeenCalled();
            done();
        });

        timer.start({ endValue: 100, onEnd: notCalled, interval: 100 });
        timer.start({ endValue: 200, onEnd: called, interval: 100 });
    });

    test("Resume a timer that is already active.", (done) => {
        expect.assertions(1);

        const timer = new Timer();
        const called = jest.fn(() => {
            expect(called).toHaveBeenCalled();
            done();
        });

        timer.start({ endValue: 100, onEnd: called, interval: 100 });
        timer.resume(); // shouldn't have an impact
    });

    test("Reset a timer.", (done) => {
        expect.assertions(5);
        document.body.textContent = "";

        const timer = new Timer({
            updateElement: {
                element: document.body,
            },
        });
        const onEnd = jest.fn();

        timer.start({
            startValue: 1000,
            endValue: 5000,
            onEnd: onEnd,
            onTick: () => {
                expect(timer.getTimeMilliseconds()).toBe(2000);
                expect(document.body.textContent).toBe("2 seconds");

                // we reset the timer before it reaches the end value
                timer.reset();

                expect(onEnd).not.toHaveBeenCalled();
                expect(timer.getTimeMilliseconds()).toBe(1000); // should go back to initial value
                expect(document.body.textContent).toBe("1 second");
                done();
            },
        });
    });

    test("Restart a timer.", (done) => {
        expect.assertions(3);

        const timer = new Timer();
        const onTick = jest.fn();
        const onEnd = jest.fn(() => {
            expect(onTick).toHaveBeenCalledTimes(2);
            expect(onEnd).toHaveBeenCalled();
            expect(timer.getTimeSeconds()).toBe(0.3);

            done();
        });

        timer.start({
            startValue: 100,
            endValue: 300,
            onTick: onTick,
            onEnd: onEnd,
            interval: 100,
        });

        // should still keep all the callbacks, etc
        timer.restart();
    });

    test("When the end value is less than the start (on a count up).", (done) => {
        expect.assertions(1);

        const timer = new Timer();
        const interval = 100;
        const start = 200;
        const onEnd = jest.fn(() => {
            // should end immediately after the first tick
            expect(timer.getTimeMilliseconds()).toBe(start + interval);
            done();
        });

        timer.start({
            startValue: start,
            endValue: start - interval, // before the start
            interval: interval,
            onEnd: onEnd,
            countDown: false,
        });
    });

    test("When the end value higher than the start (on a count down).", (done) => {
        expect.assertions(1);

        const timer = new Timer();
        const interval = 100;
        const start = 200;
        const onEnd = jest.fn(() => {
            // should end immediately after the first tick
            expect(timer.getTimeMilliseconds()).toBe(start - interval);
            done();
        });

        timer.start({
            startValue: start,
            endValue: start + interval, // after the start
            interval: interval,
            onEnd: onEnd,
            countDown: true,
        });
    });

    test("Stopping an active timer.", () => {
        expect.assertions(2);

        const timer = new Timer();
        const tick = jest.fn();

        timer.start({ onTick: tick });
        timer.stop();

        expect(tick).not.toHaveBeenCalled();
        expect(timer.isActive()).toBe(false);
    });

    test("The '.isActive()' method.", () => {
        expect.assertions(3);

        const timer = new Timer();

        expect(timer.isActive()).toBe(false);
        timer.start();
        expect(timer.isActive()).toBe(true);
        timer.stop();
        expect(timer.isActive()).toBe(false);
    });

    test("Calling '.stop()' on an already stopped timer.", () => {
        const timer = new Timer();

        expect(timer.isActive()).toBe(false);
        timer.stop();
        expect(timer.isActive()).toBe(false);
    });

    test("With an end value but without an end callback.", (done) => {
        const timer = new Timer();
        const tick = jest.fn(() => {
            expect(timer.getTimeMilliseconds()).toBe(100);
            done();
        });

        timer.start({
            endValue: 100,
            interval: 100,
            onTick: tick,
        });
    });

    test("A count down timer that ticks a couple of times.", (done) => {
        expect.assertions(1);

        const timer = new Timer();
        const end = jest.fn(() => {
            expect(end).toHaveBeenCalled();
            done();
        });

        timer.start({
            startValue: 200,
            endValue: 0,
            countDown: true,
            interval: 100,
            onEnd: end,
        });
    });

    test("Different format options.", (done) => {
        expect.assertions(1);

        const element = document.createElement("div");
        const timer = new Timer({
            updateElement: {
                element,
                format: {
                    format: "daytime",
                },
            },
        });
        timer.start({
            endValue: 1,
            onEnd: () => {
                expect(element.textContent).toBe("00:00:01");
                done();
            },
        });
    });

    test("custom format function.", () => {
        const element = document.createElement("div");
        new Timer({
            updateElement: {
                element,
                format: (timer) => {
                    return `# ${timer.getTimeSeconds()} #`;
                },
            },
        });

        expect(element.textContent).toBe("# 0 #");
    });
});
