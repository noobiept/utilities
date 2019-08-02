import * as Utilities from "../source/utilities";

test("Validate arguments.", () => {
    // no arguments given
    expect(function() {
        Utilities.timeToString();
    }).toThrow();

    // passed a string argument
    expect(function() {
        Utilities.timeToString("1 december");
    }).toThrow();
});

test("Test with valid arguments.", () => {
    var values = [
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

    for (var a = 0; a < values.length; a++) {
        var value = values[a];
        var result = Utilities.timeToString(value.milliSeconds);

        expect(result).toBe(value.expectedString);
    }

    expect(Utilities.timeToString(88201000, 3)).toBe(
        "1 day 30 minutes 1 second"
    );
});
