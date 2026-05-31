[**Utilities**](../README.md)

***

[Utilities](../README.md) / RetryOptions

# Interface: RetryOptions

Defined in: [source/async/async.ts:69](https://github.com/noobiept/utilities/blob/e6a08ca69d4fb1f440b5c1bfd63b2dadf3422789/source/async/async.ts#L69)

## Properties

### attempts

> **attempts**: `number`

Defined in: [source/async/async.ts:71](https://github.com/noobiept/utilities/blob/e6a08ca69d4fb1f440b5c1bfd63b2dadf3422789/source/async/async.ts#L71)

Total number of attempts (including the first one). Must be >= 1.

***

### backoff?

> `optional` **backoff?**: `number`

Defined in: [source/async/async.ts:75](https://github.com/noobiept/utilities/blob/e6a08ca69d4fb1f440b5c1bfd63b2dadf3422789/source/async/async.ts#L75)

Multiplier applied to `delay` after each failed attempt. Defaults to 1 (constant delay).

***

### delay?

> `optional` **delay?**: `number`

Defined in: [source/async/async.ts:73](https://github.com/noobiept/utilities/blob/e6a08ca69d4fb1f440b5c1bfd63b2dadf3422789/source/async/async.ts#L73)

Milliseconds to wait between attempts. Defaults to 0 (immediate retry).

***

### onError?

> `optional` **onError?**: (`error`, `attempt`) => `void`

Defined in: [source/async/async.ts:77](https://github.com/noobiept/utilities/blob/e6a08ca69d4fb1f440b5c1bfd63b2dadf3422789/source/async/async.ts#L77)

Called with the error and the (1-indexed) attempt number after each failure.

#### Parameters

##### error

`unknown`

##### attempt

`number`

#### Returns

`void`
