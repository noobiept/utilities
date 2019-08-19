**[Utilities](../README.md)**

[Globals](../globals.md) › [Timeout](timeout.md)

# Class: Timeout

Call a function after a certain time has passed. Uses the `window.setTimeout()`.

## Hierarchy

* **Timeout**

## Index

### Constructors

* [constructor](timeout.md#markdown-header-constructor)

### Properties

* [id](timeout.md#markdown-header-private-id)
* [is_active](timeout.md#markdown-header-private-is_active)

### Methods

* [clear](timeout.md#markdown-header-clear)
* [isActive](timeout.md#markdown-header-isactive)
* [start](timeout.md#markdown-header-start)

## Constructors

###  constructor

\+ **new Timeout**(): *[Timeout](timeout.md)*

Defined in timeout.ts:8

**Returns:** *[Timeout](timeout.md)*

## Properties

### `Private` id

• **id**: *number*

Defined in timeout.ts:8

___

### `Private` is_active

• **is_active**: *boolean*

Defined in timeout.ts:7

## Methods

###  clear

▸ **clear**(): *void*

Defined in timeout.ts:42

Cancels the timeout.

**Returns:** *void*

___

###  isActive

▸ **isActive**(): *boolean*

Defined in timeout.ts:50

Returns whether the timeout is active or not.

**Returns:** *boolean*

___

###  start

▸ **start**(`functionToCall`: Function, `interval`: number): *void*

Defined in timeout.ts:22

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