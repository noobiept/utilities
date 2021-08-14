[Utilities](../README.md) / object

# Module: object

## Table of contents

### Functions

- [createEnum](object.md#createenum)
- [deepClone](object.md#deepclone)

## Functions

### createEnum

▸ **createEnum**(`values`, `start?`): `Object`

Enum - A way to associate a string name to a number.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `values` | `string`[] | The `enum` names. Each name will have an associated number. |
| `start?` | `number` | Starting number for the first name. The number is incremented by one for the next name. |

#### Returns

`Object`

#### Defined in

[object.ts:16](https://github.com/noobiept/utilities/blob/03a3e48/source/object.ts#L16)

___

### deepClone

▸ **deepClone**(`obj`): `any`

Returns a deep clone/copy of the object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

`any`

#### Defined in

[object.ts:6](https://github.com/noobiept/utilities/blob/03a3e48/source/object.ts#L6)
