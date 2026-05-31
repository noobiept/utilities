[**Utilities**](../README.md)

***

[Utilities](../README.md) / debounce

# Function: debounce()

> **debounce**\<`Args`\>(`fn`, `ms`): [`Debounced`](../interfaces/Debounced.md)\<`Args`\>

Defined in: [source/async/async.ts:162](https://github.com/noobiept/utilities/blob/e6a08ca69d4fb1f440b5c1bfd63b2dadf3422789/source/async/async.ts#L162)

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
