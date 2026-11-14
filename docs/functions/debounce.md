[**Utilities**](../README.md)

***

[Utilities](../README.md) / debounce

# Function: debounce()

> **debounce**\<`Args`\>(`fn`, `ms`): [`Debounced`](../interfaces/Debounced.md)\<`Args`\>

Defined in: [source/async/async.ts:194](https://github.com/noobiept/utilities/blob/b21d9fb0c9b704e42a1118c2425caf151c654ec9/source/async/async.ts#L194)

Returns a wrapper that delays calling `fn` until `ms` milliseconds have passed
since the last invocation. Subsequent calls within that window reset the timer.

## Type Parameters

### Args

`Args` *extends* `unknown`[]

## Parameters

### fn

(...`args`) => `void`

### ms

`number`

## Returns

[`Debounced`](../interfaces/Debounced.md)\<`Args`\>
