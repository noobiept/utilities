import { round } from "./number";
import { isNumber } from "./is_type";

export interface TimeToStringArgs {
    time: number;
    units?: number;
    format?: "daytime" | "string";
}

/**
 * Converts a time (in milliseconds) to a string (with the number of days/hours...).
 * The units available are: day/hour/minute/second.
 *
 * There's 2 possible display formats.
 * daytime:
 *     `dd hh:mm:ss` (where d=day, h=hour, m=minute, s=second)
 * string:
 *     `(d) days (h) hours (m) minutes (s) seconds`
 *
 * The number of `units` can limit the number of units shown in the string format (days/hours, or hours/minutes or minutes/seconds, and not days/hours/minutes for example (for a `units` with value 2)).
 *
 * Defaults:
 *     units: 2
 *     format: string
 */
export function timeToString(args: TimeToStringArgs) {
    let { time, units, format } = args;

    // setup the default values if not provided
    if (!isNumber(units) || units < 1) {
        units = 2;
    }

    if (format !== "daytime") {
        format = "string";
    }

    // :: convert to days/hours :: //

    //in milliseconds
    const second = 1000;
    const minute = 60 * second;
    const hour = 60 * minute;
    const day = 24 * hour;

    // count the number of days/hours/minutes/seconds
    let remainder = time;

    const daysLeft = Math.floor(remainder / day);
    remainder = remainder % day;

    const hoursLeft = Math.floor(remainder / hour);
    remainder = remainder % hour;

    const minutesLeft = Math.floor(remainder / minute);
    remainder = remainder % minute;

    const secondsLeft = round(remainder / second, 2);

    // :: construct the string :: //
    let date = "";

    if (format === "daytime") {
        if (daysLeft > 0) {
            date += `${daysLeft} `;
        }

        const hoursString = hoursLeft.toString().padStart(2, "0");
        const minutesString = minutesLeft.toString().padStart(2, "0");
        const secondsString = secondsLeft.toString().padStart(2, "0");

        date += `${hoursString}:${minutesString}:${secondsString}`;
    } else {
        const theDate = [
            { name: "day", time: daysLeft },
            { name: "hour", time: hoursLeft },
            { name: "minute", time: minutesLeft },
            { name: "second", time: secondsLeft },
        ];

        const constructDate = function (dateTmp: string, numberOf: number) {
            // day to days, hour to hours...
            if (numberOf !== 1) {
                dateTmp += "s";
            }

            return numberOf + " " + dateTmp;
        };

        for (let i = 0; i < theDate.length; i++) {
            // reached the limit of the units
            if (units === 0) {
                break;
            }

            let component = theDate[i];

            // only show when there's something relevant to be shown
            // (for example: 0 days 2 hours 2 minutes... no point showing the days part)
            if (component.time !== 0) {
                // add spacing between the units apart from the first one
                if (date !== "") {
                    date += " ";
                }

                date += constructDate(component.name, component.time);
                units--;
            }
        }

        if (date === "") {
            date = "0 seconds";
        }
    }

    return date;
}
