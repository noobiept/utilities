[**Utilities**](../README.md)

***

[Utilities](../README.md) / truncate

# Function: truncate()

> **truncate**(`str`, `length`, `ellipsis?`): `string`

Defined in: [source/string/string.ts:22](https://github.com/noobiept/utilities/blob/ff405698d7b76a746376c90801225054c3881c9b/source/string/string.ts#L22)

Truncates `str` so the result is at most `length` characters long.
The ellipsis (default `"..."`) is included in the length budget. If the input
already fits, it's returned unchanged.

## Parameters

### str

`string`

### length

`number`

### ellipsis?

`string` = `"..."`

## Returns

`string`
