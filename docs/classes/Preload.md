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

## Hierarchy

- [`EventDispatcher`](EventDispatcher.md)<[`PreloadEvent`](../README.md#preloadevent)\>

  ↳ **`Preload`**

## Table of contents

### Constructors

- [constructor](Preload.md#constructor)

### Properties

- [\_data](Preload.md#_data)
- [\_failed\_ids](Preload.md#_failed_ids)
- [\_loaded\_ids](Preload.md#_loaded_ids)
- [\_loaded\_items](Preload.md#_loaded_items)
- [\_save\_global](Preload.md#_save_global)
- [\_total\_items](Preload.md#_total_items)

### Methods

- [\_failed\_to\_load](Preload.md#_failed_to_load)
- [\_loaded](Preload.md#_loaded)
- [\_loading\_complete](Preload.md#_loading_complete)
- [\_on\_abort](Preload.md#_on_abort)
- [\_on\_error](Preload.md#_on_error)
- [\_on\_progress](Preload.md#_on_progress)
- [addEventListener](Preload.md#addeventlistener)
- [dispatchEvent](Preload.md#dispatchevent)
- [get](Preload.md#get)
- [hasListeners](Preload.md#haslisteners)
- [load](Preload.md#load)
- [loadAudio](Preload.md#loadaudio)
- [loadImage](Preload.md#loadimage)
- [loadJson](Preload.md#loadjson)
- [loadManifest](Preload.md#loadmanifest)
- [removeAllEventListeners](Preload.md#removealleventlisteners)
- [removeEventListener](Preload.md#removeeventlistener)
- [get](Preload.md#get-1)

## Constructors

### constructor

• **new Preload**(`args?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`PreloadArgs`](../interfaces/PreloadArgs.md) |

#### Overrides

[EventDispatcher](EventDispatcher.md).[constructor](EventDispatcher.md#constructor)

#### Defined in

[preload.ts:120](https://github.com/noobiept/utilities/blob/66bf665/source/preload.ts#L120)

## Properties

### \_data

• `Private` **\_data**: [`PreloadData`](../README.md#preloaddata)

#### Defined in

[preload.ts:104](https://github.com/noobiept/utilities/blob/66bf665/source/preload.ts#L104)

___

### \_failed\_ids

• `Private` **\_failed\_ids**: `string`[]

#### Defined in

[preload.ts:107](https://github.com/noobiept/utilities/blob/66bf665/source/preload.ts#L107)

___

### \_loaded\_ids

• `Private` **\_loaded\_ids**: `string`[]

#### Defined in

[preload.ts:108](https://github.com/noobiept/utilities/blob/66bf665/source/preload.ts#L108)

___

### \_loaded\_items

• `Private` **\_loaded\_items**: `number`

#### Defined in

[preload.ts:106](https://github.com/noobiept/utilities/blob/66bf665/source/preload.ts#L106)

___

### \_save\_global

• `Private` **\_save\_global**: `boolean`

#### Defined in

[preload.ts:103](https://github.com/noobiept/utilities/blob/66bf665/source/preload.ts#L103)

___

### \_total\_items

• `Private` **\_total\_items**: `number`

#### Defined in

[preload.ts:105](https://github.com/noobiept/utilities/blob/66bf665/source/preload.ts#L105)

## Methods

### \_failed\_to\_load

▸ `Private` **_failed_to_load**(`id`): `void`

An element failed to load. We'll keep track of its id, to send it later on the 'complete' event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`void`

#### Defined in

[preload.ts:159](https://github.com/noobiept/utilities/blob/66bf665/source/preload.ts#L159)

___

### \_loaded

▸ `Private` **_loaded**(`id`, `data`): `void`

An element just finished being loaded, add it to the `data` object (either the global or the object) and dispatch the relevant events.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The id of the loaded element. |
| `data` | `any` | Its data. |

#### Returns

`void`

#### Defined in

[preload.ts:139](https://github.com/noobiept/utilities/blob/66bf665/source/preload.ts#L139)

___

### \_loading\_complete

▸ `Private` **_loading_complete**(): `void`

All the elements were dealt with. Dispatch the `complete` event with a list of the loaded ids, and another list with the ids that failed to load as well.

#### Returns

`void`

#### Defined in

[preload.ts:171](https://github.com/noobiept/utilities/blob/66bf665/source/preload.ts#L171)

___

### \_on\_abort

▸ `Private` **_on_abort**(`event`, `id`): `void`

Dispatch the `abort` event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `ProgressEvent`<`EventTarget`\> | The event to dispatch. |
| `id` | `string` | The id of the element. |

#### Returns

`void`

#### Defined in

[preload.ts:200](https://github.com/noobiept/utilities/blob/66bf665/source/preload.ts#L200)

___

### \_on\_error

▸ `Private` **_on_error**(`event`, `id`): `void`

Dispatch the `error` event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `ProgressEvent`<`EventTarget`\> | The event to dispatch. |
| `id` | `string` | The id of the element. |

#### Returns

`void`

#### Defined in

[preload.ts:190](https://github.com/noobiept/utilities/blob/66bf665/source/preload.ts#L190)

___

### \_on\_progress

▸ `Private` **_on_progress**(`event`): `void`

Dispatch the current progress percentage.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `ProgressEvent`<`EventTarget`\> | The event that was triggered. |

#### Returns

`void`

#### Defined in

[preload.ts:209](https://github.com/noobiept/utilities/blob/66bf665/source/preload.ts#L209)

___

### addEventListener

▸ **addEventListener**(`type`, `listener`): `boolean`

'listener' will receive a 'data' argument when its called.
What 'data' is, depends on the event type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | [`PreloadEvent`](../README.md#preloadevent) | Type of the event. |
| `listener` | (`data`: `any`) => `void` | A function to be called when the event is dispatched. |

#### Returns

`boolean`

If it was successfully added.

#### Inherited from

[EventDispatcher](EventDispatcher.md).[addEventListener](EventDispatcher.md#addeventlistener)

#### Defined in

[event_dispatcher.ts:36](https://github.com/noobiept/utilities/blob/66bf665/source/event_dispatcher.ts#L36)

___

### dispatchEvent

▸ **dispatchEvent**(`type`, `data?`): `void`

Dispatches an event, which will trigger the listeners of that event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | [`PreloadEvent`](../README.md#preloadevent) | Type of the event to dispatch. |
| `data?` | `any` | Data to be sent to every listener. |

#### Returns

`void`

#### Inherited from

[EventDispatcher](EventDispatcher.md).[dispatchEvent](EventDispatcher.md#dispatchevent)

#### Defined in

[event_dispatcher.ts:89](https://github.com/noobiept/utilities/blob/66bf665/source/event_dispatcher.ts#L89)

___

### get

▸ **get**(`id`): `any`

Get a previously loaded file.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`any`

#### Defined in

[preload.ts:318](https://github.com/noobiept/utilities/blob/66bf665/source/preload.ts#L318)

___

### hasListeners

▸ **hasListeners**(`type`): `boolean`

Check if there are listeners to a particular event type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | [`PreloadEvent`](../README.md#preloadevent) | The event type to check. |

#### Returns

`boolean`

If there are listeners or not.

#### Inherited from

[EventDispatcher](EventDispatcher.md).[hasListeners](EventDispatcher.md#haslisteners)

#### Defined in

[event_dispatcher.ts:105](https://github.com/noobiept/utilities/blob/66bf665/source/event_dispatcher.ts#L105)

___

### load

▸ **load**(`id`, `path`, `typeId?`): `void`

Load a file.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The id to be used later on to get the element. |
| `path` | `string` | Path to the file. |
| `typeId?` | ``"json"`` \| ``"text"`` \| ``"image"`` \| ``"audio_ogg"`` \| ``"audio_mp3"`` | Type of the file to load. If not provided then it will try to determine the type from the file extension. |

#### Returns

`void`

#### Defined in

[preload.ts:230](https://github.com/noobiept/utilities/blob/66bf665/source/preload.ts#L230)

___

### loadAudio

▸ `Private` **loadAudio**(`response`, `blobType`, `onLoad`, `onError`): `void`

Load an audio resource.

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `any` |
| `blobType` | ``"audio/mpeg"`` \| ``"audio/ogg"`` |
| `onLoad` | (`audio`: `HTMLAudioElement`) => `void` |
| `onError` | () => `void` |

#### Returns

`void`

#### Defined in

[preload.ts:325](https://github.com/noobiept/utilities/blob/66bf665/source/preload.ts#L325)

___

### loadImage

▸ `Private` **loadImage**(`id`, `response`): `void`

Load an image resource.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `response` | `any` |

#### Returns

`void`

#### Defined in

[preload.ts:364](https://github.com/noobiept/utilities/blob/66bf665/source/preload.ts#L364)

___

### loadJson

▸ `Private` **loadJson**(`id`, `response`): `void`

Load a json resource.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `response` | `any` |

#### Returns

`void`

#### Defined in

[preload.ts:347](https://github.com/noobiept/utilities/blob/66bf665/source/preload.ts#L347)

___

### loadManifest

▸ **loadManifest**(`manifest`): `void`

Load several files.

#### Parameters

| Name | Type |
| :------ | :------ |
| `manifest` | [`ManifestData`](../README.md#manifestdata) |

#### Returns

`void`

#### Defined in

[preload.ts:309](https://github.com/noobiept/utilities/blob/66bf665/source/preload.ts#L309)

___

### removeAllEventListeners

▸ **removeAllEventListeners**(): `void`

Remove all the event listeners.

#### Returns

`void`

#### Inherited from

[EventDispatcher](EventDispatcher.md).[removeAllEventListeners](EventDispatcher.md#removealleventlisteners)

#### Defined in

[event_dispatcher.ts:79](https://github.com/noobiept/utilities/blob/66bf665/source/event_dispatcher.ts#L79)

___

### removeEventListener

▸ **removeEventListener**(`type`, `listener?`): `boolean`

Removes a specific listener of an event type, or all the listeners for that type (if 'listener' is not provided).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | [`PreloadEvent`](../README.md#preloadevent) | The event type. |
| `listener?` | (`data`: `any`) => `any` | The listener function to remove. If not provided then remove all the functions associated with the event type. |

#### Returns

`boolean`

If it was successfully removed.

#### Inherited from

[EventDispatcher](EventDispatcher.md).[removeEventListener](EventDispatcher.md#removeeventlistener)

#### Defined in

[event_dispatcher.ts:56](https://github.com/noobiept/utilities/blob/66bf665/source/event_dispatcher.ts#L56)

___

### get

▸ `Static` **get**(`id`): `any`

Get an element that was saved in the global `DATA` object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The id of the element we're retrieving. |

#### Returns

`any`

The preloaded element.

#### Defined in

[preload.ts:116](https://github.com/noobiept/utilities/blob/66bf665/source/preload.ts#L116)
