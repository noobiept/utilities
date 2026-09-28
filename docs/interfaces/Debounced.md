[**Utilities**](../README.md)

***

[Utilities](../README.md) / Debounced

# Interface: Debounced()\<Args\>

Defined in: [source/async/async.ts:155](https://github.com/noobiept/utilities/blob/ff405698d7b76a746376c90801225054c3881c9b/source/async/async.ts#L155)

## Type Parameters

### Args

`Args` *extends* `unknown`[]

> **Debounced**(...`args`): `void`

Defined in: [source/async/async.ts:156](https://github.com/noobiept/utilities/blob/ff405698d7b76a746376c90801225054c3881c9b/source/async/async.ts#L156)

## Parameters

### args

...`Args`

## Returns

`void`

## Methods

### cancel()

> **cancel**(): `void`

Defined in: [source/async/async.ts:158](https://github.com/noobiept/utilities/blob/ff405698d7b76a746376c90801225054c3881c9b/source/async/async.ts#L158)

Cancel any pending call without invoking `fn`.

#### Returns

`void`

***

### flush()

> **flush**(): `void`

Defined in: [source/async/async.ts:160](https://github.com/noobiept/utilities/blob/ff405698d7b76a746376c90801225054c3881c9b/source/async/async.ts#L160)

Invoke any pending call immediately.

#### Returns

`void`
