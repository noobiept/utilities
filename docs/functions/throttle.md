[**Utilities**](../README.md)

***

[Utilities](../README.md) / throttle

# Function: throttle()

> **throttle**\<`Args`\>(`fn`, `ms`): [`Throttled`](../interfaces/Throttled.md)\<`Args`\>

Defined in: [source/async/async.ts:214](https://github.com/noobiept/utilities/blob/e6a08ca69d4fb1f440b5c1bfd63b2dadf3422789/source/async/async.ts#L214)

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
