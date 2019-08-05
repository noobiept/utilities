import { timeToString } from "../source/utilities";

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
    const second = 1000;
    const minute = 60 * second;
    const hour = 60 * minute;
    expect(timeToString({ time: hour + minute + second, units: "ab" })).toBe(
        "1 hour 1 minute"
    );
    expect(timeToString({ time: hour + minute + second, units: 3 })).toBe(
        "1 hour 1 minute 1 second"
    );
});

test("Test with valid arguments.", () => {
    const values = [
        { milliSeconds: 0, expectedString: "0 seconds" },
        { milliSeconds: 1000, expectedString: "1 second" },
        { milliSeconds: 30000, expectedString: "30 seconds" },
        { milliSeconds: 60000, expectedString: "1 minute" },
        { milliSeconds: 61000, expectedString: "1 minute 1 second" },
        { milliSeconds: 150000, expectedString: "2 minutes 30 seconds" },
        { milliSeconds: 3600000, expectedString: "1 hour" },
        { milliSeconds: 3601000, expectedString: "1 hour 1 second" },
        { milliSeconds: 3720000, expectedString: "1 hour 2 minutes" },
        { milliSeconds: 9000000, expectedString: "2 hours 30 minutes" },
        { milliSeconds: 86400000, expectedString: "1 day" },
        { milliSeconds: 88201000, expectedString: "1 day 30 minutes" },
        { milliSeconds: 864020000, expectedString: "10 days 20 seconds" },
    ];

    for (let a = 0; a < values.length; a++) {
        const value = values[a];
        const result = timeToString({ time: value.milliSeconds });

        expect(result).toBe(value.expectedString);
    }

    expect(timeToString({ time: 88201000, units: 3 })).toBe(
        "1 day 30 minutes 1 second"
    );
});
