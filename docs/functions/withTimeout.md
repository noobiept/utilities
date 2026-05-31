[**Utilities**](../README.md)

***

[Utilities](../README.md) / withTimeout

# Function: withTimeout()

> **withTimeout**\<`T`\>(`promise`, `ms`, `message?`): `Promise`\<`T`\>

Defined in: [source/async/async.ts:24](https://github.com/noobiept/utilities/blob/e6a08ca69d4fb1f440b5c1bfd63b2dadf3422789/source/async/async.ts#L24)

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
