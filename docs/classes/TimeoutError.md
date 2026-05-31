[**Utilities**](../README.md)

***

[Utilities](../README.md) / TimeoutError

# Class: TimeoutError

Defined in: [source/async/async.ts:6](https://github.com/noobiept/utilities/blob/e6a08ca69d4fb1f440b5c1bfd63b2dadf3422789/source/async/async.ts#L6)

Error thrown by `withTimeout`, `pollUntil`, and other helpers when a deadline is missed.

## Extends

- `Error`

## Constructors

### Constructor

> **new TimeoutError**(`message?`): `TimeoutError`

Defined in: [source/async/async.ts:7](https://github.com/noobiept/utilities/blob/e6a08ca69d4fb1f440b5c1bfd63b2dadf3422789/source/async/async.ts#L7)

#### Parameters

##### message?

`string` = `"Operation timed out"`

#### Returns

`TimeoutError`

#### Overrides

`Error.constructor`

## Properties

### message

> **message**: `string`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.es5.d.ts:1075

#### Inherited from

`Error.message`

***

### name

> **name**: `string`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.es5.d.ts:1074

#### Inherited from

`Error.name`

***

### stack?

> `optional` **stack?**: `string`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.es5.d.ts:1076

#### Inherited from

`Error.stack`
