[**Utilities**](../README.md)

***

[Utilities](../README.md) / template

# Function: template()

> **template**(`str`, `vars`): `string`

Defined in: [source/string/string.ts:94](https://github.com/noobiept/utilities/blob/b21d9fb0c9b704e42a1118c2425caf151c654ec9/source/string/string.ts#L94)

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
