[**Utilities**](../README.md)

***

[Utilities](../README.md) / Deferred

# Interface: Deferred\<T\>

Defined in: [source/async/async.ts:47](https://github.com/noobiept/utilities/blob/e6a08ca69d4fb1f440b5c1bfd63b2dadf3422789/source/async/async.ts#L47)

## Type Parameters

### T

`T`

## Properties

### promise

> **promise**: `Promise`\<`T`\>

Defined in: [source/async/async.ts:48](https://github.com/noobiept/utilities/blob/e6a08ca69d4fb1f440b5c1bfd63b2dadf3422789/source/async/async.ts#L48)

***

### reject

> **reject**: (`reason?`) => `void`

Defined in: [source/async/async.ts:50](https://github.com/noobiept/utilities/blob/e6a08ca69d4fb1f440b5c1bfd63b2dadf3422789/source/async/async.ts#L50)

#### Parameters

##### reason?

`unknown`

#### Returns

`void`

***

### resolve

> **resolve**: (`value`) => `void`

Defined in: [source/async/async.ts:49](https://github.com/noobiept/utilities/blob/e6a08ca69d4fb1f440b5c1bfd63b2dadf3422789/source/async/async.ts#L49)

#### Parameters

##### value

`T` \| `PromiseLike`\<`T`\>

#### Returns

`void`
