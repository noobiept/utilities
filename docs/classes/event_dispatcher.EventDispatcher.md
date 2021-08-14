[Utilities](../README.md) / [event_dispatcher](../modules/event_dispatcher.md) / EventDispatcher

# Class: EventDispatcher<EventType\>

[event_dispatcher](../modules/event_dispatcher.md).EventDispatcher

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

| Name | Type |
| :------ | :------ |
| `EventType` | extends `string` |

## Hierarchy

- **`EventDispatcher`**

  ↳ [`Preload`](preload.Preload.md)

## Table of contents

### Constructors

- [constructor](event_dispatcher.EventDispatcher.md#constructor)

### Properties

- [\_listeners](event_dispatcher.EventDispatcher.md#_listeners)

### Methods

- [addEventListener](event_dispatcher.EventDispatcher.md#addeventlistener)
- [dispatchEvent](event_dispatcher.EventDispatcher.md#dispatchevent)
- [hasListeners](event_dispatcher.EventDispatcher.md#haslisteners)
- [removeAllEventListeners](event_dispatcher.EventDispatcher.md#removealleventlisteners)
- [removeEventListener](event_dispatcher.EventDispatcher.md#removeeventlistener)

## Constructors

### constructor

• **new EventDispatcher**<`EventType`\>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EventType` | extends `string` |

#### Defined in

[event_dispatcher.ts:24](https://github.com/noobiept/utilities/blob/03a3e48/source/event_dispatcher.ts#L24)

## Properties

### \_listeners

• `Private` **\_listeners**: { [E in string]?: function[]}

#### Defined in

[event_dispatcher.ts:20](https://github.com/noobiept/utilities/blob/03a3e48/source/event_dispatcher.ts#L20)

## Methods

### addEventListener

▸ **addEventListener**(`type`, `listener`): `boolean`

'listener' will receive a 'data' argument when its called.
What 'data' is, depends on the event type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `EventType` | Type of the event. |
| `listener` | (`data`: `any`) => `void` | A function to be called when the event is dispatched. |

#### Returns

`boolean`

If it was successfully added.

#### Defined in

[event_dispatcher.ts:36](https://github.com/noobiept/utilities/blob/03a3e48/source/event_dispatcher.ts#L36)

___

### dispatchEvent

▸ **dispatchEvent**(`type`, `data?`): `void`

Dispatches an event, which will trigger the listeners of that event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `EventType` | Type of the event to dispatch. |
| `data?` | `any` | Data to be sent to every listener. |

#### Returns

`void`

#### Defined in

[event_dispatcher.ts:89](https://github.com/noobiept/utilities/blob/03a3e48/source/event_dispatcher.ts#L89)

___

### hasListeners

▸ **hasListeners**(`type`): `boolean`

Check if there are listeners to a particular event type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `EventType` | The event type to check. |

#### Returns

`boolean`

If there are listeners or not.

#### Defined in

[event_dispatcher.ts:105](https://github.com/noobiept/utilities/blob/03a3e48/source/event_dispatcher.ts#L105)

___

### removeAllEventListeners

▸ **removeAllEventListeners**(): `void`

Remove all the event listeners.

#### Returns

`void`

#### Defined in

[event_dispatcher.ts:79](https://github.com/noobiept/utilities/blob/03a3e48/source/event_dispatcher.ts#L79)

___

### removeEventListener

▸ **removeEventListener**(`type`, `listener?`): `boolean`

Removes a specific listener of an event type, or all the listeners for that type (if 'listener' is not provided).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `EventType` | The event type. |
| `listener?` | (`data`: `any`) => `any` | The listener function to remove. If not provided then remove all the functions associated with the event type. |

#### Returns

`boolean`

If it was successfully removed.

#### Defined in

[event_dispatcher.ts:56](https://github.com/noobiept/utilities/blob/03a3e48/source/event_dispatcher.ts#L56)
