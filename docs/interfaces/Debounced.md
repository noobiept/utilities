[**Utilities**](../README.md)

***

[Utilities](../README.md) / Debounced

# Interface: Debounced()\<Args\>

Defined in: [source/async/async.ts:150](https://github.com/noobiept/utilities/blob/e6a08ca69d4fb1f440b5c1bfd63b2dadf3422789/source/async/async.ts#L150)

## Type Parameters

### Args

`Args` *extends* `unknown`[]

> **Debounced**(...`args`): `void`

Defined in: [source/async/async.ts:151](https://github.com/noobiept/utilities/blob/e6a08ca69d4fb1f440b5c1bfd63b2dadf3422789/source/async/async.ts#L151)

## Parameters

### args

...`Args`

## Returns

`void`

## Methods

### cancel()

> **cancel**(): `void`

Defined in: [source/async/async.ts:153](https://github.com/noobiept/utilities/blob/e6a08ca69d4fb1f440b5c1bfd63b2dadf3422789/source/async/async.ts#L153)

Cancel any pending call without invoking `fn`.

#### Returns

`void`

***

### flush()

> **flush**(): `void`

Defined in: [source/async/async.ts:155](https://github.com/noobiept/utilities/blob/e6a08ca69d4fb1f440b5c1bfd63b2dadf3422789/source/async/async.ts#L155)

Invoke any pending call immediately.

#### Returns

`void`
