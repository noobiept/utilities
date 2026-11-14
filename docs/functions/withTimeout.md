[**Utilities**](../README.md)

***

[Utilities](../README.md) / withTimeout

# Function: withTimeout()

> **withTimeout**\<`T`\>(`promise`, `ms`, `message?`): `Promise`\<`T`\>

Defined in: [source/async/async.ts:50](https://github.com/noobiept/utilities/blob/b21d9fb0c9b704e42a1118c2425caf151c654ec9/source/async/async.ts#L50)

Resolves with the value of `promise` if it settles before `ms` elapses,
otherwise rejects with a `TimeoutError`. An `Infinity` timeout never rejects.

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
