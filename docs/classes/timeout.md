**[Utilities](../README.md)**

> [Globals](../README.md) / Timeout

# Class: Timeout

Call a function after a certain time has passed. Uses the `window.setTimeout()`.

## Hierarchy

* **Timeout**

## Index

### Constructors

* [constructor](timeout.md#constructor)

### Properties

* [id](timeout.md#id)
* [is\_active](timeout.md#is_active)

### Methods

* [clear](timeout.md#clear)
* [isActive](timeout.md#isactive)
* [start](timeout.md#start)

## Constructors

### constructor

\+ **new Timeout**(): [Timeout](timeout.md)

*Defined in [timeout.ts:6](https://github.com/noobiept/utilities/blob/4235ba9/source/timeout.ts#L6)*

**Returns:** [Timeout](timeout.md)

## Properties

### id

• `Private` **id**: number

*Defined in [timeout.ts:6](https://github.com/noobiept/utilities/blob/4235ba9/source/timeout.ts#L6)*

___

### is\_active

• `Private` **is\_active**: boolean

*Defined in [timeout.ts:5](https://github.com/noobiept/utilities/blob/4235ba9/source/timeout.ts#L5)*

## Methods

### clear

▸ **clear**(): void

*Defined in [timeout.ts:32](https://github.com/noobiept/utilities/blob/4235ba9/source/timeout.ts#L32)*

Cancels the timeout.

**Returns:** void

___

### isActive

▸ **isActive**(): boolean

*Defined in [timeout.ts:40](https://github.com/noobiept/utilities/blob/4235ba9/source/timeout.ts#L40)*

Returns whether the timeout is active or not.

**Returns:** boolean

___

### start

▸ **start**(`functionToCall`: () => void, `interval`: number): void

*Defined in [timeout.ts:16](https://github.com/noobiept/utilities/blob/4235ba9/source/timeout.ts#L16)*

Starts the timeout. If there was an active timeout already, that one is canceled.

#### Parameters:

Name | Type |
------ | ------ |
`functionToCall` | () => void |
`interval` | number |

**Returns:** void
