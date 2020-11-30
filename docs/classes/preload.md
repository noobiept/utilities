**[Utilities](../README.md)**

> [Globals](../README.md) / Preload

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

* [EventDispatcher](eventdispatcher.md)\<[PreloadEvent](../README.md#preloadevent)>

  ↳ **Preload**

## Index

### Constructors

* [constructor](preload.md#constructor)

### Properties

* [\_data](preload.md#_data)
* [\_failed\_ids](preload.md#_failed_ids)
* [\_loaded\_ids](preload.md#_loaded_ids)
* [\_loaded\_items](preload.md#_loaded_items)
* [\_save\_global](preload.md#_save_global)
* [\_total\_items](preload.md#_total_items)

### Methods

* [\_failed\_to\_load](preload.md#_failed_to_load)
* [\_loaded](preload.md#_loaded)
* [\_loading\_complete](preload.md#_loading_complete)
* [\_on\_abort](preload.md#_on_abort)
* [\_on\_error](preload.md#_on_error)
* [\_on\_progress](preload.md#_on_progress)
* [addEventListener](preload.md#addeventlistener)
* [dispatchEvent](preload.md#dispatchevent)
* [get](preload.md#get)
* [hasListeners](preload.md#haslisteners)
* [load](preload.md#load)
* [loadAudio](preload.md#loadaudio)
* [loadImage](preload.md#loadimage)
* [loadJson](preload.md#loadjson)
* [loadManifest](preload.md#loadmanifest)
* [removeAllEventListeners](preload.md#removealleventlisteners)
* [removeEventListener](preload.md#removeeventlistener)
* [get](preload.md#get)

## Constructors

### constructor

\+ **new Preload**(`args?`: [PreloadArgs](../interfaces/preloadargs.md)): [Preload](preload.md)

*Overrides [EventDispatcher](eventdispatcher.md).[constructor](eventdispatcher.md#constructor)*

*Defined in [preload.ts:118](https://github.com/noobiept/utilities/blob/4235ba9/source/preload.ts#L118)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`args` | [PreloadArgs](../interfaces/preloadargs.md) | {} |

**Returns:** [Preload](preload.md)

## Properties

### \_data

• `Private` **\_data**: [PreloadData](../README.md#preloaddata)

*Defined in [preload.ts:104](https://github.com/noobiept/utilities/blob/4235ba9/source/preload.ts#L104)*

___

### \_failed\_ids

• `Private` **\_failed\_ids**: string[]

*Defined in [preload.ts:107](https://github.com/noobiept/utilities/blob/4235ba9/source/preload.ts#L107)*

___

### \_loaded\_ids

• `Private` **\_loaded\_ids**: string[]

*Defined in [preload.ts:108](https://github.com/noobiept/utilities/blob/4235ba9/source/preload.ts#L108)*

___

### \_loaded\_items

• `Private` **\_loaded\_items**: number

*Defined in [preload.ts:106](https://github.com/noobiept/utilities/blob/4235ba9/source/preload.ts#L106)*

___

### \_save\_global

• `Private` **\_save\_global**: boolean

*Defined in [preload.ts:103](https://github.com/noobiept/utilities/blob/4235ba9/source/preload.ts#L103)*

___

### \_total\_items

• `Private` **\_total\_items**: number

*Defined in [preload.ts:105](https://github.com/noobiept/utilities/blob/4235ba9/source/preload.ts#L105)*

## Methods

### \_failed\_to\_load

▸ `Private`**_failed_to_load**(`id`: string): void

*Defined in [preload.ts:159](https://github.com/noobiept/utilities/blob/4235ba9/source/preload.ts#L159)*

An element failed to load. We'll keep track of its id, to send it later on the 'complete' event.

#### Parameters:

Name | Type |
------ | ------ |
`id` | string |

**Returns:** void

___

### \_loaded

▸ `Private`**_loaded**(`id`: string, `data`: any): void

*Defined in [preload.ts:139](https://github.com/noobiept/utilities/blob/4235ba9/source/preload.ts#L139)*

An element just finished being loaded, add it to the `data` object (either the global or the object) and dispatch the relevant events.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | string | The id of the loaded element. |
`data` | any | Its data.  |

**Returns:** void

___

### \_loading\_complete

▸ `Private`**_loading_complete**(): void

*Defined in [preload.ts:171](https://github.com/noobiept/utilities/blob/4235ba9/source/preload.ts#L171)*

All the elements were dealt with. Dispatch the `complete` event with a list of the loaded ids, and another list with the ids that failed to load as well.

**Returns:** void

___

### \_on\_abort

▸ `Private`**_on_abort**(`event`: ProgressEvent, `id`: string): void

*Defined in [preload.ts:200](https://github.com/noobiept/utilities/blob/4235ba9/source/preload.ts#L200)*

Dispatch the `abort` event.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`event` | ProgressEvent | The event to dispatch. |
`id` | string | The id of the element.  |

**Returns:** void

___

### \_on\_error

▸ `Private`**_on_error**(`event`: ProgressEvent, `id`: string): void

*Defined in [preload.ts:190](https://github.com/noobiept/utilities/blob/4235ba9/source/preload.ts#L190)*

Dispatch the `error` event.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`event` | ProgressEvent | The event to dispatch. |
`id` | string | The id of the element.  |

**Returns:** void

___

### \_on\_progress

▸ `Private`**_on_progress**(`event`: ProgressEvent): void

*Defined in [preload.ts:209](https://github.com/noobiept/utilities/blob/4235ba9/source/preload.ts#L209)*

Dispatch the current progress percentage.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`event` | ProgressEvent | The event that was triggered.  |

**Returns:** void

___

### addEventListener

▸ **addEventListener**(`type`: [PreloadEvent](../README.md#preloadevent), `listener`: (data: any) => void): boolean

*Inherited from [EventDispatcher](eventdispatcher.md).[addEventListener](eventdispatcher.md#addeventlistener)*

*Defined in [event_dispatcher.ts:36](https://github.com/noobiept/utilities/blob/4235ba9/source/event_dispatcher.ts#L36)*

'listener' will receive a 'data' argument when its called.
What 'data' is, depends on the event type.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`type` | [PreloadEvent](../README.md#preloadevent) | Type of the event. |
`listener` | (data: any) => void | A function to be called when the event is dispatched. |

**Returns:** boolean

If it was successfully added.

___

### dispatchEvent

▸ **dispatchEvent**(`type`: [PreloadEvent](../README.md#preloadevent), `data?`: any): void

*Inherited from [EventDispatcher](eventdispatcher.md).[dispatchEvent](eventdispatcher.md#dispatchevent)*

*Defined in [event_dispatcher.ts:89](https://github.com/noobiept/utilities/blob/4235ba9/source/event_dispatcher.ts#L89)*

Dispatches an event, which will trigger the listeners of that event.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`type` | [PreloadEvent](../README.md#preloadevent) | Type of the event to dispatch. |
`data?` | any | Data to be sent to every listener.  |

**Returns:** void

___

### get

▸ **get**(`id`: string): any

*Defined in [preload.ts:318](https://github.com/noobiept/utilities/blob/4235ba9/source/preload.ts#L318)*

Get a previously loaded file.

#### Parameters:

Name | Type |
------ | ------ |
`id` | string |

**Returns:** any

___

### hasListeners

▸ **hasListeners**(`type`: [PreloadEvent](../README.md#preloadevent)): boolean

*Inherited from [EventDispatcher](eventdispatcher.md).[hasListeners](eventdispatcher.md#haslisteners)*

*Defined in [event_dispatcher.ts:105](https://github.com/noobiept/utilities/blob/4235ba9/source/event_dispatcher.ts#L105)*

Check if there are listeners to a particular event type.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`type` | [PreloadEvent](../README.md#preloadevent) | The event type to check. |

**Returns:** boolean

If there are listeners or not.

___

### load

▸ **load**(`id`: string, `path`: string, `typeId?`: [FileInfoType](../README.md#fileinfotype)): void

*Defined in [preload.ts:230](https://github.com/noobiept/utilities/blob/4235ba9/source/preload.ts#L230)*

Load a file.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | string | The id to be used later on to get the element. |
`path` | string | Path to the file. |
`typeId?` | [FileInfoType](../README.md#fileinfotype) | Type of the file to load. If not provided then it will try to determine the type from the file extension.  |

**Returns:** void

___

### loadAudio

▸ `Private`**loadAudio**(`response`: any, `blobType`: \"audio/mpeg\" \| \"audio/ogg\", `onLoad`: (audio: HTMLAudioElement) => void, `onError`: () => void): void

*Defined in [preload.ts:325](https://github.com/noobiept/utilities/blob/4235ba9/source/preload.ts#L325)*

Load an audio resource.

#### Parameters:

Name | Type |
------ | ------ |
`response` | any |
`blobType` | \"audio/mpeg\" \| \"audio/ogg\" |
`onLoad` | (audio: HTMLAudioElement) => void |
`onError` | () => void |

**Returns:** void

___

### loadImage

▸ `Private`**loadImage**(`id`: string, `response`: any): void

*Defined in [preload.ts:364](https://github.com/noobiept/utilities/blob/4235ba9/source/preload.ts#L364)*

Load an image resource.

#### Parameters:

Name | Type |
------ | ------ |
`id` | string |
`response` | any |

**Returns:** void

___

### loadJson

▸ `Private`**loadJson**(`id`: string, `response`: any): void

*Defined in [preload.ts:347](https://github.com/noobiept/utilities/blob/4235ba9/source/preload.ts#L347)*

Load a json resource.

#### Parameters:

Name | Type |
------ | ------ |
`id` | string |
`response` | any |

**Returns:** void

___

### loadManifest

▸ **loadManifest**(`manifest`: [ManifestData](../README.md#manifestdata)): void

*Defined in [preload.ts:309](https://github.com/noobiept/utilities/blob/4235ba9/source/preload.ts#L309)*

Load several files.

#### Parameters:

Name | Type |
------ | ------ |
`manifest` | [ManifestData](../README.md#manifestdata) |

**Returns:** void

___

### removeAllEventListeners

▸ **removeAllEventListeners**(): void

*Inherited from [EventDispatcher](eventdispatcher.md).[removeAllEventListeners](eventdispatcher.md#removealleventlisteners)*

*Defined in [event_dispatcher.ts:79](https://github.com/noobiept/utilities/blob/4235ba9/source/event_dispatcher.ts#L79)*

Remove all the event listeners.

**Returns:** void

___

### removeEventListener

▸ **removeEventListener**(`type`: [PreloadEvent](../README.md#preloadevent), `listener?`: undefined \| (data: any) => any): boolean

*Inherited from [EventDispatcher](eventdispatcher.md).[removeEventListener](eventdispatcher.md#removeeventlistener)*

*Defined in [event_dispatcher.ts:56](https://github.com/noobiept/utilities/blob/4235ba9/source/event_dispatcher.ts#L56)*

Removes a specific listener of an event type, or all the listeners for that type (if 'listener' is not provided).

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`type` | [PreloadEvent](../README.md#preloadevent) | The event type. |
`listener?` | undefined \| (data: any) => any | The listener function to remove. If not provided then remove all the functions associated with the event type. |

**Returns:** boolean

If it was successfully removed.

___

### get

▸ `Static`**get**(`id`: string): any

*Defined in [preload.ts:116](https://github.com/noobiept/utilities/blob/4235ba9/source/preload.ts#L116)*

Get an element that was saved in the global `DATA` object.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | string | The id of the element we're retrieving. |

**Returns:** any

The preloaded element.
