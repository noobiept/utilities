[**Utilities**](../README.md) • **Docs**

***

[Utilities](../README.md) / Preload

# Class: Preload

Basic Usage:
    import { Preload } from '@drk4/utilities';

    const preload = new Preload();

    preload.addEventListener('complete', (loaded) => {
        console.log( loaded.loaded_ids );
        const image = preload.get( 'the_id' );
    });

    const manifest = [
            { id: 'the_id', path: 'path_to_file.png' },          // try to determine the type from the extension
            { id: 'other', path: 'other_path', type: 'json' }    // or just specify it directly
        ];
    preload.loadManifest( manifest );

Events:

- `complete` -- `listener( data: { failed_ids: string[]; loaded_ids: string[]; } );`
- `error` -- `listener( data: { id: string; event; } );`
- `abort` -- `listener( data: { id: string; event; } );`
- `progress` -- `listener( progress: number );`
- `fileload` -- `listener( data: { id: string; data: Object; } );`

## Extends

- [`EventDispatcher`](EventDispatcher.md)\<[`PreloadEvent`](../type-aliases/PreloadEvent.md)\>

## Constructors

### new Preload()

> **new Preload**(`args`): [`Preload`](Preload.md)

#### Parameters

• **args**: [`PreloadArgs`](../interfaces/PreloadArgs.md) = `{}`

#### Returns

[`Preload`](Preload.md)

#### Overrides

[`EventDispatcher`](EventDispatcher.md).[`constructor`](EventDispatcher.md#constructors)

#### Defined in

[preload/preload.ts:120](https://github.com/noobiept/utilities/blob/18352a8077ed8c48acd60199e66f10ece023322d/source/preload/preload.ts#L120)

## Methods

### addEventListener()

> **addEventListener**(`type`, `listener`): `boolean`

'listener' will receive a 'data' argument when its called.
What 'data' is, depends on the event type.

#### Parameters

• **type**: [`PreloadEvent`](../type-aliases/PreloadEvent.md)

Type of the event.

• **listener**

A function to be called when the event is dispatched.

#### Returns

`boolean`

If it was successfully added.

#### Inherited from

[`EventDispatcher`](EventDispatcher.md).[`addEventListener`](EventDispatcher.md#addeventlistener)

#### Defined in

[event\_dispatcher/event\_dispatcher.ts:36](https://github.com/noobiept/utilities/blob/18352a8077ed8c48acd60199e66f10ece023322d/source/event_dispatcher/event_dispatcher.ts#L36)

***

### dispatchEvent()

> **dispatchEvent**(`type`, `data`?): `void`

Dispatches an event, which will trigger the listeners of that event.

#### Parameters

• **type**: [`PreloadEvent`](../type-aliases/PreloadEvent.md)

Type of the event to dispatch.

• **data?**: `any`

Data to be sent to every listener.

#### Returns

`void`

#### Inherited from

[`EventDispatcher`](EventDispatcher.md).[`dispatchEvent`](EventDispatcher.md#dispatchevent)

#### Defined in

[event\_dispatcher/event\_dispatcher.ts:89](https://github.com/noobiept/utilities/blob/18352a8077ed8c48acd60199e66f10ece023322d/source/event_dispatcher/event_dispatcher.ts#L89)

***

### get()

> **get**(`id`): `any`

Get a previously loaded file.

#### Parameters

• **id**: `string`

#### Returns

`any`

#### Defined in

[preload/preload.ts:318](https://github.com/noobiept/utilities/blob/18352a8077ed8c48acd60199e66f10ece023322d/source/preload/preload.ts#L318)

***

### hasListeners()

> **hasListeners**(`type`): `boolean`

Check if there are listeners to a particular event type.

#### Parameters

• **type**: [`PreloadEvent`](../type-aliases/PreloadEvent.md)

The event type to check.

#### Returns

`boolean`

If there are listeners or not.

#### Inherited from

[`EventDispatcher`](EventDispatcher.md).[`hasListeners`](EventDispatcher.md#haslisteners)

#### Defined in

[event\_dispatcher/event\_dispatcher.ts:105](https://github.com/noobiept/utilities/blob/18352a8077ed8c48acd60199e66f10ece023322d/source/event_dispatcher/event_dispatcher.ts#L105)

***

### load()

> **load**(`id`, `path`, `typeId`?): `void`

Load a file.

#### Parameters

• **id**: `string`

The id to be used later on to get the element.

• **path**: `string`

Path to the file.

• **typeId?**: `"image"` \| `"text"` \| `"json"` \| `"audio_ogg"` \| `"audio_mp3"`

Type of the file to load. If not provided then it will try to determine the type from the file extension.

#### Returns

`void`

#### Defined in

[preload/preload.ts:230](https://github.com/noobiept/utilities/blob/18352a8077ed8c48acd60199e66f10ece023322d/source/preload/preload.ts#L230)

***

### loadManifest()

> **loadManifest**(`manifest`): `void`

Load several files.

#### Parameters

• **manifest**: [`ManifestData`](../type-aliases/ManifestData.md)

#### Returns

`void`

#### Defined in

[preload/preload.ts:309](https://github.com/noobiept/utilities/blob/18352a8077ed8c48acd60199e66f10ece023322d/source/preload/preload.ts#L309)

***

### removeAllEventListeners()

> **removeAllEventListeners**(): `void`

Remove all the event listeners.

#### Returns

`void`

#### Inherited from

[`EventDispatcher`](EventDispatcher.md).[`removeAllEventListeners`](EventDispatcher.md#removealleventlisteners)

#### Defined in

[event\_dispatcher/event\_dispatcher.ts:79](https://github.com/noobiept/utilities/blob/18352a8077ed8c48acd60199e66f10ece023322d/source/event_dispatcher/event_dispatcher.ts#L79)

***

### removeEventListener()

> **removeEventListener**(`type`, `listener`?): `boolean`

Removes a specific listener of an event type, or all the listeners for that type (if 'listener' is not provided).

#### Parameters

• **type**: [`PreloadEvent`](../type-aliases/PreloadEvent.md)

The event type.

• **listener?**

The listener function to remove. If not provided then remove all the functions associated with the event type.

#### Returns

`boolean`

If it was successfully removed.

#### Inherited from

[`EventDispatcher`](EventDispatcher.md).[`removeEventListener`](EventDispatcher.md#removeeventlistener)

#### Defined in

[event\_dispatcher/event\_dispatcher.ts:56](https://github.com/noobiept/utilities/blob/18352a8077ed8c48acd60199e66f10ece023322d/source/event_dispatcher/event_dispatcher.ts#L56)

***

### get()

> `static` **get**(`id`): `any`

Get an element that was saved in the global `DATA` object.

#### Parameters

• **id**: `string`

The id of the element we're retrieving.

#### Returns

`any`

The preloaded element.

#### Defined in

[preload/preload.ts:116](https://github.com/noobiept/utilities/blob/18352a8077ed8c48acd60199e66f10ece023322d/source/preload/preload.ts#L116)
