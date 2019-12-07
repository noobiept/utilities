[Utilities](../README.md) › [Timeout](timeout.md)

# Class: Timeout

Call a function after a certain time has passed. Uses the `window.setTimeout()`.

## Hierarchy

* **Timeout**

## Index

### Constructors

* [constructor](timeout.md#constructor)

### Properties

* [id](timeout.md#private-id)
* [is_active](timeout.md#private-is_active)

### Methods

* [clear](timeout.md#clear)
* [isActive](timeout.md#isactive)
* [start](timeout.md#start)

## Constructors

###  constructor

\+ **new Timeout**(): *[Timeout](timeout.md)*

*Defined in [timeout.ts:8](https://github.com/noobiept/utilities/blob/29e7ef3/source/timeout.ts#L8)*

**Returns:** *[Timeout](timeout.md)*

## Properties

### `Private` id

• **id**: *number*

*Defined in [timeout.ts:8](https://github.com/noobiept/utilities/blob/29e7ef3/source/timeout.ts#L8)*

___

### `Private` is_active

• **is_active**: *boolean*

*Defined in [timeout.ts:7](https://github.com/noobiept/utilities/blob/29e7ef3/source/timeout.ts#L7)*

## Methods

###  clear

▸ **clear**(): *void*

*Defined in [timeout.ts:42](https://github.com/noobiept/utilities/blob/29e7ef3/source/timeout.ts#L42)*

Cancels the timeout.

**Returns:** *void*

___

###  isActive

▸ **isActive**(): *boolean*

*Defined in [timeout.ts:50](https://github.com/noobiept/utilities/blob/29e7ef3/source/timeout.ts#L50)*

Returns whether the timeout is active or not.

**Returns:** *boolean*

___

###  start

▸ **start**(`functionToCall`: Function, `interval`: number): *void*

*Defined in [timeout.ts:22](https://github.com/noobiept/utilities/blob/29e7ef3/source/timeout.ts#L22)*

Starts the timeout. If there was an active timeout already, that one is canceled.

Throws an `Error` exception if:
- `functionToCall` isn't a function.
- `interval` isn't a number.

**Parameters:**

Name | Type |
------ | ------ |
`functionToCall` | Function |
`interval` | number |

**Returns:** *void*
