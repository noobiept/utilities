[Utilities](../README.md) / [timeout](../modules/timeout.md) / Timeout

# Class: Timeout

[timeout](../modules/timeout.md).Timeout

Call a function after a certain time has passed. Uses the `window.setTimeout()`.

## Table of contents

### Constructors

- [constructor](timeout.Timeout.md#constructor)

### Properties

- [id](timeout.Timeout.md#id)
- [is\_active](timeout.Timeout.md#is_active)

### Methods

- [clear](timeout.Timeout.md#clear)
- [isActive](timeout.Timeout.md#isactive)
- [start](timeout.Timeout.md#start)

## Constructors

### constructor

• **new Timeout**()

#### Defined in

[timeout.ts:8](https://github.com/noobiept/utilities/blob/03a3e48/source/timeout.ts#L8)

## Properties

### id

• `Private` **id**: `number`

#### Defined in

[timeout.ts:6](https://github.com/noobiept/utilities/blob/03a3e48/source/timeout.ts#L6)

___

### is\_active

• `Private` **is\_active**: `boolean`

#### Defined in

[timeout.ts:5](https://github.com/noobiept/utilities/blob/03a3e48/source/timeout.ts#L5)

## Methods

### clear

▸ **clear**(): `void`

Cancels the timeout.

#### Returns

`void`

#### Defined in

[timeout.ts:32](https://github.com/noobiept/utilities/blob/03a3e48/source/timeout.ts#L32)

___

### isActive

▸ **isActive**(): `boolean`

Returns whether the timeout is active or not.

#### Returns

`boolean`

#### Defined in

[timeout.ts:40](https://github.com/noobiept/utilities/blob/03a3e48/source/timeout.ts#L40)

___

### start

▸ **start**(`functionToCall`, `interval`): `void`

Starts the timeout. If there was an active timeout already, that one is canceled.

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionToCall` | () => `void` |
| `interval` | `number` |

#### Returns

`void`

#### Defined in

[timeout.ts:16](https://github.com/noobiept/utilities/blob/03a3e48/source/timeout.ts#L16)
