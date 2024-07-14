[**Utilities**](../README.md) • **Docs**

***

[Utilities](../README.md) / timeToString

# Function: timeToString()

> **timeToString**(`args`): `string`

Converts a time (in milliseconds) to a string (with the number of days/hours...).
The units available are: day/hour/minute/second.

There's 4 possible display formats.

- daytime:
    `dd hh:mm:ss` or `hh:mm:ss` (where d=day, h=hour, m=minute, s=second)

- partial_daytime:
     `ss`, `mm:ss`, `hh:mm:ss` or "dd hh:mm:ss", depending on the time value.

- string:
    `(d) days (h) hours (m) minutes (s) seconds`

- short_string:
   `(d)d (h)h (m)m (s)s`

The number of `units` can limit the number of units shown in the string/short_string formats (days/hours, or hours/minutes or minutes/seconds, and not days/hours/minutes for example (for a `units` with value 2)).

The display string can be internationalized with the `internationalization` argument (when using the `string` or `short_string`).

Defaults:
    units: undefined (shows all non-zero if format is type `string` or `short_string`)
    format: string

## Parameters

• **args**: [`TimeToStringArgs`](../interfaces/TimeToStringArgs.md)

## Returns

`string`

## Defined in

[time\_to\_string/time\_to\_string.ts:75](https://github.com/noobiept/utilities/blob/1d2cee23362dcff5c0b5fdf27f21e257e8f3dc9e/source/time_to_string/time_to_string.ts#L75)
