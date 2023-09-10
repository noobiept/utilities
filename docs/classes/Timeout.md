[Utilities](../README.md) / Timeout

# Class: Timeout

Call a function after a certain time has passed. Uses the `window.setTimeout()`.

## Table of contents

### Constructors

- [constructor](Timeout.md#constructor)

### Properties

- [id](Timeout.md#id)
- [is\_active](Timeout.md#is_active)

### Methods

- [clear](Timeout.md#clear)
- [isActive](Timeout.md#isactive)
- [start](Timeout.md#start)

## Constructors

### constructor

• **new Timeout**()

#### Defined in

[timeout/timeout.ts:8](https://github.com/noobiept/utilities/blob/f980c9b/source/timeout/timeout.ts#L8)

## Properties

### id

• `Private` **id**: `number`

#### Defined in

[timeout/timeout.ts:6](https://github.com/noobiept/utilities/blob/f980c9b/source/timeout/timeout.ts#L6)

___

### is\_active

• `Private` **is\_active**: `boolean`

#### Defined in

[timeout/timeout.ts:5](https://github.com/noobiept/utilities/blob/f980c9b/source/timeout/timeout.ts#L5)

## Methods

### clear

▸ **clear**(): `void`

Cancels the timeout.

#### Returns

`void`

#### Defined in

[timeout/timeout.ts:32](https://github.com/noobiept/utilities/blob/f980c9b/source/timeout/timeout.ts#L32)

___

### isActive

▸ **isActive**(): `boolean`

Returns whether the timeout is active or not.

#### Returns

`boolean`

#### Defined in

[timeout/timeout.ts:40](https://github.com/noobiept/utilities/blob/f980c9b/source/timeout/timeout.ts#L40)

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

[timeout/timeout.ts:16](https://github.com/noobiept/utilities/blob/f980c9b/source/timeout/timeout.ts#L16)
