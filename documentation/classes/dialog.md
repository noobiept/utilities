**[Utilities](../README.md)**

[Globals](../globals.md) › [Dialog](dialog.md)

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

* [constructor](dialog.md#markdown-header-constructor)

### Properties

* [body](dialog.md#markdown-header-private-body)
* [container](dialog.md#markdown-header-private-container)
* [keyUp](dialog.md#markdown-header-private-optional-keyup)
* [onClose](dialog.md#markdown-header-private-optional-onclose)
* [opened](dialog.md#markdown-header-private-opened)
* [overlay](dialog.md#markdown-header-private-optional-overlay)
* [title](dialog.md#markdown-header-private-title)

### Methods

* [addKeyboardShortcuts](dialog.md#markdown-header-private-addkeyboardshortcuts)
* [close](dialog.md#markdown-header-close)
* [createButtons](dialog.md#markdown-header-private-createbuttons)
* [createContainer](dialog.md#markdown-header-private-createcontainer)
* [createHorizontalRule](dialog.md#markdown-header-private-createhorizontalrule)
* [createOverlay](dialog.md#markdown-header-private-createoverlay)
* [isOpened](dialog.md#markdown-header-isopened)
* [open](dialog.md#markdown-header-open)
* [removeKeyboardShortcuts](dialog.md#markdown-header-private-removekeyboardshortcuts)
* [setBody](dialog.md#markdown-header-setbody)
* [setTitle](dialog.md#markdown-header-settitle)
* [setupKeyboardShortcuts](dialog.md#markdown-header-private-setupkeyboardshortcuts)
* [toggle](dialog.md#markdown-header-toggle)

## Constructors

###  constructor

\+ **new Dialog**(`args`: [DialogArgs](../interfaces/dialogargs.md)): *[Dialog](dialog.md)*

Defined in dialog.ts:35

**Parameters:**

Name | Type |
------ | ------ |
`args` | [DialogArgs](../interfaces/dialogargs.md) |

**Returns:** *[Dialog](dialog.md)*

## Properties

### `Private` body

• **body**: *HTMLElement*

Defined in dialog.ts:31

___

### `Private` container

• **container**: *HTMLElement*

Defined in dialog.ts:29

___

### `Private` `Optional` keyUp

• **keyUp**? : *undefined | function*

Defined in dialog.ts:34

___

### `Private` `Optional` onClose

• **onClose**? : *undefined | function*

Defined in dialog.ts:33

___

### `Private` opened

• **opened**: *boolean*

Defined in dialog.ts:35

___

### `Private` `Optional` overlay

• **overlay**? : *HTMLElement*

Defined in dialog.ts:32

___

### `Private` title

• **title**: *HTMLElement*

Defined in dialog.ts:30

## Methods

### `Private` addKeyboardShortcuts

▸ **addKeyboardShortcuts**(): *void*

Defined in dialog.ts:138

**Returns:** *void*

___

###  close

▸ **close**(): *void*

Defined in dialog.ts:170

Remove the dialog from the page.

**Returns:** *void*

___

### `Private` createButtons

▸ **createButtons**(): *HTMLDivElement*

Defined in dialog.ts:102

**Returns:** *HTMLDivElement*

___

### `Private` createContainer

▸ **createContainer**(`args`: [DialogArgs](../interfaces/dialogargs.md)): *object*

Defined in dialog.ts:54

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

Defined in dialog.ts:97

**Returns:** *HTMLHRElement*

___

### `Private` createOverlay

▸ **createOverlay**(): *HTMLDivElement*

Defined in dialog.ts:118

**Returns:** *HTMLDivElement*

___

###  isOpened

▸ **isOpened**(): *boolean*

Defined in dialog.ts:195

Check if the dialog is opened or not.

**Returns:** *boolean*

___

###  open

▸ **open**(): *void*

Defined in dialog.ts:153

Add the dialog to the page.

**Returns:** *void*

___

### `Private` removeKeyboardShortcuts

▸ **removeKeyboardShortcuts**(): *void*

Defined in dialog.ts:144

**Returns:** *void*

___

###  setBody

▸ **setBody**(`body`: string): *void*

Defined in dialog.ts:220

Change the body of the dialog.

**Parameters:**

Name | Type |
------ | ------ |
`body` | string |

**Returns:** *void*

___

###  setTitle

▸ **setTitle**(`title`: string): *void*

Defined in dialog.ts:213

Change the title of the dialog.

**Parameters:**

Name | Type |
------ | ------ |
`title` | string |

**Returns:** *void*

___

### `Private` setupKeyboardShortcuts

▸ **setupKeyboardShortcuts**(): *keyUp*

Defined in dialog.ts:125

**Returns:** *keyUp*

___

###  toggle

▸ **toggle**(): *void*

Defined in dialog.ts:202

Toggle between the open/close state.

**Returns:** *void*