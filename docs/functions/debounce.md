[**Utilities**](../README.md)

***

[Utilities](../README.md) / debounce

# Function: debounce()

> **debounce**\<`Args`\>(`fn`, `ms`): [`Debounced`](../interfaces/Debounced.md)\<`Args`\>

Defined in: [source/async/async.ts:195](https://github.com/noobiept/utilities/blob/a2b219c4e944f55be1689b2aadd978da31c48c73/source/async/async.ts#L195)

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
