[**Utilities**](../README.md)

***

[Utilities](../README.md) / Timeout

# Class: Timeout

Defined in: [source/timeout/timeout.ts:4](https://github.com/noobiept/utilities/blob/ff405698d7b76a746376c90801225054c3881c9b/source/timeout/timeout.ts#L4)

Call a function after a certain time has passed. Uses the `window.setTimeout()`.

## Constructors

### Constructor

> **new Timeout**(): `Timeout`

Defined in: [source/timeout/timeout.ts:8](https://github.com/noobiept/utilities/blob/ff405698d7b76a746376c90801225054c3881c9b/source/timeout/timeout.ts#L8)

#### Returns

`Timeout`

## Methods

### clear()

> **clear**(): `void`

Defined in: [source/timeout/timeout.ts:32](https://github.com/noobiept/utilities/blob/ff405698d7b76a746376c90801225054c3881c9b/source/timeout/timeout.ts#L32)

Cancels the timeout.

#### Returns

`void`

***

### isActive()

> **isActive**(): `boolean`

Defined in: [source/timeout/timeout.ts:40](https://github.com/noobiept/utilities/blob/ff405698d7b76a746376c90801225054c3881c9b/source/timeout/timeout.ts#L40)

Returns whether the timeout is active or not.

#### Returns

`boolean`

***

### start()

> **start**(`functionToCall`, `interval`): `void`

Defined in: [source/timeout/timeout.ts:16](https://github.com/noobiept/utilities/blob/ff405698d7b76a746376c90801225054c3881c9b/source/timeout/timeout.ts#L16)

Starts the timeout. If there was an active timeout already, that one is canceled.

#### Parameters

##### functionToCall

() => `void`

##### interval

`number`

#### Returns

`void`
