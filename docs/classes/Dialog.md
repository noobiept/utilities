[**Utilities**](../README.md)

***

[Utilities](../README.md) / Dialog

# Class: Dialog

Defined in: [source/dialog/dialog.ts:55](https://github.com/noobiept/utilities/blob/ff405698d7b76a746376c90801225054c3881c9b/source/dialog/dialog.ts#L55)

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

Defined in: [source/dialog/dialog.ts:69](https://github.com/noobiept/utilities/blob/ff405698d7b76a746376c90801225054c3881c9b/source/dialog/dialog.ts#L69)

#### Parameters

##### args

[`DialogArgs`](../interfaces/DialogArgs.md)

#### Returns

`Dialog`

## Properties

### body

> `readonly` **body**: `HTMLElement`

Defined in: [source/dialog/dialog.ts:58](https://github.com/noobiept/utilities/blob/ff405698d7b76a746376c90801225054c3881c9b/source/dialog/dialog.ts#L58)

***

### buttons?

> `readonly` `optional` **buttons?**: `HTMLElement`

Defined in: [source/dialog/dialog.ts:59](https://github.com/noobiept/utilities/blob/ff405698d7b76a746376c90801225054c3881c9b/source/dialog/dialog.ts#L59)

***

### container

> `readonly` **container**: `HTMLElement`

Defined in: [source/dialog/dialog.ts:56](https://github.com/noobiept/utilities/blob/ff405698d7b76a746376c90801225054c3881c9b/source/dialog/dialog.ts#L56)

***

### title

> `readonly` **title**: `HTMLElement`

Defined in: [source/dialog/dialog.ts:57](https://github.com/noobiept/utilities/blob/ff405698d7b76a746376c90801225054c3881c9b/source/dialog/dialog.ts#L57)

## Methods

### close()

> **close**(): `void`

Defined in: [source/dialog/dialog.ts:265](https://github.com/noobiept/utilities/blob/ff405698d7b76a746376c90801225054c3881c9b/source/dialog/dialog.ts#L265)

Remove the dialog from the page.

#### Returns

`void`

***

### isOpened()

> **isOpened**(): `boolean`

Defined in: [source/dialog/dialog.ts:287](https://github.com/noobiept/utilities/blob/ff405698d7b76a746376c90801225054c3881c9b/source/dialog/dialog.ts#L287)

Check if the dialog is opened or not.

#### Returns

`boolean`

***

### open()

> **open**(): `void`

Defined in: [source/dialog/dialog.ts:248](https://github.com/noobiept/utilities/blob/ff405698d7b76a746376c90801225054c3881c9b/source/dialog/dialog.ts#L248)

Add the dialog to the page.

#### Returns

`void`

***

### setBody()

> **setBody**(`content`): `void`

Defined in: [source/dialog/dialog.ts:319](https://github.com/noobiept/utilities/blob/ff405698d7b76a746376c90801225054c3881c9b/source/dialog/dialog.ts#L319)

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

Defined in: [source/dialog/dialog.ts:306](https://github.com/noobiept/utilities/blob/ff405698d7b76a746376c90801225054c3881c9b/source/dialog/dialog.ts#L306)

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

Defined in: [source/dialog/dialog.ts:294](https://github.com/noobiept/utilities/blob/ff405698d7b76a746376c90801225054c3881c9b/source/dialog/dialog.ts#L294)

Toggle between the open/close state.

#### Returns

`void`
