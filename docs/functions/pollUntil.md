[**Utilities**](../README.md)

***

[Utilities](../README.md) / pollUntil

# Function: pollUntil()

> **pollUntil**\<`T`\>(`check`, `options`): `Promise`\<`T`\>

Defined in: [source/async/async.ts:126](https://github.com/noobiept/utilities/blob/ff405698d7b76a746376c90801225054c3881c9b/source/async/async.ts#L126)

Calls `check` repeatedly until it returns a truthy value (which is then returned),
or until `timeout` is exceeded (rejects with `TimeoutError`).

## Type Parameters

### T

`T`

## Parameters

### check

() => `false` \| `T` \| `Promise`\<`false` \| `T` \| `null` \| `undefined`\> \| `null` \| `undefined`

### options

[`PollOptions`](../interfaces/PollOptions.md)

## Returns

`Promise`\<`T`\>
