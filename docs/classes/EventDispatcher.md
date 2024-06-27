[**Utilities**](../README.md) • **Docs**

***

[Utilities](../README.md) / EventDispatcher

# Class: EventDispatcher\<EventType\>

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

• **EventType** *extends* `string`

## Constructors

### new EventDispatcher()

> **new EventDispatcher**\<`EventType`\>(): [`EventDispatcher`](EventDispatcher.md)\<`EventType`\>

#### Returns

[`EventDispatcher`](EventDispatcher.md)\<`EventType`\>

#### Defined in

[event\_dispatcher/event\_dispatcher.ts:24](https://github.com/noobiept/utilities/blob/18352a8077ed8c48acd60199e66f10ece023322d/source/event_dispatcher/event_dispatcher.ts#L24)

## Methods

### addEventListener()

> **addEventListener**(`type`, `listener`): `boolean`

'listener' will receive a 'data' argument when its called.
What 'data' is, depends on the event type.

#### Parameters

• **type**: `EventType`

Type of the event.

• **listener**

A function to be called when the event is dispatched.

#### Returns

`boolean`

If it was successfully added.

#### Defined in

[event\_dispatcher/event\_dispatcher.ts:36](https://github.com/noobiept/utilities/blob/18352a8077ed8c48acd60199e66f10ece023322d/source/event_dispatcher/event_dispatcher.ts#L36)

***

### dispatchEvent()

> **dispatchEvent**(`type`, `data`?): `void`

Dispatches an event, which will trigger the listeners of that event.

#### Parameters

• **type**: `EventType`

Type of the event to dispatch.

• **data?**: `any`

Data to be sent to every listener.

#### Returns

`void`

#### Defined in

[event\_dispatcher/event\_dispatcher.ts:89](https://github.com/noobiept/utilities/blob/18352a8077ed8c48acd60199e66f10ece023322d/source/event_dispatcher/event_dispatcher.ts#L89)

***

### hasListeners()

> **hasListeners**(`type`): `boolean`

Check if there are listeners to a particular event type.

#### Parameters

• **type**: `EventType`

The event type to check.

#### Returns

`boolean`

If there are listeners or not.

#### Defined in

[event\_dispatcher/event\_dispatcher.ts:105](https://github.com/noobiept/utilities/blob/18352a8077ed8c48acd60199e66f10ece023322d/source/event_dispatcher/event_dispatcher.ts#L105)

***

### removeAllEventListeners()

> **removeAllEventListeners**(): `void`

Remove all the event listeners.

#### Returns

`void`

#### Defined in

[event\_dispatcher/event\_dispatcher.ts:79](https://github.com/noobiept/utilities/blob/18352a8077ed8c48acd60199e66f10ece023322d/source/event_dispatcher/event_dispatcher.ts#L79)

***

### removeEventListener()

> **removeEventListener**(`type`, `listener`?): `boolean`

Removes a specific listener of an event type, or all the listeners for that type (if 'listener' is not provided).

#### Parameters

• **type**: `EventType`

The event type.

• **listener?**

The listener function to remove. If not provided then remove all the functions associated with the event type.

#### Returns

`boolean`

If it was successfully removed.

#### Defined in

[event\_dispatcher/event\_dispatcher.ts:56](https://github.com/noobiept/utilities/blob/18352a8077ed8c48acd60199e66f10ece023322d/source/event_dispatcher/event_dispatcher.ts#L56)
