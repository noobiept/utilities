[**Utilities**](../README.md) • **Docs**

***

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

## Constructors

### new Dialog()

> **new Dialog**(`args`): [`Dialog`](Dialog.md)

#### Parameters

• **args**: [`DialogArgs`](../interfaces/DialogArgs.md)

#### Returns

[`Dialog`](Dialog.md)

#### Defined in

[dialog/dialog.ts:51](https://github.com/noobiept/utilities/blob/1d2cee23362dcff5c0b5fdf27f21e257e8f3dc9e/source/dialog/dialog.ts#L51)

## Properties

### body

> `readonly` **body**: `HTMLElement`

#### Defined in

[dialog/dialog.ts:44](https://github.com/noobiept/utilities/blob/1d2cee23362dcff5c0b5fdf27f21e257e8f3dc9e/source/dialog/dialog.ts#L44)

***

### buttons?

> `readonly` `optional` **buttons**: `HTMLElement`

#### Defined in

[dialog/dialog.ts:45](https://github.com/noobiept/utilities/blob/1d2cee23362dcff5c0b5fdf27f21e257e8f3dc9e/source/dialog/dialog.ts#L45)

***

### container

> `readonly` **container**: `HTMLElement`

#### Defined in

[dialog/dialog.ts:42](https://github.com/noobiept/utilities/blob/1d2cee23362dcff5c0b5fdf27f21e257e8f3dc9e/source/dialog/dialog.ts#L42)

***

### title

> `readonly` **title**: `HTMLElement`

#### Defined in

[dialog/dialog.ts:43](https://github.com/noobiept/utilities/blob/1d2cee23362dcff5c0b5fdf27f21e257e8f3dc9e/source/dialog/dialog.ts#L43)

## Methods

### close()

> **close**(): `void`

Remove the dialog from the page.

#### Returns

`void`

#### Defined in

[dialog/dialog.ts:209](https://github.com/noobiept/utilities/blob/1d2cee23362dcff5c0b5fdf27f21e257e8f3dc9e/source/dialog/dialog.ts#L209)

***

### isOpened()

> **isOpened**(): `boolean`

Check if the dialog is opened or not.

#### Returns

`boolean`

#### Defined in

[dialog/dialog.ts:234](https://github.com/noobiept/utilities/blob/1d2cee23362dcff5c0b5fdf27f21e257e8f3dc9e/source/dialog/dialog.ts#L234)

***

### open()

> **open**(): `void`

Add the dialog to the page.

#### Returns

`void`

#### Defined in

[dialog/dialog.ts:192](https://github.com/noobiept/utilities/blob/1d2cee23362dcff5c0b5fdf27f21e257e8f3dc9e/source/dialog/dialog.ts#L192)

***

### setBody()

> **setBody**(`content`): `void`

Change the body of the dialog.

#### Parameters

• **content**: `string` \| `HTMLElement`

#### Returns

`void`

#### Defined in

[dialog/dialog.ts:264](https://github.com/noobiept/utilities/blob/1d2cee23362dcff5c0b5fdf27f21e257e8f3dc9e/source/dialog/dialog.ts#L264)

***

### setTitle()

> **setTitle**(`content`): `void`

Change the title of the dialog.

#### Parameters

• **content**: `string` \| `HTMLElement`

#### Returns

`void`

#### Defined in

[dialog/dialog.ts:252](https://github.com/noobiept/utilities/blob/1d2cee23362dcff5c0b5fdf27f21e257e8f3dc9e/source/dialog/dialog.ts#L252)

***

### toggle()

> **toggle**(): `void`

Toggle between the open/close state.

#### Returns

`void`

#### Defined in

[dialog/dialog.ts:241](https://github.com/noobiept/utilities/blob/1d2cee23362dcff5c0b5fdf27f21e257e8f3dc9e/source/dialog/dialog.ts#L241)
