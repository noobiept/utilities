[**Utilities**](../README.md)

***

[Utilities](../README.md) / Debounced

# Interface: Debounced()\<Args\>

Defined in: [source/async/async.ts:182](https://github.com/noobiept/utilities/blob/b21d9fb0c9b704e42a1118c2425caf151c654ec9/source/async/async.ts#L182)

## Type Parameters

### Args

`Args` *extends* `unknown`[]

> **Debounced**(...`args`): `void`

Defined in: [source/async/async.ts:183](https://github.com/noobiept/utilities/blob/b21d9fb0c9b704e42a1118c2425caf151c654ec9/source/async/async.ts#L183)

## Parameters

### args

...`Args`

## Returns

`void`

## Methods

### cancel()

> **cancel**(): `void`

Defined in: [source/async/async.ts:185](https://github.com/noobiept/utilities/blob/b21d9fb0c9b704e42a1118c2425caf151c654ec9/source/async/async.ts#L185)

Cancel any pending call without invoking `fn`.

#### Returns

`void`

***

### flush()

> **flush**(): `void`

Defined in: [source/async/async.ts:187](https://github.com/noobiept/utilities/blob/b21d9fb0c9b704e42a1118c2425caf151c654ec9/source/async/async.ts#L187)

Invoke any pending call immediately.

#### Returns

`void`
