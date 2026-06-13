import { describe, test, expect, vi } from "vitest";
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

    test("the default timer.", () => {
        expect.assertions(1);

        return new Promise<void>((resolve) => {
            const timer = new Timer();
            timer.start();

            const waitSeconds = 2;
            const timeout = waitSeconds * 1000 + 10; // we add an extra time to make sure the timer was updated

            window.setTimeout(() => {
                expect(timer.getTimeSeconds()).toBe(waitSeconds);
                resolve();
            }, timeout);
        });
    });

    test("with a start value.", () => {
        const timer = new Timer();
        timer.start({ startValue: 5000 });

        expect(timer.getTimeSeconds()).toBe(5);
        expect(timer.getTimeString()).toBe("5 seconds");
    });

    test("with an end value.", () => {
        expect.assertions(1);

        return new Promise<void>((resolve) => {
            const timer = new Timer();
            timer.start({
                endValue: 1000,
                onEnd: () => {
                    expect(timer.getTimeSeconds()).toBe(1);
                    resolve();
                },
            });
        });
    });

    test("the 'tick' callback.", () => {
        expect.assertions(3);

        return new Promise<void>((resolve) => {
            let count = 2;
            const interval = 100;
            const timer = new Timer();

            timer.start({
                startValue: count * interval,
                endValue: 4 * interval,
                onEnd: () => {
                    expect(timer.getTimeSeconds()).toBe(0.4);
                    resolve();
                },
                onTick: () => {
                    // 1 second has passed, check if its all correct
                    count++;
                    expect(timer.getTimeMilliseconds()).toBe(count * interval);
                },
                interval,
            });
        });
    });

    test("a count down timer.", () => {
        expect.assertions(1);

        return new Promise<void>((resolve) => {
            const timer = new Timer();

            timer.start({
                startValue: 700,
                endValue: 600,
                countDown: true,
                onEnd: () => {
                    expect(timer.getTimeSeconds()).toBe(0.6);
                    resolve();
                },
                interval: 100,
            });
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

    test("Start a timer that is already active.", () => {
        expect.assertions(2);

        return new Promise<void>((resolve) => {
            const timer = new Timer();
            const notCalled = vi.fn();
            const called = vi.fn(() => {
                expect(notCalled).not.toHaveBeenCalled();
                expect(called).toHaveBeenCalled();
                resolve();
            });

            timer.start({ endValue: 100, onEnd: notCalled, interval: 100 });
            timer.start({ endValue: 200, onEnd: called, interval: 100 });
        });
    });

    test("Resume a timer that is already active.", () => {
        expect.assertions(1);

        return new Promise<void>((resolve) => {
            const timer = new Timer();
            const called = vi.fn(() => {
                expect(called).toHaveBeenCalled();
                resolve();
            });

            timer.start({ endValue: 100, onEnd: called, interval: 100 });
            timer.resume(); // shouldn't have an impact
        });
    });

    test("Reset a timer.", () => {
        expect.assertions(5);

        return new Promise<void>((resolve) => {
            document.body.textContent = "";

            const timer = new Timer({
                updateElement: {
                    element: document.body,
                },
            });
            const onEnd = vi.fn();

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
                    resolve();
                },
            });
        });
    });

    test("Restart a timer.", () => {
        expect.assertions(3);

        return new Promise<void>((resolve) => {
            const timer = new Timer();
            const onTick = vi.fn();
            const onEnd = vi.fn(() => {
                expect(onTick).toHaveBeenCalledTimes(2);
                expect(onEnd).toHaveBeenCalled();
                expect(timer.getTimeSeconds()).toBe(0.3);

                resolve();
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
    });

    test("When the end value is less than the start (on a count up).", () => {
        expect.assertions(1);

        return new Promise<void>((resolve) => {
            const timer = new Timer();
            const interval = 100;
            const start = 200;
            const onEnd = vi.fn(() => {
                // should end immediately after the first tick
                expect(timer.getTimeMilliseconds()).toBe(start + interval);
                resolve();
            });

            timer.start({
                startValue: start,
                endValue: start - interval, // before the start
                interval: interval,
                onEnd: onEnd,
                countDown: false,
            });
        });
    });

    test("When the end value higher than the start (on a count down).", () => {
        expect.assertions(1);

        return new Promise<void>((resolve) => {
            const timer = new Timer();
            const interval = 100;
            const start = 200;
            const onEnd = vi.fn(() => {
                // should end immediately after the first tick
                expect(timer.getTimeMilliseconds()).toBe(start - interval);
                resolve();
            });

            timer.start({
                startValue: start,
                endValue: start + interval, // after the start
                interval: interval,
                onEnd: onEnd,
                countDown: true,
            });
        });
    });

    test("Stopping an active timer.", () => {
        expect.assertions(2);

        const timer = new Timer();
        const tick = vi.fn();

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

    test("With an end value but without an end callback.", () => {
        return new Promise<void>((resolve) => {
            const timer = new Timer();
            const tick = vi.fn(() => {
                expect(timer.getTimeMilliseconds()).toBe(100);
                resolve();
            });

            timer.start({
                endValue: 100,
                interval: 100,
                onTick: tick,
            });
        });
    });

    test("A count down timer that ticks a couple of times.", () => {
        expect.assertions(1);

        return new Promise<void>((resolve) => {
            const timer = new Timer();
            const end = vi.fn(() => {
                expect(end).toHaveBeenCalled();
                resolve();
            });

            timer.start({
                startValue: 200,
                endValue: 0,
                countDown: true,
                interval: 100,
                onEnd: end,
            });
        });
    });

    test("Catches up with elapsed time (throttled/delayed ticks).", () => {
        vi.useFakeTimers();

        try {
            let now = 0;
            const performanceNow = vi
                .spyOn(performance, "now")
                .mockImplementation(() => now);
            try {
                const timer = new Timer();
                timer.start(); // default 1 second interval

                // simulate delayed ticks: the elapsed time moves further than the timer callback schedule
                now = 2000;
                vi.advanceTimersByTime(1000);
                expect(timer.getTimeMilliseconds()).toBe(2000);

                now = 13000;
                vi.advanceTimersByTime(1000);
                expect(timer.getTimeMilliseconds()).toBe(13000);

                timer.stop();
            } finally {
                performanceNow.mockRestore();
            }
        } finally {
            vi.useRealTimers();
        }
    });

    test("The timer uses a monotonic clock, not the system clock.", () => {
        vi.useFakeTimers();

        try {
            const timer = new Timer();
            timer.start(); // default 1 second interval

            vi.advanceTimersByTime(2000);
            expect(timer.getTimeMilliseconds()).toBe(2000);

            // changing the system clock shouldn't change elapsed timer duration
            vi.setSystemTime(Date.now() + 10000);
            vi.advanceTimersByTime(1000);
            expect(timer.getTimeMilliseconds()).toBe(3000);

            timer.stop();
        } finally {
            vi.useRealTimers();
        }
    });

    test("Delayed ticks clamp to the end value before updating/callbacks.", () => {
        vi.useFakeTimers();

        try {
            let now = 0;
            const performanceNow = vi
                .spyOn(performance, "now")
                .mockImplementation(() => now);
            try {
                const element = document.createElement("div");
                const timer = new Timer({
                    updateElement: {
                        element,
                    },
                });
                const onTick = vi.fn(() => {
                    expect(timer.getTimeMilliseconds()).toBe(5000);
                    expect(element.textContent).toBe("5 seconds");
                });
                const onEnd = vi.fn(() => {
                    expect(timer.getTimeMilliseconds()).toBe(5000);
                    expect(element.textContent).toBe("5 seconds");
                });

                timer.start({
                    endValue: 5000,
                    onTick,
                    onEnd,
                });

                now = 12000;
                vi.advanceTimersByTime(1000);

                expect(onTick).toHaveBeenCalledTimes(1);
                expect(onEnd).toHaveBeenCalledTimes(1);
                expect(timer.isActive()).toBe(false);
            } finally {
                performanceNow.mockRestore();
            }
        } finally {
            vi.useRealTimers();
        }
    });

    test("Delayed countdown ticks clamp to the end value.", () => {
        vi.useFakeTimers();

        try {
            let now = 0;
            const performanceNow = vi
                .spyOn(performance, "now")
                .mockImplementation(() => now);
            try {
                const timer = new Timer();
                const onEnd = vi.fn(() => {
                    expect(timer.getTimeMilliseconds()).toBe(0);
                });

                timer.start({
                    startValue: 5000,
                    endValue: 0,
                    countDown: true,
                    onEnd,
                });

                now = 12000;
                vi.advanceTimersByTime(1000);

                expect(onEnd).toHaveBeenCalledTimes(1);
                expect(timer.getTimeMilliseconds()).toBe(0);
            } finally {
                performanceNow.mockRestore();
            }
        } finally {
            vi.useRealTimers();
        }
    });

    test("The '.add()' method keeps working while the timer is active.", () => {
        vi.useFakeTimers();

        try {
            const timer = new Timer();
            timer.start();

            vi.advanceTimersByTime(1000);
            expect(timer.getTimeMilliseconds()).toBe(1000);

            // the added time shouldn't be lost on the next tick
            timer.add(5000);
            expect(timer.getTimeMilliseconds()).toBe(6000);

            vi.advanceTimersByTime(1000);
            expect(timer.getTimeMilliseconds()).toBe(7000);
            timer.stop();
        } finally {
            vi.useRealTimers();
        }
    });

    test("Different format options.", () => {
        expect.assertions(1);

        return new Promise<void>((resolve) => {
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
                endValue: 1000,
                onEnd: () => {
                    expect(element.textContent).toBe("00:00:01");
                    resolve();
                },
            });
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
