[**Utilities**](../README.md)

***

[Utilities](../README.md) / retry

# Function: retry()

> **retry**\<`T`\>(`fn`, `options`): `Promise`\<`T`\>

Defined in: [source/async/async.ts:110](https://github.com/noobiept/utilities/blob/8c20054bf1ac298a403aef316daa5a4edd492c22/source/async/async.ts#L110)

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
