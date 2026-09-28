[**Utilities**](../README.md)

***

[Utilities](../README.md) / withTimeout

# Function: withTimeout()

> **withTimeout**\<`T`\>(`promise`, `ms`, `message?`): `Promise`\<`T`\>

Defined in: [source/async/async.ts:24](https://github.com/noobiept/utilities/blob/ff405698d7b76a746376c90801225054c3881c9b/source/async/async.ts#L24)

Resolves with the value of `promise` if it settles before `ms` elapses,
otherwise rejects with a `TimeoutError`.

## Type Parameters

### T

`T`

## Parameters

### promise

`PromiseLike`\<`T`\>

### ms

`number`

### message?

`string`

## Returns

`Promise`\<`T`\>
