[**Utilities**](../README.md)

***

[Utilities](../README.md) / RetryOptions

# Interface: RetryOptions

Defined in: [source/async/async.ts:95](https://github.com/noobiept/utilities/blob/a2b219c4e944f55be1689b2aadd978da31c48c73/source/async/async.ts#L95)

## Properties

### attempts

> **attempts**: `number`

Defined in: [source/async/async.ts:97](https://github.com/noobiept/utilities/blob/a2b219c4e944f55be1689b2aadd978da31c48c73/source/async/async.ts#L97)

Total number of attempts (including the first one). Must be >= 1.

***

### backoff?

> `optional` **backoff?**: `number`

Defined in: [source/async/async.ts:101](https://github.com/noobiept/utilities/blob/a2b219c4e944f55be1689b2aadd978da31c48c73/source/async/async.ts#L101)

Multiplier applied to `delay` after each failed attempt. Defaults to 1 (constant delay).

***

### delay?

> `optional` **delay?**: `number`

Defined in: [source/async/async.ts:99](https://github.com/noobiept/utilities/blob/a2b219c4e944f55be1689b2aadd978da31c48c73/source/async/async.ts#L99)

Milliseconds to wait between attempts. Defaults to 0 (immediate retry).

***

### onError?

> `optional` **onError?**: (`error`, `attempt`) => `void`

Defined in: [source/async/async.ts:103](https://github.com/noobiept/utilities/blob/a2b219c4e944f55be1689b2aadd978da31c48c73/source/async/async.ts#L103)

Called with the error and the (1-indexed) attempt number after each failure.

#### Parameters

##### error

`unknown`

##### attempt

`number`

#### Returns

`void`
