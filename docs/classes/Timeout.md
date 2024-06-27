[**Utilities**](../README.md) • **Docs**

***

[Utilities](../README.md) / Timeout

# Class: Timeout

Call a function after a certain time has passed. Uses the `window.setTimeout()`.

## Constructors

### new Timeout()

> **new Timeout**(): [`Timeout`](Timeout.md)

#### Returns

[`Timeout`](Timeout.md)

#### Defined in

[timeout/timeout.ts:8](https://github.com/noobiept/utilities/blob/18352a8077ed8c48acd60199e66f10ece023322d/source/timeout/timeout.ts#L8)

## Methods

### clear()

> **clear**(): `void`

Cancels the timeout.

#### Returns

`void`

#### Defined in

[timeout/timeout.ts:32](https://github.com/noobiept/utilities/blob/18352a8077ed8c48acd60199e66f10ece023322d/source/timeout/timeout.ts#L32)

***

### isActive()

> **isActive**(): `boolean`

Returns whether the timeout is active or not.

#### Returns

`boolean`

#### Defined in

[timeout/timeout.ts:40](https://github.com/noobiept/utilities/blob/18352a8077ed8c48acd60199e66f10ece023322d/source/timeout/timeout.ts#L40)

***

### start()

> **start**(`functionToCall`, `interval`): `void`

Starts the timeout. If there was an active timeout already, that one is canceled.

#### Parameters

• **functionToCall**

• **interval**: `number`

#### Returns

`void`

#### Defined in

[timeout/timeout.ts:16](https://github.com/noobiept/utilities/blob/18352a8077ed8c48acd60199e66f10ece023322d/source/timeout/timeout.ts#L16)
