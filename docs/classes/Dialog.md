[**Utilities**](../README.md)

***

[Utilities](../README.md) / Dialog

# Class: Dialog

Defined in: [source/dialog/dialog.ts:67](https://github.com/noobiept/utilities/blob/8c20054bf1ac298a403aef316daa5a4edd492c22/source/dialog/dialog.ts#L67)

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

Defined in: [source/dialog/dialog.ts:85](https://github.com/noobiept/utilities/blob/8c20054bf1ac298a403aef316daa5a4edd492c22/source/dialog/dialog.ts#L85)

#### Parameters

##### args

[`DialogArgs`](../interfaces/DialogArgs.md)

#### Returns

`Dialog`

## Properties

### body

> `readonly` **body**: `HTMLElement`

Defined in: [source/dialog/dialog.ts:70](https://github.com/noobiept/utilities/blob/8c20054bf1ac298a403aef316daa5a4edd492c22/source/dialog/dialog.ts#L70)

***

### buttons?

> `readonly` `optional` **buttons?**: `HTMLElement`

Defined in: [source/dialog/dialog.ts:71](https://github.com/noobiept/utilities/blob/8c20054bf1ac298a403aef316daa5a4edd492c22/source/dialog/dialog.ts#L71)

***

### container

> `readonly` **container**: `HTMLElement`

Defined in: [source/dialog/dialog.ts:68](https://github.com/noobiept/utilities/blob/8c20054bf1ac298a403aef316daa5a4edd492c22/source/dialog/dialog.ts#L68)

***

### title

> `readonly` **title**: `HTMLElement`

Defined in: [source/dialog/dialog.ts:69](https://github.com/noobiept/utilities/blob/8c20054bf1ac298a403aef316daa5a4edd492c22/source/dialog/dialog.ts#L69)

## Methods

### close()

> **close**(): `void`

Defined in: [source/dialog/dialog.ts:372](https://github.com/noobiept/utilities/blob/8c20054bf1ac298a403aef316daa5a4edd492c22/source/dialog/dialog.ts#L372)

Remove the dialog from the page.

#### Returns

`void`

***

### isOpened()

> **isOpened**(): `boolean`

Defined in: [source/dialog/dialog.ts:394](https://github.com/noobiept/utilities/blob/8c20054bf1ac298a403aef316daa5a4edd492c22/source/dialog/dialog.ts#L394)

Check if the dialog is opened or not.

#### Returns

`boolean`

***

### open()

> **open**(): `void`

Defined in: [source/dialog/dialog.ts:355](https://github.com/noobiept/utilities/blob/8c20054bf1ac298a403aef316daa5a4edd492c22/source/dialog/dialog.ts#L355)

Add the dialog to the page.

#### Returns

`void`

***

### setBody()

> **setBody**(`content`): `void`

Defined in: [source/dialog/dialog.ts:426](https://github.com/noobiept/utilities/blob/8c20054bf1ac298a403aef316daa5a4edd492c22/source/dialog/dialog.ts#L426)

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

Defined in: [source/dialog/dialog.ts:413](https://github.com/noobiept/utilities/blob/8c20054bf1ac298a403aef316daa5a4edd492c22/source/dialog/dialog.ts#L413)

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

Defined in: [source/dialog/dialog.ts:401](https://github.com/noobiept/utilities/blob/8c20054bf1ac298a403aef316daa5a4edd492c22/source/dialog/dialog.ts#L401)

Toggle between the open/close state.

#### Returns

`void`
