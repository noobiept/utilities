[**Utilities**](../README.md)

***

[Utilities](../README.md) / retry

# Function: retry()

> **retry**\<`T`\>(`fn`, `options`): `Promise`\<`T`\>

Defined in: [source/async/async.ts:110](https://github.com/noobiept/utilities/blob/a2b219c4e944f55be1689b2aadd978da31c48c73/source/async/async.ts#L110)

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
