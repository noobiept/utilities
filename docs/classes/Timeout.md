[**Utilities**](../README.md)

***

[Utilities](../README.md) / Timeout

# Class: Timeout

Defined in: [timeout/timeout.ts:4](https://github.com/noobiept/utilities/blob/fa81d9116003a677f25866bee864bc30213a9352/source/timeout/timeout.ts#L4)

Call a function after a certain time has passed. Uses the `window.setTimeout()`.

## Constructors

### new Timeout()

> **new Timeout**(): [`Timeout`](Timeout.md)

Defined in: [timeout/timeout.ts:8](https://github.com/noobiept/utilities/blob/fa81d9116003a677f25866bee864bc30213a9352/source/timeout/timeout.ts#L8)

#### Returns

[`Timeout`](Timeout.md)

## Methods

### clear()

> **clear**(): `void`

Defined in: [timeout/timeout.ts:32](https://github.com/noobiept/utilities/blob/fa81d9116003a677f25866bee864bc30213a9352/source/timeout/timeout.ts#L32)

Cancels the timeout.

#### Returns

`void`

***

### isActive()

> **isActive**(): `boolean`

Defined in: [timeout/timeout.ts:40](https://github.com/noobiept/utilities/blob/fa81d9116003a677f25866bee864bc30213a9352/source/timeout/timeout.ts#L40)

Returns whether the timeout is active or not.

#### Returns

`boolean`

***

### start()

> **start**(`functionToCall`, `interval`): `void`

Defined in: [timeout/timeout.ts:16](https://github.com/noobiept/utilities/blob/fa81d9116003a677f25866bee864bc30213a9352/source/timeout/timeout.ts#L16)

Starts the timeout. If there was an active timeout already, that one is canceled.

#### Parameters

##### functionToCall

() => `void`

##### interval

`number`

#### Returns

`void`
