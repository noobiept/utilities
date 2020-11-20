**[Utilities](../README.md)**

> [Globals](../README.md) / EventDispatcher

# Class: EventDispatcher\<EventType>

Base class that provides a way to add/remove listeners, and dispatch events.

Basic Usage:
    import { EventDispatcher } from '@drk4/utilities';

    type MyEvent = 'anEvent' | 'somethingElse';

    class MyClass extends EventDispatcher<MyEvent> {
        // (...)
        onClick() {
            this.dispatchEvent('anEvent', { something: 'here' });
        }
    }

    const instance = MyClass();
    instance.addEventListener('anEvent', somethingToDo);

## Type parameters

Name | Type |
------ | ------ |
`EventType` | string |

## Hierarchy

* **EventDispatcher**

  ↳ [Preload](preload.md)

## Index

### Constructors

* [constructor](eventdispatcher.md#constructor)

### Properties

* [\_listeners](eventdispatcher.md#_listeners)

### Methods

* [addEventListener](eventdispatcher.md#addeventlistener)
* [dispatchEvent](eventdispatcher.md#dispatchevent)
* [hasListeners](eventdispatcher.md#haslisteners)
* [removeAllEventListeners](eventdispatcher.md#removealleventlisteners)
* [removeEventListener](eventdispatcher.md#removeeventlistener)

## Constructors

### constructor

\+ **new EventDispatcher**(): [EventDispatcher](eventdispatcher.md)

*Defined in [event_dispatcher.ts:22](https://github.com/noobiept/utilities/blob/22280e5/source/event_dispatcher.ts#L22)*

**Returns:** [EventDispatcher](eventdispatcher.md)

## Properties

### \_listeners

• `Private` **\_listeners**: {}

*Defined in [event_dispatcher.ts:20](https://github.com/noobiept/utilities/blob/22280e5/source/event_dispatcher.ts#L20)*

## Methods

### addEventListener

▸ **addEventListener**(`type`: EventType, `listener`: (data: any) => void): boolean

*Defined in [event_dispatcher.ts:36](https://github.com/noobiept/utilities/blob/22280e5/source/event_dispatcher.ts#L36)*

'listener' will receive a 'data' argument when its called.
What 'data' is, depends on the event type.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`type` | EventType | Type of the event. |
`listener` | (data: any) => void | A function to be called when the event is dispatched. |

**Returns:** boolean

If it was successfully added.

___

### dispatchEvent

▸ **dispatchEvent**(`type`: EventType, `data?`: any): void

*Defined in [event_dispatcher.ts:89](https://github.com/noobiept/utilities/blob/22280e5/source/event_dispatcher.ts#L89)*

Dispatches an event, which will trigger the listeners of that event.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`type` | EventType | Type of the event to dispatch. |
`data?` | any | Data to be sent to every listener.  |

**Returns:** void

___

### hasListeners

▸ **hasListeners**(`type`: EventType): boolean

*Defined in [event_dispatcher.ts:105](https://github.com/noobiept/utilities/blob/22280e5/source/event_dispatcher.ts#L105)*

Check if there are listeners to a particular event type.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`type` | EventType | The event type to check. |

**Returns:** boolean

If there are listeners or not.

___

### removeAllEventListeners

▸ **removeAllEventListeners**(): void

*Defined in [event_dispatcher.ts:79](https://github.com/noobiept/utilities/blob/22280e5/source/event_dispatcher.ts#L79)*

Remove all the event listeners.

**Returns:** void

___

### removeEventListener

▸ **removeEventListener**(`type`: EventType, `listener?`: undefined \| (data: any) => any): boolean

*Defined in [event_dispatcher.ts:56](https://github.com/noobiept/utilities/blob/22280e5/source/event_dispatcher.ts#L56)*

Removes a specific listener of an event type, or all the listeners for that type (if 'listener' is not provided).

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`type` | EventType | The event type. |
`listener?` | undefined \| (data: any) => any | The listener function to remove. If not provided then remove all the functions associated with the event type. |

**Returns:** boolean

If it was successfully removed.
