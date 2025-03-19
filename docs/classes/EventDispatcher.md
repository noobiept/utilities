[**Utilities**](../README.md)

***

[Utilities](../README.md) / EventDispatcher

# Class: EventDispatcher\<EventType\>

Defined in: [event\_dispatcher/event\_dispatcher.ts:19](https://github.com/noobiept/utilities/blob/786efe35015e1a6c21914057e8b0d5fc10429d8e/source/event_dispatcher/event_dispatcher.ts#L19)

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

## Extended by

- [`Preload`](Preload.md)

## Type Parameters

### EventType

`EventType` *extends* `string`

## Constructors

### new EventDispatcher()

> **new EventDispatcher**\<`EventType`\>(): `EventDispatcher`\<`EventType`\>

Defined in: [event\_dispatcher/event\_dispatcher.ts:24](https://github.com/noobiept/utilities/blob/786efe35015e1a6c21914057e8b0d5fc10429d8e/source/event_dispatcher/event_dispatcher.ts#L24)

#### Returns

`EventDispatcher`\<`EventType`\>

## Methods

### addEventListener()

> **addEventListener**(`type`, `listener`): `boolean`

Defined in: [event\_dispatcher/event\_dispatcher.ts:36](https://github.com/noobiept/utilities/blob/786efe35015e1a6c21914057e8b0d5fc10429d8e/source/event_dispatcher/event_dispatcher.ts#L36)

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

> **dispatchEvent**(`type`, `data`?): `void`

Defined in: [event\_dispatcher/event\_dispatcher.ts:89](https://github.com/noobiept/utilities/blob/786efe35015e1a6c21914057e8b0d5fc10429d8e/source/event_dispatcher/event_dispatcher.ts#L89)

Dispatches an event, which will trigger the listeners of that event.

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

Defined in: [event\_dispatcher/event\_dispatcher.ts:105](https://github.com/noobiept/utilities/blob/786efe35015e1a6c21914057e8b0d5fc10429d8e/source/event_dispatcher/event_dispatcher.ts#L105)

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

Defined in: [event\_dispatcher/event\_dispatcher.ts:79](https://github.com/noobiept/utilities/blob/786efe35015e1a6c21914057e8b0d5fc10429d8e/source/event_dispatcher/event_dispatcher.ts#L79)

Remove all the event listeners.

#### Returns

`void`

***

### removeEventListener()

> **removeEventListener**(`type`, `listener`?): `boolean`

Defined in: [event\_dispatcher/event\_dispatcher.ts:56](https://github.com/noobiept/utilities/blob/786efe35015e1a6c21914057e8b0d5fc10429d8e/source/event_dispatcher/event_dispatcher.ts#L56)

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
