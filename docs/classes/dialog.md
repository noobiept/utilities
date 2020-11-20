**[Utilities](../README.md)**

> [Globals](../README.md) / Dialog

# Class: Dialog

Create a dialog window with the given message.
Can be a modal (forces user interaction) or not.

Usage:

    const dialog = new Dialog({
        title: 'the title',
        body: 'the body'
    });
    dialog.open();

There's some basic styling available, that you can import in case there's no need for custom styling (may require to setup a css/style loader on your build configuration).

    import "@drk4/utilities/build/dialog.css";

## Hierarchy

* **Dialog**

## Index

### Constructors

* [constructor](dialog.md#constructor)

### Properties

* [body](dialog.md#body)
* [buttons](dialog.md#buttons)
* [container](dialog.md#container)
* [keyUp](dialog.md#keyup)
* [onClose](dialog.md#onclose)
* [opened](dialog.md#opened)
* [overlay](dialog.md#overlay)
* [title](dialog.md#title)

### Methods

* [addKeyboardShortcuts](dialog.md#addkeyboardshortcuts)
* [close](dialog.md#close)
* [createButtons](dialog.md#createbuttons)
* [createButtonsList](dialog.md#createbuttonslist)
* [createContainer](dialog.md#createcontainer)
* [createHorizontalRule](dialog.md#createhorizontalrule)
* [createOverlay](dialog.md#createoverlay)
* [isOpened](dialog.md#isopened)
* [open](dialog.md#open)
* [removeKeyboardShortcuts](dialog.md#removekeyboardshortcuts)
* [setBody](dialog.md#setbody)
* [setTitle](dialog.md#settitle)
* [setupKeyboardShortcuts](dialog.md#setupkeyboardshortcuts)
* [toggle](dialog.md#toggle)

## Constructors

### constructor

\+ **new Dialog**(`args`: [DialogArgs](../interfaces/dialogargs.md)): [Dialog](dialog.md)

*Defined in [dialog.ts:49](https://github.com/noobiept/utilities/blob/22280e5/source/dialog.ts#L49)*

#### Parameters:

Name | Type |
------ | ------ |
`args` | [DialogArgs](../interfaces/dialogargs.md) |

**Returns:** [Dialog](dialog.md)

## Properties

### body

• `Readonly` **body**: HTMLElement

*Defined in [dialog.ts:44](https://github.com/noobiept/utilities/blob/22280e5/source/dialog.ts#L44)*

___

### buttons

• `Optional` `Readonly` **buttons**: HTMLElement

*Defined in [dialog.ts:45](https://github.com/noobiept/utilities/blob/22280e5/source/dialog.ts#L45)*

___

### container

• `Readonly` **container**: HTMLElement

*Defined in [dialog.ts:42](https://github.com/noobiept/utilities/blob/22280e5/source/dialog.ts#L42)*

___

### keyUp

• `Private` `Optional` **keyUp**: undefined \| (event: KeyboardEvent) => void

*Defined in [dialog.ts:48](https://github.com/noobiept/utilities/blob/22280e5/source/dialog.ts#L48)*

___

### onClose

• `Private` `Optional` **onClose**: undefined \| () => void

*Defined in [dialog.ts:47](https://github.com/noobiept/utilities/blob/22280e5/source/dialog.ts#L47)*

___

### opened

• `Private` **opened**: boolean

*Defined in [dialog.ts:49](https://github.com/noobiept/utilities/blob/22280e5/source/dialog.ts#L49)*

___

### overlay

• `Private` `Optional` **overlay**: HTMLElement

*Defined in [dialog.ts:46](https://github.com/noobiept/utilities/blob/22280e5/source/dialog.ts#L46)*

___

### title

• `Readonly` **title**: HTMLElement

*Defined in [dialog.ts:43](https://github.com/noobiept/utilities/blob/22280e5/source/dialog.ts#L43)*

## Methods

### addKeyboardShortcuts

▸ `Private`**addKeyboardShortcuts**(): void

*Defined in [dialog.ts:177](https://github.com/noobiept/utilities/blob/22280e5/source/dialog.ts#L177)*

**Returns:** void

___

### close

▸ **close**(): void

*Defined in [dialog.ts:209](https://github.com/noobiept/utilities/blob/22280e5/source/dialog.ts#L209)*

Remove the dialog from the page.

**Returns:** void

___

### createButtons

▸ `Private`**createButtons**(`info`: [DialogButtons](../enums/dialogbuttons.md) \| HTMLElement[]): HTMLDivElement

*Defined in [dialog.ts:130](https://github.com/noobiept/utilities/blob/22280e5/source/dialog.ts#L130)*

#### Parameters:

Name | Type |
------ | ------ |
`info` | [DialogButtons](../enums/dialogbuttons.md) \| HTMLElement[] |

**Returns:** HTMLDivElement

___

### createButtonsList

▸ `Private`**createButtonsList**(`container`: HTMLElement, `buttonsArg?`: [DialogButtonsArg](../README.md#dialogbuttonsarg)): undefined \| HTMLDivElement

*Defined in [dialog.ts:104](https://github.com/noobiept/utilities/blob/22280e5/source/dialog.ts#L104)*

#### Parameters:

Name | Type |
------ | ------ |
`container` | HTMLElement |
`buttonsArg?` | [DialogButtonsArg](../README.md#dialogbuttonsarg) |

**Returns:** undefined \| HTMLDivElement

___

### createContainer

▸ `Private`**createContainer**(`args`: [DialogArgs](../interfaces/dialogargs.md)): object

*Defined in [dialog.ts:72](https://github.com/noobiept/utilities/blob/22280e5/source/dialog.ts#L72)*

#### Parameters:

Name | Type |
------ | ------ |
`args` | [DialogArgs](../interfaces/dialogargs.md) |

**Returns:** object

Name | Type |
------ | ------ |
`body` | HTMLDivElement |
`container` | HTMLDivElement |
`title` | HTMLDivElement |

___

### createHorizontalRule

▸ `Private`**createHorizontalRule**(): HTMLHRElement

*Defined in [dialog.ts:125](https://github.com/noobiept/utilities/blob/22280e5/source/dialog.ts#L125)*

**Returns:** HTMLHRElement

___

### createOverlay

▸ `Private`**createOverlay**(`closeOnOverlay?`: undefined \| false \| true): HTMLDivElement

*Defined in [dialog.ts:151](https://github.com/noobiept/utilities/blob/22280e5/source/dialog.ts#L151)*

#### Parameters:

Name | Type |
------ | ------ |
`closeOnOverlay?` | undefined \| false \| true |

**Returns:** HTMLDivElement

___

### isOpened

▸ **isOpened**(): boolean

*Defined in [dialog.ts:234](https://github.com/noobiept/utilities/blob/22280e5/source/dialog.ts#L234)*

Check if the dialog is opened or not.

**Returns:** boolean

___

### open

▸ **open**(): void

*Defined in [dialog.ts:192](https://github.com/noobiept/utilities/blob/22280e5/source/dialog.ts#L192)*

Add the dialog to the page.

**Returns:** void

___

### removeKeyboardShortcuts

▸ `Private`**removeKeyboardShortcuts**(): void

*Defined in [dialog.ts:183](https://github.com/noobiept/utilities/blob/22280e5/source/dialog.ts#L183)*

**Returns:** void

___

### setBody

▸ **setBody**(`content`: string \| HTMLElement): void

*Defined in [dialog.ts:264](https://github.com/noobiept/utilities/blob/22280e5/source/dialog.ts#L264)*

Change the body of the dialog.

#### Parameters:

Name | Type |
------ | ------ |
`content` | string \| HTMLElement |

**Returns:** void

___

### setTitle

▸ **setTitle**(`content`: string \| HTMLElement): void

*Defined in [dialog.ts:252](https://github.com/noobiept/utilities/blob/22280e5/source/dialog.ts#L252)*

Change the title of the dialog.

#### Parameters:

Name | Type |
------ | ------ |
`content` | string \| HTMLElement |

**Returns:** void

___

### setupKeyboardShortcuts

▸ `Private`**setupKeyboardShortcuts**(): keyUp

*Defined in [dialog.ts:164](https://github.com/noobiept/utilities/blob/22280e5/source/dialog.ts#L164)*

**Returns:** keyUp

___

### toggle

▸ **toggle**(): void

*Defined in [dialog.ts:241](https://github.com/noobiept/utilities/blob/22280e5/source/dialog.ts#L241)*

Toggle between the open/close state.

**Returns:** void
