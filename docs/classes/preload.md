[Utilities](../README.md) › [Preload](preload.md)

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

* [EventDispatcher](eventdispatcher.md)‹[PreloadEvent](../README.md#preloadevent)›

  ↳ **Preload**

## Index

### Constructors

* [constructor](preload.md#constructor)

### Properties

* [_data](preload.md#private-_data)
* [_failed_ids](preload.md#private-_failed_ids)
* [_loaded_ids](preload.md#private-_loaded_ids)
* [_loaded_items](preload.md#private-_loaded_items)
* [_save_global](preload.md#private-_save_global)
* [_total_items](preload.md#private-_total_items)

### Methods

* [_failed_to_load](preload.md#private-_failed_to_load)
* [_loaded](preload.md#private-_loaded)
* [_loading_complete](preload.md#private-_loading_complete)
* [_on_abort](preload.md#private-_on_abort)
* [_on_error](preload.md#private-_on_error)
* [_on_progress](preload.md#private-_on_progress)
* [addEventListener](preload.md#addeventlistener)
* [dispatchEvent](preload.md#dispatchevent)
* [get](preload.md#get)
* [hasListeners](preload.md#haslisteners)
* [load](preload.md#load)
* [loadAudio](preload.md#private-loadaudio)
* [loadImage](preload.md#private-loadimage)
* [loadJson](preload.md#private-loadjson)
* [loadManifest](preload.md#loadmanifest)
* [removeAllEventListeners](preload.md#removealleventlisteners)
* [removeEventListener](preload.md#removeeventlistener)
* [get](preload.md#static-get)

## Constructors

###  constructor

\+ **new Preload**(`args`: [PreloadArgs](../interfaces/preloadargs.md)): *[Preload](preload.md)*

*Overrides [EventDispatcher](eventdispatcher.md).[constructor](eventdispatcher.md#constructor)*

*Defined in [preload.ts:118](https://github.com/noobiept/utilities/blob/a95c65d/source/preload.ts#L118)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`args` | [PreloadArgs](../interfaces/preloadargs.md) | {} |

**Returns:** *[Preload](preload.md)*

## Properties

### `Private` _data

• **_data**: *[PreloadData](../README.md#preloaddata)*

*Defined in [preload.ts:104](https://github.com/noobiept/utilities/blob/a95c65d/source/preload.ts#L104)*

___

### `Private` _failed_ids

• **_failed_ids**: *string[]*

*Defined in [preload.ts:107](https://github.com/noobiept/utilities/blob/a95c65d/source/preload.ts#L107)*

___

### `Private` _loaded_ids

• **_loaded_ids**: *string[]*

*Defined in [preload.ts:108](https://github.com/noobiept/utilities/blob/a95c65d/source/preload.ts#L108)*

___

### `Private` _loaded_items

• **_loaded_items**: *number*

*Defined in [preload.ts:106](https://github.com/noobiept/utilities/blob/a95c65d/source/preload.ts#L106)*

___

### `Private` _save_global

• **_save_global**: *boolean*

*Defined in [preload.ts:103](https://github.com/noobiept/utilities/blob/a95c65d/source/preload.ts#L103)*

___

### `Private` _total_items

• **_total_items**: *number*

*Defined in [preload.ts:105](https://github.com/noobiept/utilities/blob/a95c65d/source/preload.ts#L105)*

## Methods

### `Private` _failed_to_load

▸ **_failed_to_load**(`id`: string): *void*

*Defined in [preload.ts:159](https://github.com/noobiept/utilities/blob/a95c65d/source/preload.ts#L159)*

An element failed to load. We'll keep track of its id, to send it later on the 'complete' event.

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

**Returns:** *void*

___

### `Private` _loaded

▸ **_loaded**(`id`: string, `data`: any): *void*

*Defined in [preload.ts:139](https://github.com/noobiept/utilities/blob/a95c65d/source/preload.ts#L139)*

An element just finished being loaded, add it to the `data` object (either the global or the object) and dispatch the relevant events.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | The id of the loaded element. |
`data` | any | Its data.  |

**Returns:** *void*

___

### `Private` _loading_complete

▸ **_loading_complete**(): *void*

*Defined in [preload.ts:171](https://github.com/noobiept/utilities/blob/a95c65d/source/preload.ts#L171)*

All the elements were dealt with. Dispatch the `complete` event with a list of the loaded ids, and another list with the ids that failed to load as well.

**Returns:** *void*

___

### `Private` _on_abort

▸ **_on_abort**(`event`: ProgressEvent, `id`: string): *void*

*Defined in [preload.ts:200](https://github.com/noobiept/utilities/blob/a95c65d/source/preload.ts#L200)*

Dispatch the `abort` event.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`event` | ProgressEvent | The event to dispatch. |
`id` | string | The id of the element.  |

**Returns:** *void*

___

### `Private` _on_error

▸ **_on_error**(`event`: ProgressEvent, `id`: string): *void*

*Defined in [preload.ts:190](https://github.com/noobiept/utilities/blob/a95c65d/source/preload.ts#L190)*

Dispatch the `error` event.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`event` | ProgressEvent | The event to dispatch. |
`id` | string | The id of the element.  |

**Returns:** *void*

___

### `Private` _on_progress

▸ **_on_progress**(`event`: ProgressEvent): *void*

*Defined in [preload.ts:209](https://github.com/noobiept/utilities/blob/a95c65d/source/preload.ts#L209)*

Dispatch the current progress percentage.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`event` | ProgressEvent | The event that was triggered.  |

**Returns:** *void*

___

###  addEventListener

▸ **addEventListener**(`type`: [PreloadEvent](../README.md#preloadevent), `listener`: function): *boolean*

*Inherited from [EventDispatcher](eventdispatcher.md).[addEventListener](eventdispatcher.md#addeventlistener)*

*Defined in [event_dispatcher.ts:36](https://github.com/noobiept/utilities/blob/a95c65d/source/event_dispatcher.ts#L36)*

'listener' will receive a 'data' argument when its called.
What 'data' is, depends on the event type.

**Parameters:**

▪ **type**: *[PreloadEvent](../README.md#preloadevent)*

Type of the event.

▪ **listener**: *function*

A function to be called when the event is dispatched.

▸ (`data`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`data` | any |

**Returns:** *boolean*

If it was successfully added.

___

###  dispatchEvent

▸ **dispatchEvent**(`type`: [PreloadEvent](../README.md#preloadevent), `data?`: any): *void*

*Inherited from [EventDispatcher](eventdispatcher.md).[dispatchEvent](eventdispatcher.md#dispatchevent)*

*Defined in [event_dispatcher.ts:89](https://github.com/noobiept/utilities/blob/a95c65d/source/event_dispatcher.ts#L89)*

Dispatches an event, which will trigger the listeners of that event.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`type` | [PreloadEvent](../README.md#preloadevent) | Type of the event to dispatch. |
`data?` | any | Data to be sent to every listener.  |

**Returns:** *void*

___

###  get

▸ **get**(`id`: string): *any*

*Defined in [preload.ts:318](https://github.com/noobiept/utilities/blob/a95c65d/source/preload.ts#L318)*

Get a previously loaded file.

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

**Returns:** *any*

___

###  hasListeners

▸ **hasListeners**(`type`: [PreloadEvent](../README.md#preloadevent)): *boolean*

*Inherited from [EventDispatcher](eventdispatcher.md).[hasListeners](eventdispatcher.md#haslisteners)*

*Defined in [event_dispatcher.ts:105](https://github.com/noobiept/utilities/blob/a95c65d/source/event_dispatcher.ts#L105)*

Check if there are listeners to a particular event type.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`type` | [PreloadEvent](../README.md#preloadevent) | The event type to check. |

**Returns:** *boolean*

If there are listeners or not.

___

###  load

▸ **load**(`id`: string, `path`: string, `typeId?`: [FileInfoType](../README.md#fileinfotype)): *void*

*Defined in [preload.ts:230](https://github.com/noobiept/utilities/blob/a95c65d/source/preload.ts#L230)*

Load a file.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | The id to be used later on to get the element. |
`path` | string | Path to the file. |
`typeId?` | [FileInfoType](../README.md#fileinfotype) | Type of the file to load. If not provided then it will try to determine the type from the file extension.  |

**Returns:** *void*

___

### `Private` loadAudio

▸ **loadAudio**(`response`: any, `blobType`: "audio/mpeg" | "audio/ogg", `onLoad`: function, `onError`: function): *void*

*Defined in [preload.ts:325](https://github.com/noobiept/utilities/blob/a95c65d/source/preload.ts#L325)*

Load an audio resource.

**Parameters:**

▪ **response**: *any*

▪ **blobType**: *"audio/mpeg" | "audio/ogg"*

▪ **onLoad**: *function*

▸ (`audio`: HTMLAudioElement): *void*

**Parameters:**

Name | Type |
------ | ------ |
`audio` | HTMLAudioElement |

▪ **onError**: *function*

▸ (): *void*

**Returns:** *void*

___

### `Private` loadImage

▸ **loadImage**(`id`: string, `response`: any): *void*

*Defined in [preload.ts:364](https://github.com/noobiept/utilities/blob/a95c65d/source/preload.ts#L364)*

Load an image resource.

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |
`response` | any |

**Returns:** *void*

___

### `Private` loadJson

▸ **loadJson**(`id`: string, `response`: any): *void*

*Defined in [preload.ts:347](https://github.com/noobiept/utilities/blob/a95c65d/source/preload.ts#L347)*

Load a json resource.

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |
`response` | any |

**Returns:** *void*

___

###  loadManifest

▸ **loadManifest**(`manifest`: [ManifestData](../README.md#manifestdata)): *void*

*Defined in [preload.ts:309](https://github.com/noobiept/utilities/blob/a95c65d/source/preload.ts#L309)*

Load several files.

**Parameters:**

Name | Type |
------ | ------ |
`manifest` | [ManifestData](../README.md#manifestdata) |

**Returns:** *void*

___

###  removeAllEventListeners

▸ **removeAllEventListeners**(): *void*

*Inherited from [EventDispatcher](eventdispatcher.md).[removeAllEventListeners](eventdispatcher.md#removealleventlisteners)*

*Defined in [event_dispatcher.ts:79](https://github.com/noobiept/utilities/blob/a95c65d/source/event_dispatcher.ts#L79)*

Remove all the event listeners.

**Returns:** *void*

___

###  removeEventListener

▸ **removeEventListener**(`type`: [PreloadEvent](../README.md#preloadevent), `listener?`: undefined | function): *boolean*

*Inherited from [EventDispatcher](eventdispatcher.md).[removeEventListener](eventdispatcher.md#removeeventlistener)*

*Defined in [event_dispatcher.ts:56](https://github.com/noobiept/utilities/blob/a95c65d/source/event_dispatcher.ts#L56)*

Removes a specific listener of an event type, or all the listeners for that type (if 'listener' is not provided).

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`type` | [PreloadEvent](../README.md#preloadevent) | The event type. |
`listener?` | undefined &#124; function | The listener function to remove. If not provided then remove all the functions associated with the event type. |

**Returns:** *boolean*

If it was successfully removed.

___

### `Static` get

▸ **get**(`id`: string): *any*

*Defined in [preload.ts:116](https://github.com/noobiept/utilities/blob/a95c65d/source/preload.ts#L116)*

Get an element that was saved in the global `DATA` object.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | The id of the element we're retrieving. |

**Returns:** *any*

The preloaded element.
