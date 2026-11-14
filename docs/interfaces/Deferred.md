[**Utilities**](../README.md)

***

[Utilities](../README.md) / Deferred

# Interface: Deferred\<T\>

Defined in: [source/async/async.ts:73](https://github.com/noobiept/utilities/blob/8c20054bf1ac298a403aef316daa5a4edd492c22/source/async/async.ts#L73)

## Type Parameters

### T

`T`

## Properties

### promise

> **promise**: `Promise`\<`T`\>

Defined in: [source/async/async.ts:74](https://github.com/noobiept/utilities/blob/8c20054bf1ac298a403aef316daa5a4edd492c22/source/async/async.ts#L74)

***

### reject

> **reject**: (`reason?`) => `void`

Defined in: [source/async/async.ts:76](https://github.com/noobiept/utilities/blob/8c20054bf1ac298a403aef316daa5a4edd492c22/source/async/async.ts#L76)

#### Parameters

##### reason?

`unknown`

#### Returns

`void`

***

### resolve

> **resolve**: (`value`) => `void`

Defined in: [source/async/async.ts:75](https://github.com/noobiept/utilities/blob/8c20054bf1ac298a403aef316daa5a4edd492c22/source/async/async.ts#L75)

#### Parameters

##### value

`T` \| `PromiseLike`\<`T`\>

#### Returns

`void`
