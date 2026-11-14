[**Utilities**](../README.md)

***

[Utilities](../README.md) / Dialog

# Class: Dialog

Defined in: [source/dialog/dialog.ts:79](https://github.com/noobiept/utilities/blob/b21d9fb0c9b704e42a1118c2425caf151c654ec9/source/dialog/dialog.ts#L79)

Create a dialog window with the given message.
Can be a modal (forces user interaction) or not.

Usage:

    const dialog = new Dialog({
        title: 'the title',
        body: 'the body'
    });
    dialog.open();

There's some basic styling available, that you can import in case there's no need for custom styling (may require to setup a css/style loader on your build configuration).

    import "@drk4/utilities/dialog.css";

## Constructors

### Constructor

> **new Dialog**(`args`): `Dialog`

Defined in: [source/dialog/dialog.ts:97](https://github.com/noobiept/utilities/blob/b21d9fb0c9b704e42a1118c2425caf151c654ec9/source/dialog/dialog.ts#L97)

#### Parameters

##### args

[`DialogArgs`](../interfaces/DialogArgs.md)

#### Returns

`Dialog`

## Properties

### body

> `readonly` **body**: `HTMLElement`

Defined in: [source/dialog/dialog.ts:82](https://github.com/noobiept/utilities/blob/b21d9fb0c9b704e42a1118c2425caf151c654ec9/source/dialog/dialog.ts#L82)

***

### buttons?

> `readonly` `optional` **buttons?**: `HTMLElement`

Defined in: [source/dialog/dialog.ts:83](https://github.com/noobiept/utilities/blob/b21d9fb0c9b704e42a1118c2425caf151c654ec9/source/dialog/dialog.ts#L83)

***

### container

> `readonly` **container**: `HTMLElement`

Defined in: [source/dialog/dialog.ts:80](https://github.com/noobiept/utilities/blob/b21d9fb0c9b704e42a1118c2425caf151c654ec9/source/dialog/dialog.ts#L80)

***

### title

> `readonly` **title**: `HTMLElement`

Defined in: [source/dialog/dialog.ts:81](https://github.com/noobiept/utilities/blob/b21d9fb0c9b704e42a1118c2425caf151c654ec9/source/dialog/dialog.ts#L81)

## Methods

### close()

> **close**(): `void`

Defined in: [source/dialog/dialog.ts:405](https://github.com/noobiept/utilities/blob/b21d9fb0c9b704e42a1118c2425caf151c654ec9/source/dialog/dialog.ts#L405)

Remove the dialog from the page.

#### Returns

`void`

***

### isOpened()

> **isOpened**(): `boolean`

Defined in: [source/dialog/dialog.ts:427](https://github.com/noobiept/utilities/blob/b21d9fb0c9b704e42a1118c2425caf151c654ec9/source/dialog/dialog.ts#L427)

Check if the dialog is opened or not.

#### Returns

`boolean`

***

### open()

> **open**(): `void`

Defined in: [source/dialog/dialog.ts:377](https://github.com/noobiept/utilities/blob/b21d9fb0c9b704e42a1118c2425caf151c654ec9/source/dialog/dialog.ts#L377)

Add the dialog to the page.

#### Returns

`void`

***

### setBody()

> **setBody**(`content`): `void`

Defined in: [source/dialog/dialog.ts:459](https://github.com/noobiept/utilities/blob/b21d9fb0c9b704e42a1118c2425caf151c654ec9/source/dialog/dialog.ts#L459)

Change the body of the dialog.
A string is set as plain text — pass an `HTMLElement` if you need HTML content.

#### Parameters

##### content

`string` \| `HTMLElement`

#### Returns

`void`

***

### setTitle()

> **setTitle**(`content`): `void`

Defined in: [source/dialog/dialog.ts:446](https://github.com/noobiept/utilities/blob/b21d9fb0c9b704e42a1118c2425caf151c654ec9/source/dialog/dialog.ts#L446)

Change the title of the dialog.
A string is set as plain text — pass an `HTMLElement` if you need HTML content.

#### Parameters

##### content

`string` \| `HTMLElement`

#### Returns

`void`

***

### toggle()

> **toggle**(): `void`

Defined in: [source/dialog/dialog.ts:434](https://github.com/noobiept/utilities/blob/b21d9fb0c9b704e42a1118c2425caf151c654ec9/source/dialog/dialog.ts#L434)

Toggle between the open/close state.

#### Returns

`void`
