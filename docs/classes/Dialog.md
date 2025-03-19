[**Utilities**](../README.md)

***

[Utilities](../README.md) / Dialog

# Class: Dialog

Defined in: [dialog/dialog.ts:41](https://github.com/noobiept/utilities/blob/786efe35015e1a6c21914057e8b0d5fc10429d8e/source/dialog/dialog.ts#L41)

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

## Constructors

### new Dialog()

> **new Dialog**(`args`): `Dialog`

Defined in: [dialog/dialog.ts:51](https://github.com/noobiept/utilities/blob/786efe35015e1a6c21914057e8b0d5fc10429d8e/source/dialog/dialog.ts#L51)

#### Parameters

##### args

[`DialogArgs`](../interfaces/DialogArgs.md)

#### Returns

`Dialog`

## Properties

### body

> `readonly` **body**: `HTMLElement`

Defined in: [dialog/dialog.ts:44](https://github.com/noobiept/utilities/blob/786efe35015e1a6c21914057e8b0d5fc10429d8e/source/dialog/dialog.ts#L44)

***

### buttons?

> `readonly` `optional` **buttons**: `HTMLElement`

Defined in: [dialog/dialog.ts:45](https://github.com/noobiept/utilities/blob/786efe35015e1a6c21914057e8b0d5fc10429d8e/source/dialog/dialog.ts#L45)

***

### container

> `readonly` **container**: `HTMLElement`

Defined in: [dialog/dialog.ts:42](https://github.com/noobiept/utilities/blob/786efe35015e1a6c21914057e8b0d5fc10429d8e/source/dialog/dialog.ts#L42)

***

### title

> `readonly` **title**: `HTMLElement`

Defined in: [dialog/dialog.ts:43](https://github.com/noobiept/utilities/blob/786efe35015e1a6c21914057e8b0d5fc10429d8e/source/dialog/dialog.ts#L43)

## Methods

### close()

> **close**(): `void`

Defined in: [dialog/dialog.ts:209](https://github.com/noobiept/utilities/blob/786efe35015e1a6c21914057e8b0d5fc10429d8e/source/dialog/dialog.ts#L209)

Remove the dialog from the page.

#### Returns

`void`

***

### isOpened()

> **isOpened**(): `boolean`

Defined in: [dialog/dialog.ts:234](https://github.com/noobiept/utilities/blob/786efe35015e1a6c21914057e8b0d5fc10429d8e/source/dialog/dialog.ts#L234)

Check if the dialog is opened or not.

#### Returns

`boolean`

***

### open()

> **open**(): `void`

Defined in: [dialog/dialog.ts:192](https://github.com/noobiept/utilities/blob/786efe35015e1a6c21914057e8b0d5fc10429d8e/source/dialog/dialog.ts#L192)

Add the dialog to the page.

#### Returns

`void`

***

### setBody()

> **setBody**(`content`): `void`

Defined in: [dialog/dialog.ts:264](https://github.com/noobiept/utilities/blob/786efe35015e1a6c21914057e8b0d5fc10429d8e/source/dialog/dialog.ts#L264)

Change the body of the dialog.

#### Parameters

##### content

`string` | `HTMLElement`

#### Returns

`void`

***

### setTitle()

> **setTitle**(`content`): `void`

Defined in: [dialog/dialog.ts:252](https://github.com/noobiept/utilities/blob/786efe35015e1a6c21914057e8b0d5fc10429d8e/source/dialog/dialog.ts#L252)

Change the title of the dialog.

#### Parameters

##### content

`string` | `HTMLElement`

#### Returns

`void`

***

### toggle()

> **toggle**(): `void`

Defined in: [dialog/dialog.ts:241](https://github.com/noobiept/utilities/blob/786efe35015e1a6c21914057e8b0d5fc10429d8e/source/dialog/dialog.ts#L241)

Toggle between the open/close state.

#### Returns

`void`
