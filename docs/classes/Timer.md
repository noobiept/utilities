[**Utilities**](../README.md) • **Docs**

***

[Utilities](../README.md) / Timer

# Class: Timer

Count-up or count-down timer. Can optionally update an html element.

## Constructors

### new Timer()

> **new Timer**(`args`?): [`Timer`](Timer.md)

#### Parameters

• **args?**: [`TimerArgs`](../interfaces/TimerArgs.md)

#### Returns

[`Timer`](Timer.md)

#### Defined in

[timer/timer.ts:46](https://github.com/noobiept/utilities/blob/18352a8077ed8c48acd60199e66f10ece023322d/source/timer/timer.ts#L46)

## Methods

### add()

> **add**(`time`): `void`

Adds time to the current value in the timer. So for example, if the timer is right now at 4 seconds, and we add 1000 (1 second), it jumps to 5 seconds.

#### Parameters

• **time**: `number`

In milliseconds.

#### Returns

`void`

#### Defined in

[timer/timer.ts:229](https://github.com/noobiept/utilities/blob/18352a8077ed8c48acd60199e66f10ece023322d/source/timer/timer.ts#L229)

***

### getTimeMilliseconds()

> **getTimeMilliseconds**(): `number`

Returns the time it has passed so far, in milliseconds.

#### Returns

`number`

#### Defined in

[timer/timer.ts:250](https://github.com/noobiept/utilities/blob/18352a8077ed8c48acd60199e66f10ece023322d/source/timer/timer.ts#L250)

***

### getTimeSeconds()

> **getTimeSeconds**(): `number`

Returns the time it has passed so far, in seconds.

#### Returns

`number`

#### Defined in

[timer/timer.ts:243](https://github.com/noobiept/utilities/blob/18352a8077ed8c48acd60199e66f10ece023322d/source/timer/timer.ts#L243)

***

### getTimeString()

> **getTimeString**(): `string`

Returns a string with the time passed so far.

#### Returns

`string`

#### Defined in

[timer/timer.ts:236](https://github.com/noobiept/utilities/blob/18352a8077ed8c48acd60199e66f10ece023322d/source/timer/timer.ts#L236)

***

### isActive()

> **isActive**(): `boolean`

Returns whether the timer is currently active or not.

#### Returns

`boolean`

#### Defined in

[timer/timer.ts:257](https://github.com/noobiept/utilities/blob/18352a8077ed8c48acd60199e66f10ece023322d/source/timer/timer.ts#L257)

***

### reset()

> **reset**(): `void`

Stops and resets the count.

#### Returns

`void`

#### Defined in

[timer/timer.ts:180](https://github.com/noobiept/utilities/blob/18352a8077ed8c48acd60199e66f10ece023322d/source/timer/timer.ts#L180)

***

### restart()

> **restart**(): `void`

Restart the timer.

#### Returns

`void`

#### Defined in

[timer/timer.ts:190](https://github.com/noobiept/utilities/blob/18352a8077ed8c48acd60199e66f10ece023322d/source/timer/timer.ts#L190)

***

### resume()

> **resume**(): `void`

Resumes the timer with the same settings/values that were set before it was stopped.

#### Returns

`void`

#### Defined in

[timer/timer.ts:116](https://github.com/noobiept/utilities/blob/18352a8077ed8c48acd60199e66f10ece023322d/source/timer/timer.ts#L116)

***

### setUpdateFormat()

> **setUpdateFormat**(`format`?): `void`

#### Parameters

• **format?**: [`UpdateFormat`](../type-aliases/UpdateFormat.md)

#### Returns

`void`

#### Defined in

[timer/timer.ts:202](https://github.com/noobiept/utilities/blob/18352a8077ed8c48acd60199e66f10ece023322d/source/timer/timer.ts#L202)

***

### start()

> **start**(`args`?): `void`

Start counting.
If no endValue is given, it never stops counting.

`startValue` and `endValue` are in milliseconds.

`onEnd` is called when the timer ends (only if an `endValue` was provided).
`onTick` is called every second.
`countDown` if it counts up or down (default is count up).
`interval` time in between each tick (default is 1000 milliseconds).

#### Parameters

• **args?**: [`TimerStartArgs`](../interfaces/TimerStartArgs.md)

#### Returns

`void`

#### Defined in

[timer/timer.ts:68](https://github.com/noobiept/utilities/blob/18352a8077ed8c48acd60199e66f10ece023322d/source/timer/timer.ts#L68)

***

### stop()

> **stop**(): `void`

Stop counting.

#### Returns

`void`

#### Defined in

[timer/timer.ts:168](https://github.com/noobiept/utilities/blob/18352a8077ed8c48acd60199e66f10ece023322d/source/timer/timer.ts#L168)

***

### updateHtmlElement()

> **updateHtmlElement**(): `void`

Updates the associated html element (if was given) with the current time value.

#### Returns

`void`

#### Defined in

[timer/timer.ts:218](https://github.com/noobiept/utilities/blob/18352a8077ed8c48acd60199e66f10ece023322d/source/timer/timer.ts#L218)
