[Utilities](../README.md) / local_storage

# Module: local\_storage

## Table of contents

### Functions

- [getObject](local_storage.md#getobject)
- [saveObject](local_storage.md#saveobject)

## Functions

### getObject

▸ **getObject**(`key`): `any`

Returns an object that was obtained by parsing (with json) some data that was saved on `localStorage`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`any`

#### Defined in

[local_storage.ts:4](https://github.com/noobiept/utilities/blob/03a3e48/source/local_storage.ts#L4)

___

### saveObject

▸ **saveObject**(`key`, `value`): `void`

Saves in the `localStorage` a json string representation of the `value`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `any` |

#### Returns

`void`

#### Defined in

[local_storage.ts:13](https://github.com/noobiept/utilities/blob/03a3e48/source/local_storage.ts#L13)
