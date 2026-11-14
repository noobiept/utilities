[**Utilities**](../README.md)

***

[Utilities](../README.md) / pollUntil

# Function: pollUntil()

> **pollUntil**\<`T`\>(`check`, `options`): `Promise`\<`T`\>

Defined in: [source/async/async.ts:152](https://github.com/noobiept/utilities/blob/8c20054bf1ac298a403aef316daa5a4edd492c22/source/async/async.ts#L152)

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
