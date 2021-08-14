[Utilities](../README.md) / time_to_string

# Module: time\_to\_string

## Table of contents

### Interfaces

- [TimeToStringArgs](../interfaces/time_to_string.TimeToStringArgs.md)

### Functions

- [timeToString](time_to_string.md#timetostring)

## Functions

### timeToString

▸ **timeToString**(`args`): `string`

Converts a time (in milliseconds) to a string (with the number of days/hours...).
The units available are: day/hour/minute/second.

There's 2 possible display formats.
daytime:
    `dd hh:mm:ss` (where d=day, h=hour, m=minute, s=second)
string:
    `(d) days (h) hours (m) minutes (s) seconds`

The number of `units` can limit the number of units shown in the string format (days/hours, or hours/minutes or minutes/seconds, and not days/hours/minutes for example (for a `units` with value 2)).

Defaults:
    units: 2
    format: string

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`TimeToStringArgs`](../interfaces/time_to_string.TimeToStringArgs.md) |

#### Returns

`string`

#### Defined in

[time_to_string.ts:26](https://github.com/noobiept/utilities/blob/03a3e48/source/time_to_string.ts#L26)
