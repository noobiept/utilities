[**Utilities**](../README.md)

***

[Utilities](../README.md) / throttle

# Function: throttle()

> **throttle**\<`Args`\>(`fn`, `ms`): [`Throttled`](../interfaces/Throttled.md)\<`Args`\>

Defined in: [source/async/async.ts:219](https://github.com/noobiept/utilities/blob/ff405698d7b76a746376c90801225054c3881c9b/source/async/async.ts#L219)

Returns a wrapper that calls `fn` at most once per `ms` milliseconds.
The first call within an idle window runs immediately (leading edge);
additional calls within the window schedule a single trailing call with the latest arguments.

## Type Parameters

### Args

`Args` *extends* `unknown`[]

## Parameters

### fn

(...`args`) => `void`

### ms

`number`

## Returns

[`Throttled`](../interfaces/Throttled.md)\<`Args`\>
