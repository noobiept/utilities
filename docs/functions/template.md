[**Utilities**](../README.md)

***

[Utilities](../README.md) / template

# Function: template()

> **template**(`str`, `vars`): `string`

Defined in: [source/string/string.ts:94](https://github.com/noobiept/utilities/blob/e6a08ca69d4fb1f440b5c1bfd63b2dadf3422789/source/string/string.ts#L94)

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
