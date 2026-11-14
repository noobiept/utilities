[**Utilities**](../README.md)

***

[Utilities](../README.md) / PollOptions

# Interface: PollOptions

Defined in: [source/async/async.ts:141](https://github.com/noobiept/utilities/blob/b21d9fb0c9b704e42a1118c2425caf151c654ec9/source/async/async.ts#L141)

## Properties

### interval

> **interval**: `number`

Defined in: [source/async/async.ts:143](https://github.com/noobiept/utilities/blob/b21d9fb0c9b704e42a1118c2425caf151c654ec9/source/async/async.ts#L143)

Milliseconds between checks.

***

### timeout

> **timeout**: `number`

Defined in: [source/async/async.ts:145](https://github.com/noobiept/utilities/blob/b21d9fb0c9b704e42a1118c2425caf151c654ec9/source/async/async.ts#L145)

Total milliseconds before giving up and rejecting with a `TimeoutError` (including a check that is still running). The last check is at the deadline. Use `Infinity` to never give up.
