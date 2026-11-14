[**Utilities**](../README.md)

***

[Utilities](../README.md) / PollOptions

# Interface: PollOptions

Defined in: [source/async/async.ts:141](https://github.com/noobiept/utilities/blob/a2b219c4e944f55be1689b2aadd978da31c48c73/source/async/async.ts#L141)

## Properties

### interval

> **interval**: `number`

Defined in: [source/async/async.ts:143](https://github.com/noobiept/utilities/blob/a2b219c4e944f55be1689b2aadd978da31c48c73/source/async/async.ts#L143)

Milliseconds between checks.

***

### timeout

> **timeout**: `number`

Defined in: [source/async/async.ts:145](https://github.com/noobiept/utilities/blob/a2b219c4e944f55be1689b2aadd978da31c48c73/source/async/async.ts#L145)

Total milliseconds before giving up and rejecting with a `TimeoutError` (including a check that is still running). Use `Infinity` to never give up.
