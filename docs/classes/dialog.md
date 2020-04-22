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

*Defined in [dialog.ts:36](https://github.com/noobiept/utilities/blob/a95c65d/source/dialog.ts#L36)*

**Parameters:**

Name | Type |
------ | ------ |
`args` | [DialogArgs](../interfaces/dialogargs.md) |

**Returns:** *[Dialog](dialog.md)*

## Properties

### `Private` body

• **body**: *HTMLElement*

*Defined in [dialog.ts:32](https://github.com/noobiept/utilities/blob/a95c65d/source/dialog.ts#L32)*

___

### `Private` container

• **container**: *HTMLElement*

*Defined in [dialog.ts:30](https://github.com/noobiept/utilities/blob/a95c65d/source/dialog.ts#L30)*

___

### `Private` `Optional` keyUp

• **keyUp**? : *undefined | function*

*Defined in [dialog.ts:35](https://github.com/noobiept/utilities/blob/a95c65d/source/dialog.ts#L35)*

___

### `Private` `Optional` onClose

• **onClose**? : *undefined | function*

*Defined in [dialog.ts:34](https://github.com/noobiept/utilities/blob/a95c65d/source/dialog.ts#L34)*

___

### `Private` opened

• **opened**: *boolean*

*Defined in [dialog.ts:36](https://github.com/noobiept/utilities/blob/a95c65d/source/dialog.ts#L36)*

___

### `Private` `Optional` overlay

• **overlay**? : *HTMLElement*

*Defined in [dialog.ts:33](https://github.com/noobiept/utilities/blob/a95c65d/source/dialog.ts#L33)*

___

### `Private` title

• **title**: *HTMLElement*

*Defined in [dialog.ts:31](https://github.com/noobiept/utilities/blob/a95c65d/source/dialog.ts#L31)*

## Methods

### `Private` addKeyboardShortcuts

▸ **addKeyboardShortcuts**(): *void*

*Defined in [dialog.ts:143](https://github.com/noobiept/utilities/blob/a95c65d/source/dialog.ts#L143)*

**Returns:** *void*

___

###  close

▸ **close**(): *void*

*Defined in [dialog.ts:175](https://github.com/noobiept/utilities/blob/a95c65d/source/dialog.ts#L175)*

Remove the dialog from the page.

**Returns:** *void*

___

### `Private` createButtons

▸ **createButtons**(): *HTMLDivElement*

*Defined in [dialog.ts:107](https://github.com/noobiept/utilities/blob/a95c65d/source/dialog.ts#L107)*

**Returns:** *HTMLDivElement*

___

### `Private` createContainer

▸ **createContainer**(`args`: [DialogArgs](../interfaces/dialogargs.md)): *object*

*Defined in [dialog.ts:58](https://github.com/noobiept/utilities/blob/a95c65d/source/dialog.ts#L58)*

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

*Defined in [dialog.ts:102](https://github.com/noobiept/utilities/blob/a95c65d/source/dialog.ts#L102)*

**Returns:** *HTMLHRElement*

___

### `Private` createOverlay

▸ **createOverlay**(): *HTMLDivElement*

*Defined in [dialog.ts:123](https://github.com/noobiept/utilities/blob/a95c65d/source/dialog.ts#L123)*

**Returns:** *HTMLDivElement*

___

###  isOpened

▸ **isOpened**(): *boolean*

*Defined in [dialog.ts:200](https://github.com/noobiept/utilities/blob/a95c65d/source/dialog.ts#L200)*

Check if the dialog is opened or not.

**Returns:** *boolean*

___

###  open

▸ **open**(): *void*

*Defined in [dialog.ts:158](https://github.com/noobiept/utilities/blob/a95c65d/source/dialog.ts#L158)*

Add the dialog to the page.

**Returns:** *void*

___

### `Private` removeKeyboardShortcuts

▸ **removeKeyboardShortcuts**(): *void*

*Defined in [dialog.ts:149](https://github.com/noobiept/utilities/blob/a95c65d/source/dialog.ts#L149)*

**Returns:** *void*

___

###  setBody

▸ **setBody**(`content`: string | HTMLElement): *void*

*Defined in [dialog.ts:229](https://github.com/noobiept/utilities/blob/a95c65d/source/dialog.ts#L229)*

Change the body of the dialog.

**Parameters:**

Name | Type |
------ | ------ |
`content` | string &#124; HTMLElement |

**Returns:** *void*

___

###  setTitle

▸ **setTitle**(`content`: string | HTMLElement): *void*

*Defined in [dialog.ts:218](https://github.com/noobiept/utilities/blob/a95c65d/source/dialog.ts#L218)*

Change the title of the dialog.

**Parameters:**

Name | Type |
------ | ------ |
`content` | string &#124; HTMLElement |

**Returns:** *void*

___

### `Private` setupKeyboardShortcuts

▸ **setupKeyboardShortcuts**(): *keyUp*

*Defined in [dialog.ts:130](https://github.com/noobiept/utilities/blob/a95c65d/source/dialog.ts#L130)*

**Returns:** *keyUp*

___

###  toggle

▸ **toggle**(): *void*

*Defined in [dialog.ts:207](https://github.com/noobiept/utilities/blob/a95c65d/source/dialog.ts#L207)*

Toggle between the open/close state.

**Returns:** *void*
