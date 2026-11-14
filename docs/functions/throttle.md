[**Utilities**](../README.md)

***

[Utilities](../README.md) / throttle

# Function: throttle()

> **throttle**\<`Args`\>(`fn`, `ms`): [`Throttled`](../interfaces/Throttled.md)\<`Args`\>

Defined in: [source/async/async.ts:246](https://github.com/noobiept/utilities/blob/b21d9fb0c9b704e42a1118c2425caf151c654ec9/source/async/async.ts#L246)

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
