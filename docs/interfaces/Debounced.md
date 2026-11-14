[**Utilities**](../README.md)

***

[Utilities](../README.md) / Debounced

# Interface: Debounced()\<Args\>

Defined in: [source/async/async.ts:183](https://github.com/noobiept/utilities/blob/a2b219c4e944f55be1689b2aadd978da31c48c73/source/async/async.ts#L183)

## Type Parameters

### Args

`Args` *extends* `unknown`[]

> **Debounced**(...`args`): `void`

Defined in: [source/async/async.ts:184](https://github.com/noobiept/utilities/blob/a2b219c4e944f55be1689b2aadd978da31c48c73/source/async/async.ts#L184)

## Parameters

### args

...`Args`

## Returns

`void`

## Methods

### cancel()

> **cancel**(): `void`

Defined in: [source/async/async.ts:186](https://github.com/noobiept/utilities/blob/a2b219c4e944f55be1689b2aadd978da31c48c73/source/async/async.ts#L186)

Cancel any pending call without invoking `fn`.

#### Returns

`void`

***

### flush()

> **flush**(): `void`

Defined in: [source/async/async.ts:188](https://github.com/noobiept/utilities/blob/a2b219c4e944f55be1689b2aadd978da31c48c73/source/async/async.ts#L188)

Invoke any pending call immediately.

#### Returns

`void`
