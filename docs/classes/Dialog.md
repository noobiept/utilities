[Utilities](../README.md) / Dialog

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

## Table of contents

### Constructors

- [constructor](Dialog.md#constructor)

### Properties

- [body](Dialog.md#body)
- [buttons](Dialog.md#buttons)
- [container](Dialog.md#container)
- [keyUp](Dialog.md#keyup)
- [onClose](Dialog.md#onclose)
- [opened](Dialog.md#opened)
- [overlay](Dialog.md#overlay)
- [title](Dialog.md#title)

### Methods

- [addKeyboardShortcuts](Dialog.md#addkeyboardshortcuts)
- [close](Dialog.md#close)
- [createButtons](Dialog.md#createbuttons)
- [createButtonsList](Dialog.md#createbuttonslist)
- [createContainer](Dialog.md#createcontainer)
- [createHorizontalRule](Dialog.md#createhorizontalrule)
- [createOverlay](Dialog.md#createoverlay)
- [isOpened](Dialog.md#isopened)
- [open](Dialog.md#open)
- [removeKeyboardShortcuts](Dialog.md#removekeyboardshortcuts)
- [setBody](Dialog.md#setbody)
- [setTitle](Dialog.md#settitle)
- [setupKeyboardShortcuts](Dialog.md#setupkeyboardshortcuts)
- [toggle](Dialog.md#toggle)

## Constructors

### constructor

• **new Dialog**(`args`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`DialogArgs`](../interfaces/DialogArgs.md) |

#### Defined in

[dialog.ts:51](https://github.com/noobiept/utilities/blob/6610913/source/dialog.ts#L51)

## Properties

### body

• `Readonly` **body**: `HTMLElement`

#### Defined in

[dialog.ts:44](https://github.com/noobiept/utilities/blob/6610913/source/dialog.ts#L44)

___

### buttons

• `Optional` `Readonly` **buttons**: `HTMLElement`

#### Defined in

[dialog.ts:45](https://github.com/noobiept/utilities/blob/6610913/source/dialog.ts#L45)

___

### container

• `Readonly` **container**: `HTMLElement`

#### Defined in

[dialog.ts:42](https://github.com/noobiept/utilities/blob/6610913/source/dialog.ts#L42)

___

### keyUp

• `Private` `Optional` **keyUp**: (`event`: `KeyboardEvent`) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KeyboardEvent` |

##### Returns

`void`

#### Defined in

[dialog.ts:48](https://github.com/noobiept/utilities/blob/6610913/source/dialog.ts#L48)

___

### onClose

• `Private` `Optional` **onClose**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[dialog.ts:47](https://github.com/noobiept/utilities/blob/6610913/source/dialog.ts#L47)

___

### opened

• `Private` **opened**: `boolean`

#### Defined in

[dialog.ts:49](https://github.com/noobiept/utilities/blob/6610913/source/dialog.ts#L49)

___

### overlay

• `Private` `Optional` **overlay**: `HTMLElement`

#### Defined in

[dialog.ts:46](https://github.com/noobiept/utilities/blob/6610913/source/dialog.ts#L46)

___

### title

• `Readonly` **title**: `HTMLElement`

#### Defined in

[dialog.ts:43](https://github.com/noobiept/utilities/blob/6610913/source/dialog.ts#L43)

## Methods

### addKeyboardShortcuts

▸ `Private` **addKeyboardShortcuts**(): `void`

#### Returns

`void`

#### Defined in

[dialog.ts:177](https://github.com/noobiept/utilities/blob/6610913/source/dialog.ts#L177)

___

### close

▸ **close**(): `void`

Remove the dialog from the page.

#### Returns

`void`

#### Defined in

[dialog.ts:209](https://github.com/noobiept/utilities/blob/6610913/source/dialog.ts#L209)

___

### createButtons

▸ `Private` **createButtons**(`info`): `HTMLDivElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `info` | [`DialogButtons`](../enums/DialogButtons.md) \| `HTMLElement`[] |

#### Returns

`HTMLDivElement`

#### Defined in

[dialog.ts:130](https://github.com/noobiept/utilities/blob/6610913/source/dialog.ts#L130)

___

### createButtonsList

▸ `Private` **createButtonsList**(`container`, `buttonsArg?`): `undefined` \| `HTMLDivElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | `HTMLElement` |
| `buttonsArg?` | [`DialogButtonsArg`](../README.md#dialogbuttonsarg) |

#### Returns

`undefined` \| `HTMLDivElement`

#### Defined in

[dialog.ts:104](https://github.com/noobiept/utilities/blob/6610913/source/dialog.ts#L104)

___

### createContainer

▸ `Private` **createContainer**(`args`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`DialogArgs`](../interfaces/DialogArgs.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `body` | `HTMLDivElement` |
| `container` | `HTMLDivElement` |
| `title` | `HTMLDivElement` |

#### Defined in

[dialog.ts:72](https://github.com/noobiept/utilities/blob/6610913/source/dialog.ts#L72)

___

### createHorizontalRule

▸ `Private` **createHorizontalRule**(): `HTMLHRElement`

#### Returns

`HTMLHRElement`

#### Defined in

[dialog.ts:125](https://github.com/noobiept/utilities/blob/6610913/source/dialog.ts#L125)

___

### createOverlay

▸ `Private` **createOverlay**(`closeOnOverlay?`): `HTMLDivElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `closeOnOverlay?` | `boolean` |

#### Returns

`HTMLDivElement`

#### Defined in

[dialog.ts:151](https://github.com/noobiept/utilities/blob/6610913/source/dialog.ts#L151)

___

### isOpened

▸ **isOpened**(): `boolean`

Check if the dialog is opened or not.

#### Returns

`boolean`

#### Defined in

[dialog.ts:234](https://github.com/noobiept/utilities/blob/6610913/source/dialog.ts#L234)

___

### open

▸ **open**(): `void`

Add the dialog to the page.

#### Returns

`void`

#### Defined in

[dialog.ts:192](https://github.com/noobiept/utilities/blob/6610913/source/dialog.ts#L192)

___

### removeKeyboardShortcuts

▸ `Private` **removeKeyboardShortcuts**(): `void`

#### Returns

`void`

#### Defined in

[dialog.ts:183](https://github.com/noobiept/utilities/blob/6610913/source/dialog.ts#L183)

___

### setBody

▸ **setBody**(`content`): `void`

Change the body of the dialog.

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `string` \| `HTMLElement` |

#### Returns

`void`

#### Defined in

[dialog.ts:264](https://github.com/noobiept/utilities/blob/6610913/source/dialog.ts#L264)

___

### setTitle

▸ **setTitle**(`content`): `void`

Change the title of the dialog.

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `string` \| `HTMLElement` |

#### Returns

`void`

#### Defined in

[dialog.ts:252](https://github.com/noobiept/utilities/blob/6610913/source/dialog.ts#L252)

___

### setupKeyboardShortcuts

▸ `Private` **setupKeyboardShortcuts**(): (`event`: `KeyboardEvent`) => `void`

#### Returns

`fn`

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KeyboardEvent` |

##### Returns

`void`

#### Defined in

[dialog.ts:164](https://github.com/noobiept/utilities/blob/6610913/source/dialog.ts#L164)

___

### toggle

▸ **toggle**(): `void`

Toggle between the open/close state.

#### Returns

`void`

#### Defined in

[dialog.ts:241](https://github.com/noobiept/utilities/blob/6610913/source/dialog.ts#L241)
