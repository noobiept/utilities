import { timeToString } from "./time_to_string";

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

describe("timeToString", () => {
    test("The 'string', 'short_string, 'daytime' and 'partial_daytime' formats.", () => {
        const values = [
            {
                time: 0,
                string: "0 seconds",
                short: "0s",
                daytime: "00:00:00",
                partial: "0",
            },
            {
                time: SECOND,
                string: "1 second",
                short: "1s",
                daytime: "00:00:01",
                partial: "1",
            },
            {
                time: 30 * SECOND,
                string: "30 seconds",
                short: "30s",
                daytime: "00:00:30",
                partial: "30",
            },
            {
                time: MINUTE,
                string: "1 minute",
                short: "1m",
                daytime: "00:01:00",
                partial: "1:00",
            },
            {
                time: MINUTE + SECOND,
                string: "1 minute 1 second",
                short: "1m 1s",
                daytime: "00:01:01",
                partial: "1:01",
            },
            {
                time: 2 * MINUTE + 30 * SECOND,
                string: "2 minutes 30 seconds",
                short: "2m 30s",
                daytime: "00:02:30",
                partial: "2:30",
            },
            {
                time: HOUR,
                string: "1 hour",
                short: "1h",
                daytime: "01:00:00",
                partial: "1:00:00",
            },
            {
                time: HOUR + SECOND,
                string: "1 hour 1 second",
                short: "1h 1s",
                daytime: "01:00:01",
                partial: "1:00:01",
            },
            {
                time: HOUR + 2 * MINUTE,
                string: "1 hour 2 minutes",
                short: "1h 2m",
                daytime: "01:02:00",
                partial: "1:02:00",
            },
            {
                time: HOUR + 5 * SECOND,
                string: "1 hour 5 seconds",
                short: "1h 5s",
                daytime: "01:00:05",
                partial: "1:00:05",
            },
            {
                time: 2 * HOUR + 30 * MINUTE,
                string: "2 hours 30 minutes",
                short: "2h 30m",
                daytime: "02:30:00",
                partial: "2:30:00",
            },
            {
                time: 10 * HOUR + 7 * MINUTE + 21 * SECOND,
                string: "10 hours 7 minutes 21 seconds",
                short: "10h 7m 21s",
                daytime: "10:07:21",
                partial: "10:07:21",
            },
            {
                time: DAY,
                string: "1 day",
                short: "1d",
                daytime: "1 00:00:00",
                partial: "1 00:00:00",
            },
            {
                time: DAY + 30 * MINUTE,
                string: "1 day 30 minutes",
                short: "1d 30m",
                daytime: "1 00:30:00",
                partial: "1 00:30:00",
            },
            {
                time: 10 * DAY + 20 * SECOND,
                string: "10 days 20 seconds",
                short: "10d 20s",
                daytime: "10 00:00:20",
                partial: "10 00:00:20",
            },
        ];

        for (let a = 0; a < values.length; a++) {
            const value = values[a];
            const stringResult = timeToString({ time: value.time });
            const shortStringResult = timeToString({
                time: value.time,
                format: "short_string",
            });
            const daytimeResult = timeToString({
                time: value.time,
                format: "daytime",
            });
            const partialDaytimeResult = timeToString({
                time: value.time,
                format: "partial_daytime",
            });

            expect(stringResult).toBe(value.string);
            expect(shortStringResult).toBe(value.short);
            expect(daytimeResult).toBe(value.daytime);
            expect(partialDaytimeResult).toBe(value.partial);
        }
    });

    test("The 'units' argument.", () => {
        const values = [
            // test default value (undefined, should show all non-zero units)
            {
                time: DAY + HOUR + MINUTE + SECOND,
                units: undefined,
                string: "1 day 1 hour 1 minute 1 second",
                short: "1d 1h 1m 1s",
            },
            {
                time: DAY + MINUTE + SECOND,
                units: undefined,
                string: "1 day 1 minute 1 second",
                short: "1d 1m 1s",
            },

            // test with 3 units
            {
                time: DAY + 30 * MINUTE + SECOND,
                units: 3,
                string: "1 day 30 minutes 1 second",
                short: "1d 30m 1s",
            },

            // test with more units than actually shown (doesn't show when the unit value is 0)
            {
                time: DAY,
                units: 4,
                string: "1 day",
                short: "1d",
            },
            // test with less units than could have been
            {
                time: DAY + HOUR + MINUTE + SECOND,
                units: 1,
                string: "1 day",
                short: "1d",
            },
            // test with <1 unit (should go to the default units value)
            {
                time: DAY + HOUR + SECOND,
                units: 0,
                string: "1 day 1 hour 1 second",
                short: "1d 1h 1s",
            },
        ];

        values.forEach((value) => {
            const stringResult = timeToString({
                time: value.time,
                format: "string",
                units: value.units,
            });
            const shortStringResult = timeToString({
                time: value.time,
                format: "short_string",
                units: value.units,
            });

            expect(stringResult).toBe(value.string);
            expect(shortStringResult).toBe(value.short);
        });

        // doesn't have an impact when it has a different format than `string`
        expect(
            timeToString({
                time: DAY + HOUR + MINUTE + SECOND,
                units: 2,
                format: "daytime",
            })
        ).toBe("1 01:01:01");
    });

    test("Different display values for the day/hour/minute/second units.", () => {
        const internationalization = {
            day: {
                single: "Tag",
                plural: "Tage",
            },
            hour: {
                single: "Stunde",
                plural: "Stunden",
            },
            minute: {
                single: "Minute",
                plural: "Minuten",
            },
            second: {
                single: "Sekunde",
                plural: "Sekunden",
            },
        };

        expect(
            timeToString({
                time: DAY + HOUR + MINUTE + SECOND,
                format: "string",
                internationalization,
            })
        ).toBe("1 Tag 1 Stunde 1 Minute 1 Sekunde");

        expect(
            timeToString({
                time: 2 * DAY + 2 * HOUR + 2 * MINUTE + 2 * SECOND,
                format: "string",
                internationalization,
            })
        ).toBe("2 Tage 2 Stunden 2 Minuten 2 Sekunden");

        expect(
            timeToString({
                time: 0,
                format: "string",
                internationalization,
            })
        ).toBe("0 Sekunden");

        expect(
            timeToString({
                time: DAY + HOUR + MINUTE + SECOND,
                format: "short_string",
                internationalization,
            })
        ).toBe("1T 1S 1M 1S");

        expect(
            timeToString({
                time: 0,
                format: "short_string",
                internationalization,
            })
        ).toBe("0S");
    });
});
