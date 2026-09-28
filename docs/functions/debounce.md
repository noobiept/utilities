[**Utilities**](../README.md)

***

[Utilities](../README.md) / debounce

# Function: debounce()

> **debounce**\<`Args`\>(`fn`, `ms`): [`Debounced`](../interfaces/Debounced.md)\<`Args`\>

Defined in: [source/async/async.ts:167](https://github.com/noobiept/utilities/blob/ff405698d7b76a746376c90801225054c3881c9b/source/async/async.ts#L167)

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
