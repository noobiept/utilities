[**Utilities**](../README.md)

***

[Utilities](../README.md) / retry

# Function: retry()

> **retry**\<`T`\>(`fn`, `options`): `Promise`\<`T`\>

Defined in: [source/async/async.ts:84](https://github.com/noobiept/utilities/blob/e6a08ca69d4fb1f440b5c1bfd63b2dadf3422789/source/async/async.ts#L84)

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
