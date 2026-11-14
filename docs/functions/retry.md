[**Utilities**](../README.md)

***

[Utilities](../README.md) / retry

# Function: retry()

> **retry**\<`T`\>(`fn`, `options`): `Promise`\<`T`\>

Defined in: [source/async/async.ts:110](https://github.com/noobiept/utilities/blob/b21d9fb0c9b704e42a1118c2425caf151c654ec9/source/async/async.ts#L110)

Runs `fn`, retrying on rejection up to `attempts` times. Returns the first
successful result. If every attempt fails, the last error is re-thrown.

## Type Parameters

### T

`T`

## Parameters

### fn

() => `T` \| `Promise`\<`T`\>

### options

[`RetryOptions`](../interfaces/RetryOptions.md)

## Returns

`Promise`\<`T`\>
