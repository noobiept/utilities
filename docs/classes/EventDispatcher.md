[**Utilities**](../README.md)

***

[Utilities](../README.md) / EventDispatcher

# Class: EventDispatcher\<EventType\>

Defined in: [source/event\_dispatcher/event\_dispatcher.ts:24](https://github.com/noobiept/utilities/blob/8c20054bf1ac298a403aef316daa5a4edd492c22/source/event_dispatcher/event_dispatcher.ts#L24)

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

    const instance = new MyClass();
    instance.addEventListener('anEvent', somethingToDo);

## Extended by

- [`Preload`](Preload.md)

## Type Parameters

### EventType

`EventType` *extends* `string`

## Constructors

### Constructor

> **new EventDispatcher**\<`EventType`\>(): `EventDispatcher`\<`EventType`\>

Defined in: [source/event\_dispatcher/event\_dispatcher.ts:29](https://github.com/noobiept/utilities/blob/8c20054bf1ac298a403aef316daa5a4edd492c22/source/event_dispatcher/event_dispatcher.ts#L29)

#### Returns

`EventDispatcher`\<`EventType`\>

## Methods

### addEventListener()

> **addEventListener**(`type`, `listener`): `boolean`

Defined in: [source/event\_dispatcher/event\_dispatcher.ts:41](https://github.com/noobiept/utilities/blob/8c20054bf1ac298a403aef316daa5a4edd492c22/source/event_dispatcher/event_dispatcher.ts#L41)

'listener' will receive a 'data' argument when its called.
What 'data' is, depends on the event type.

#### Parameters

##### type

`EventType`

Type of the event.

##### listener

(`data`) => `void`

A function to be called when the event is dispatched.

#### Returns

`boolean`

If it was successfully added.

***

### dispatchEvent()

> **dispatchEvent**(`type`, `data?`): `void`

Defined in: [source/event\_dispatcher/event\_dispatcher.ts:103](https://github.com/noobiept/utilities/blob/8c20054bf1ac298a403aef316daa5a4edd492c22/source/event_dispatcher/event_dispatcher.ts#L103)

Dispatches an event, which will trigger the listeners of that event (in the order they were added).
Like with the DOM events, a listener added during the dispatch is only called on the next one, and a listener removed during the dispatch isn't called.

#### Parameters

##### type

`EventType`

Type of the event to dispatch.

##### data?

`any`

Data to be sent to every listener.

#### Returns

`void`

***

### hasListeners()

> **hasListeners**(`type`): `boolean`

Defined in: [source/event\_dispatcher/event\_dispatcher.ts:122](https://github.com/noobiept/utilities/blob/8c20054bf1ac298a403aef316daa5a4edd492c22/source/event_dispatcher/event_dispatcher.ts#L122)

Check if there are listeners to a particular event type.

#### Parameters

##### type

`EventType`

The event type to check.

#### Returns

`boolean`

If there are listeners or not.

***

### removeAllEventListeners()

> **removeAllEventListeners**(): `void`

Defined in: [source/event\_dispatcher/event\_dispatcher.ts:86](https://github.com/noobiept/utilities/blob/8c20054bf1ac298a403aef316daa5a4edd492c22/source/event_dispatcher/event_dispatcher.ts#L86)

Remove all the event listeners.

#### Returns

`void`

***

### removeEventListener()

> **removeEventListener**(`type`, `listener?`): `boolean`

Defined in: [source/event\_dispatcher/event\_dispatcher.ts:59](https://github.com/noobiept/utilities/blob/8c20054bf1ac298a403aef316daa5a4edd492c22/source/event_dispatcher/event_dispatcher.ts#L59)

Removes a specific listener of an event type, or all the listeners for that type (if 'listener' is not provided).

#### Parameters

##### type

`EventType`

The event type.

##### listener?

(`data`) => `any`

The listener function to remove. If not provided then remove all the functions associated with the event type.

#### Returns

`boolean`

If it was successfully removed.
