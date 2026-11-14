[**Utilities**](../README.md)

***

[Utilities](../README.md) / debounce

# Function: debounce()

> **debounce**\<`Args`\>(`fn`, `ms`): [`Debounced`](../interfaces/Debounced.md)\<`Args`\>

Defined in: [source/async/async.ts:199](https://github.com/noobiept/utilities/blob/8c20054bf1ac298a403aef316daa5a4edd492c22/source/async/async.ts#L199)

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
