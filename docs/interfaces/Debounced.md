[**Utilities**](../README.md)

***

[Utilities](../README.md) / Debounced

# Interface: Debounced()\<Args\>

Defined in: [source/async/async.ts:187](https://github.com/noobiept/utilities/blob/8c20054bf1ac298a403aef316daa5a4edd492c22/source/async/async.ts#L187)

## Type Parameters

### Args

`Args` *extends* `unknown`[]

> **Debounced**(...`args`): `void`

Defined in: [source/async/async.ts:188](https://github.com/noobiept/utilities/blob/8c20054bf1ac298a403aef316daa5a4edd492c22/source/async/async.ts#L188)

## Parameters

### args

...`Args`

## Returns

`void`

## Methods

### cancel()

> **cancel**(): `void`

Defined in: [source/async/async.ts:190](https://github.com/noobiept/utilities/blob/8c20054bf1ac298a403aef316daa5a4edd492c22/source/async/async.ts#L190)

Cancel any pending call without invoking `fn`.

#### Returns

`void`

***

### flush()

> **flush**(): `void`

Defined in: [source/async/async.ts:192](https://github.com/noobiept/utilities/blob/8c20054bf1ac298a403aef316daa5a4edd492c22/source/async/async.ts#L192)

Invoke any pending call immediately.

#### Returns

`void`
