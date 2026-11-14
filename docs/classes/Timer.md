[**Utilities**](../README.md)

***

[Utilities](../README.md) / Timer

# Class: Timer

Defined in: [source/timer/timer.ts:32](https://github.com/noobiept/utilities/blob/8c20054bf1ac298a403aef316daa5a4edd492c22/source/timer/timer.ts#L32)

Count-up or count-down timer. Can optionally update an html element.

## Constructors

### Constructor

> **new Timer**(`args?`): `Timer`

Defined in: [source/timer/timer.ts:48](https://github.com/noobiept/utilities/blob/8c20054bf1ac298a403aef316daa5a4edd492c22/source/timer/timer.ts#L48)

#### Parameters

##### args?

[`TimerArgs`](../interfaces/TimerArgs.md)

#### Returns

`Timer`

## Methods

### add()

> **add**(`time`): `void`

Defined in: [source/timer/timer.ts:213](https://github.com/noobiept/utilities/blob/8c20054bf1ac298a403aef316daa5a4edd492c22/source/timer/timer.ts#L213)

Adds time to the current value in the timer. So for example, if the timer is right now at 4 seconds, and we add 1000 (1 second), it jumps to 5 seconds.

#### Parameters

##### time

`number`

In milliseconds.

#### Returns

`void`

***

### getTimeMilliseconds()

> **getTimeMilliseconds**(): `number`

Defined in: [source/timer/timer.ts:235](https://github.com/noobiept/utilities/blob/8c20054bf1ac298a403aef316daa5a4edd492c22/source/timer/timer.ts#L235)

Returns the time it has passed so far, in milliseconds.

#### Returns

`number`

***

### getTimeSeconds()

> **getTimeSeconds**(): `number`

Defined in: [source/timer/timer.ts:228](https://github.com/noobiept/utilities/blob/8c20054bf1ac298a403aef316daa5a4edd492c22/source/timer/timer.ts#L228)

Returns the time it has passed so far, in seconds.

#### Returns

`number`

***

### getTimeString()

> **getTimeString**(): `string`

Defined in: [source/timer/timer.ts:221](https://github.com/noobiept/utilities/blob/8c20054bf1ac298a403aef316daa5a4edd492c22/source/timer/timer.ts#L221)

Returns a string with the time passed so far.

#### Returns

`string`

***

### isActive()

> **isActive**(): `boolean`

Defined in: [source/timer/timer.ts:242](https://github.com/noobiept/utilities/blob/8c20054bf1ac298a403aef316daa5a4edd492c22/source/timer/timer.ts#L242)

Returns whether the timer is currently active or not.

#### Returns

`boolean`

***

### reset()

> **reset**(): `void`

Defined in: [source/timer/timer.ts:164](https://github.com/noobiept/utilities/blob/8c20054bf1ac298a403aef316daa5a4edd492c22/source/timer/timer.ts#L164)

Stops and resets the count.

#### Returns

`void`

***

### restart()

> **restart**(): `void`

Defined in: [source/timer/timer.ts:174](https://github.com/noobiept/utilities/blob/8c20054bf1ac298a403aef316daa5a4edd492c22/source/timer/timer.ts#L174)

Restart the timer.

#### Returns

`void`

***

### resume()

> **resume**(): `void`

Defined in: [source/timer/timer.ts:98](https://github.com/noobiept/utilities/blob/8c20054bf1ac298a403aef316daa5a4edd492c22/source/timer/timer.ts#L98)

Resumes the timer with the same settings/values that were set before it was stopped.

#### Returns

`void`

***

### setUpdateFormat()

> **setUpdateFormat**(`format?`): `void`

Defined in: [source/timer/timer.ts:186](https://github.com/noobiept/utilities/blob/8c20054bf1ac298a403aef316daa5a4edd492c22/source/timer/timer.ts#L186)

#### Parameters

##### format?

[`UpdateFormat`](../type-aliases/UpdateFormat.md)

#### Returns

`void`

***

### start()

> **start**(`args?`): `void`

Defined in: [source/timer/timer.ts:70](https://github.com/noobiept/utilities/blob/8c20054bf1ac298a403aef316daa5a4edd492c22/source/timer/timer.ts#L70)

Start counting.
If no endValue is given, it never stops counting.

`startValue` and `endValue` are in milliseconds.

`onEnd` is called when the timer ends (only if an `endValue` was provided).
`onTick` is called on every tick (so every `interval`).
`countDown` if it counts up or down (default is count up).
`interval` time in between each tick (default is 1000 milliseconds).

#### Parameters

##### args?

[`TimerStartArgs`](../interfaces/TimerStartArgs.md) = `{}`

#### Returns

`void`

***

### stop()

> **stop**(): `void`

Defined in: [source/timer/timer.ts:152](https://github.com/noobiept/utilities/blob/8c20054bf1ac298a403aef316daa5a4edd492c22/source/timer/timer.ts#L152)

Stop counting.

#### Returns

`void`

***

### updateHtmlElement()

> **updateHtmlElement**(): `void`

Defined in: [source/timer/timer.ts:202](https://github.com/noobiept/utilities/blob/8c20054bf1ac298a403aef316daa5a4edd492c22/source/timer/timer.ts#L202)

Updates the associated html element (if was given) with the current time value.

#### Returns

`void`
