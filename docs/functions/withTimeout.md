[**Utilities**](../README.md)

***

[Utilities](../README.md) / withTimeout

# Function: withTimeout()

> **withTimeout**\<`T`\>(`promise`, `ms`, `message?`): `Promise`\<`T`\>

Defined in: [source/async/async.ts:50](https://github.com/noobiept/utilities/blob/8c20054bf1ac298a403aef316daa5a4edd492c22/source/async/async.ts#L50)

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
