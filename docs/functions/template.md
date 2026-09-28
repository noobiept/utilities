[**Utilities**](../README.md)

***

[Utilities](../README.md) / template

# Function: template()

> **template**(`str`, `vars`): `string`

Defined in: [source/string/string.ts:94](https://github.com/noobiept/utilities/blob/ff405698d7b76a746376c90801225054c3881c9b/source/string/string.ts#L94)

Interpolates `{{name}}` placeholders in `str` using values from `vars`.
Whitespace inside the braces is tolerated (`{{ name }}` works too).
Missing keys are replaced with an empty string.

## Parameters

### str

`string`

### vars

`Record`\<`string`, `string` \| `number` \| `boolean`\>

## Returns

`string`
