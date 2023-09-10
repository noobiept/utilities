import { round } from "../number/number";
import { isNumber } from "../is_type/is_type";

export type SeparatedTime = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
};

export type UnitDescription = {
    single: string;
    plural: string;
};

export type InternationalizationConfig = {
    day: UnitDescription;
    hour: UnitDescription;
    minute: UnitDescription;
    second: UnitDescription;
};

export interface TimeToStringArgs {
    time: number;
    units?: number;
    format?: "daytime" | "partial_daytime" | "string" | "short_string";
    internationalization?: InternationalizationConfig;
}

const defaultInternationalization: InternationalizationConfig = {
    day: {
        single: "day",
        plural: "days",
    },
    hour: {
        single: "hour",
        plural: "hours",
    },
    minute: {
        single: "minute",
        plural: "minutes",
    },
    second: {
        single: "second",
        plural: "seconds",
    },
};

/**
 * Converts a time (in milliseconds) to a string (with the number of days/hours...).
 * The units available are: day/hour/minute/second.
 *
 * There's 4 possible display formats.
 *
 * - daytime:
 *     `dd hh:mm:ss` or `hh:mm:ss` (where d=day, h=hour, m=minute, s=second)
 *
 * - partial_daytime:
 *      `ss`, `mm:ss`, `hh:mm:ss` or "dd hh:mm:ss", depending on the time value.
 *
 * - string:
 *     `(d) days (h) hours (m) minutes (s) seconds`
 *
 * - short_string:
 *    `(d)d (h)h (m)m (s)s`
 *
 * The number of `units` can limit the number of units shown in the string/short_string formats (days/hours, or hours/minutes or minutes/seconds, and not days/hours/minutes for example (for a `units` with value 2)).
 *
 * The display string can be internationalized with the `internationalization` argument (when using the `string` or `short_string`).
 *
 * Defaults:
 *     units: undefined (shows all non-zero if format is type `string` or `short_string`)
 *     format: string
 */
export function timeToString(args: TimeToStringArgs) {
    const { time } = args;
    let { units, format, internationalization } = args;

    // setup the default values if not provided
    if (!isNumber(units) || units < 1) {
        units = -1; // means it shows all non-zero units
    }

    if (!format) {
        format = "string";
    }

    if (!internationalization) {
        internationalization = defaultInternationalization;
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

    const separated = {
        days: daysLeft,
        hours: hoursLeft,
        minutes: minutesLeft,
        seconds: secondsLeft,
    };

    // :: construct the string :: //
    switch (format) {
        case "short_string":
            return formatShortString(separated, units, internationalization);

        case "daytime":
            return formatDaytime(separated);

        case "partial_daytime":
            return formatPartialDaytime(separated);

        case "string":
            return formatString(separated, units, internationalization);
    }
}

function formatDaytime(time: SeparatedTime): string {
    let date = "";

    if (time.days > 0) {
        date += `${time.days} `;
    }

    const hoursString = time.hours.toString().padStart(2, "0");
    const minutesString = time.minutes.toString().padStart(2, "0");
    const secondsString = time.seconds.toString().padStart(2, "0");

    date += `${hoursString}:${minutesString}:${secondsString}`;

    return date;
}

function formatPartialDaytime(time: SeparatedTime): string {
    const values = [
        {
            value: time.days,
            separator: "",
        },
        {
            value: time.hours,
            separator: " ",
        },
        {
            value: time.minutes,
            separator: ":",
        },
        {
            value: time.seconds,
            separator: ":",
        },
    ];

    let date = "";

    // first value isn't padded
    let foundFirst = false;
    for (let a = 0; a < values.length; a++) {
        const item = values[a];

        if (foundFirst) {
            date += item.separator + item.value.toString().padStart(2, "0");
        } else if (item.value > 0) {
            foundFirst = true;
            date += item.value.toString();
        }
    }

    if (date === "") {
        date = "0";
    }

    return date;
}

function formatString(
    time: SeparatedTime,
    units: number,
    { day, hour, minute, second }: InternationalizationConfig
): string {
    const names = [
        {
            single: " " + day.single,
            plural: " " + day.plural,
            time: time.days,
        },
        {
            single: " " + hour.single,
            plural: " " + hour.plural,
            time: time.hours,
        },
        {
            single: " " + minute.single,
            plural: " " + minute.plural,
            time: time.minutes,
        },
        {
            single: " " + second.single,
            plural: " " + second.plural,
            time: time.seconds,
        },
    ];

    let result = "";

    for (let a = 0; a < names.length; a++) {
        const item = names[a];

        if (item.time > 0) {
            if (result !== "") {
                result += " ";
            }

            result +=
                item.time === 1
                    ? item.time + item.single
                    : item.time + item.plural;
            units--;

            // reached the limit of the units that we want to display
            if (units === 0) {
                break;
            }
        }
    }

    return result !== "" ? result : `0 ${second.plural}`;
}

function formatShortString(
    time: SeparatedTime,
    units: number,
    { day, hour, minute, second }: InternationalizationConfig
): string {
    const secondChar = second.single.charAt(0);
    const names = [
        { name: day.single.charAt(0), time: time.days },
        { name: hour.single.charAt(0), time: time.hours },
        { name: minute.single.charAt(0), time: time.minutes },
        { name: secondChar, time: time.seconds },
    ];

    let result = "";

    for (let a = 0; a < names.length; a++) {
        const item = names[a];

        if (item.time > 0) {
            if (result !== "") {
                result += ` ${item.time}${item.name}`;
            } else {
                result += `${item.time}${item.name}`;
            }

            units--;

            // reached the limit of the units that we want to display
            if (units === 0) {
                break;
            }
        }
    }

    return result !== "" ? result : `0${secondChar}`;
}
