import { timeToString } from "../source/utilities";

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

test("Validate arguments.", () => {
    // no arguments given
    expect(function() {
        timeToString();
    }).toThrow();

    // passed a string argument
    expect(function() {
        timeToString("1 december");
    }).toThrow();

    // passed an invalid 'totalUnits' argument, should default to 2
    expect(timeToString({ time: HOUR + MINUTE + SECOND, units: "ab" })).toBe(
        "1 hour 1 minute"
    );
    expect(timeToString({ time: HOUR + MINUTE + SECOND, units: 3 })).toBe(
        "1 hour 1 minute 1 second"
    );
});

test("The 'string' and 'daytime' format.", () => {
    const values = [
        { time: 0, string: "0 seconds", daytime: "00:00:00" },
        { time: SECOND, string: "1 second", daytime: "00:00:01" },
        { time: 30 * SECOND, string: "30 seconds", daytime: "00:00:30" },
        { time: MINUTE, string: "1 minute", daytime: "00:01:00" },
        {
            time: MINUTE + SECOND,
            string: "1 minute 1 second",
            daytime: "00:01:01",
        },
        {
            time: 2 * MINUTE + 30 * SECOND,
            string: "2 minutes 30 seconds",
            daytime: "00:02:30",
        },
        { time: HOUR, string: "1 hour", daytime: "01:00:00" },
        { time: HOUR + SECOND, string: "1 hour 1 second", daytime: "01:00:01" },
        {
            time: HOUR + 2 * MINUTE,
            string: "1 hour 2 minutes",
            daytime: "01:02:00",
        },
        {
            time: 2 * HOUR + 30 * MINUTE,
            string: "2 hours 30 minutes",
            daytime: "02:30:00",
        },
        { time: DAY, string: "1 day", daytime: "1 00:00:00" },
        {
            time: DAY + 30 * MINUTE,
            string: "1 day 30 minutes",
            daytime: "1 00:30:00",
        },
        {
            time: 10 * DAY + 20 * SECOND,
            string: "10 days 20 seconds",
            daytime: "10 00:00:20",
        },
    ];

    for (let a = 0; a < values.length; a++) {
        const value = values[a];
        const stringResult = timeToString({ time: value.time });
        const daytimeResult = timeToString({
            time: value.time,
            format: "daytime",
        });

        expect(stringResult).toBe(value.string);
        expect(daytimeResult).toBe(value.daytime);
    }
});

test("The 'units' argument.", () => {
    expect(timeToString({ time: 88201000, units: 3 })).toBe(
        "1 day 30 minutes 1 second"
    );
});
