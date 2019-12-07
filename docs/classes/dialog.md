[Utilities](../README.md) › [Dialog](dialog.md)

# Class: Dialog

Create a dialog window with the given message.
Can be a modal (forces user interaction) or not.

Usage:
    const dialog = new Dialog({
        title: 'the title',
        body: 'the body'
    });
    dialog.open();

## Hierarchy

* **Dialog**

## Index

### Constructors

* [constructor](dialog.md#constructor)

### Properties

* [body](dialog.md#private-body)
* [container](dialog.md#private-container)
* [keyUp](dialog.md#private-optional-keyup)
* [onClose](dialog.md#private-optional-onclose)
* [opened](dialog.md#private-opened)
* [overlay](dialog.md#private-optional-overlay)
* [title](dialog.md#private-title)

### Methods

* [addKeyboardShortcuts](dialog.md#private-addkeyboardshortcuts)
* [close](dialog.md#close)
* [createButtons](dialog.md#private-createbuttons)
* [createContainer](dialog.md#private-createcontainer)
* [createHorizontalRule](dialog.md#private-createhorizontalrule)
* [createOverlay](dialog.md#private-createoverlay)
* [isOpened](dialog.md#isopened)
* [open](dialog.md#open)
* [removeKeyboardShortcuts](dialog.md#private-removekeyboardshortcuts)
* [setBody](dialog.md#setbody)
* [setTitle](dialog.md#settitle)
* [setupKeyboardShortcuts](dialog.md#private-setupkeyboardshortcuts)
* [toggle](dialog.md#toggle)

## Constructors

###  constructor

\+ **new Dialog**(`args`: [DialogArgs](../interfaces/dialogargs.md)): *[Dialog](dialog.md)*

*Defined in [dialog.ts:35](https://github.com/noobiept/utilities/blob/29e7ef3/source/dialog.ts#L35)*

**Parameters:**

Name | Type |
------ | ------ |
`args` | [DialogArgs](../interfaces/dialogargs.md) |

**Returns:** *[Dialog](dialog.md)*

## Properties

### `Private` body

• **body**: *HTMLElement*

*Defined in [dialog.ts:31](https://github.com/noobiept/utilities/blob/29e7ef3/source/dialog.ts#L31)*

___

### `Private` container

• **container**: *HTMLElement*

*Defined in [dialog.ts:29](https://github.com/noobiept/utilities/blob/29e7ef3/source/dialog.ts#L29)*

___

### `Private` `Optional` keyUp

• **keyUp**? : *undefined | function*

*Defined in [dialog.ts:34](https://github.com/noobiept/utilities/blob/29e7ef3/source/dialog.ts#L34)*

___

### `Private` `Optional` onClose

• **onClose**? : *undefined | function*

*Defined in [dialog.ts:33](https://github.com/noobiept/utilities/blob/29e7ef3/source/dialog.ts#L33)*

___

### `Private` opened

• **opened**: *boolean*

*Defined in [dialog.ts:35](https://github.com/noobiept/utilities/blob/29e7ef3/source/dialog.ts#L35)*

___

### `Private` `Optional` overlay

• **overlay**? : *HTMLElement*

*Defined in [dialog.ts:32](https://github.com/noobiept/utilities/blob/29e7ef3/source/dialog.ts#L32)*

___

### `Private` title

• **title**: *HTMLElement*

*Defined in [dialog.ts:30](https://github.com/noobiept/utilities/blob/29e7ef3/source/dialog.ts#L30)*

## Methods

### `Private` addKeyboardShortcuts

▸ **addKeyboardShortcuts**(): *void*

*Defined in [dialog.ts:138](https://github.com/noobiept/utilities/blob/29e7ef3/source/dialog.ts#L138)*

**Returns:** *void*

___

###  close

▸ **close**(): *void*

*Defined in [dialog.ts:170](https://github.com/noobiept/utilities/blob/29e7ef3/source/dialog.ts#L170)*

Remove the dialog from the page.

**Returns:** *void*

___

### `Private` createButtons

▸ **createButtons**(): *HTMLDivElement*

*Defined in [dialog.ts:102](https://github.com/noobiept/utilities/blob/29e7ef3/source/dialog.ts#L102)*

**Returns:** *HTMLDivElement*

___

### `Private` createContainer

▸ **createContainer**(`args`: [DialogArgs](../interfaces/dialogargs.md)): *object*

*Defined in [dialog.ts:54](https://github.com/noobiept/utilities/blob/29e7ef3/source/dialog.ts#L54)*

**Parameters:**

Name | Type |
------ | ------ |
`args` | [DialogArgs](../interfaces/dialogargs.md) |

**Returns:** *object*

* **body**: *HTMLDivElement*

* **container**: *HTMLDivElement*

* **title**: *HTMLDivElement*

___

### `Private` createHorizontalRule

▸ **createHorizontalRule**(): *HTMLHRElement*

*Defined in [dialog.ts:97](https://github.com/noobiept/utilities/blob/29e7ef3/source/dialog.ts#L97)*

**Returns:** *HTMLHRElement*

___

### `Private` createOverlay

▸ **createOverlay**(): *HTMLDivElement*

*Defined in [dialog.ts:118](https://github.com/noobiept/utilities/blob/29e7ef3/source/dialog.ts#L118)*

**Returns:** *HTMLDivElement*

___

###  isOpened

▸ **isOpened**(): *boolean*

*Defined in [dialog.ts:195](https://github.com/noobiept/utilities/blob/29e7ef3/source/dialog.ts#L195)*

Check if the dialog is opened or not.

**Returns:** *boolean*

___

###  open

▸ **open**(): *void*

*Defined in [dialog.ts:153](https://github.com/noobiept/utilities/blob/29e7ef3/source/dialog.ts#L153)*

Add the dialog to the page.

**Returns:** *void*

___

### `Private` removeKeyboardShortcuts

▸ **removeKeyboardShortcuts**(): *void*

*Defined in [dialog.ts:144](https://github.com/noobiept/utilities/blob/29e7ef3/source/dialog.ts#L144)*

**Returns:** *void*

___

###  setBody

▸ **setBody**(`body`: string): *void*

*Defined in [dialog.ts:220](https://github.com/noobiept/utilities/blob/29e7ef3/source/dialog.ts#L220)*

Change the body of the dialog.

**Parameters:**

Name | Type |
------ | ------ |
`body` | string |

**Returns:** *void*

___

###  setTitle

▸ **setTitle**(`title`: string): *void*

*Defined in [dialog.ts:213](https://github.com/noobiept/utilities/blob/29e7ef3/source/dialog.ts#L213)*

Change the title of the dialog.

**Parameters:**

Name | Type |
------ | ------ |
`title` | string |

**Returns:** *void*

___

### `Private` setupKeyboardShortcuts

▸ **setupKeyboardShortcuts**(): *keyUp*

*Defined in [dialog.ts:125](https://github.com/noobiept/utilities/blob/29e7ef3/source/dialog.ts#L125)*

**Returns:** *keyUp*

___

###  toggle

▸ **toggle**(): *void*

*Defined in [dialog.ts:202](https://github.com/noobiept/utilities/blob/29e7ef3/source/dialog.ts#L202)*

Toggle between the open/close state.

**Returns:** *void*
