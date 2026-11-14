[**Utilities**](../README.md)

***

[Utilities](../README.md) / pollUntil

# Function: pollUntil()

> **pollUntil**\<`T`\>(`check`, `options`): `Promise`\<`T`\>

Defined in: [source/async/async.ts:152](https://github.com/noobiept/utilities/blob/a2b219c4e944f55be1689b2aadd978da31c48c73/source/async/async.ts#L152)

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
