[**Utilities**](../README.md)

***

[Utilities](../README.md) / Timer

# Class: Timer

Defined in: [timer/timer.ts:32](https://github.com/noobiept/utilities/blob/786efe35015e1a6c21914057e8b0d5fc10429d8e/source/timer/timer.ts#L32)

Count-up or count-down timer. Can optionally update an html element.

## Constructors

### new Timer()

> **new Timer**(`args`?): `Timer`

Defined in: [timer/timer.ts:46](https://github.com/noobiept/utilities/blob/786efe35015e1a6c21914057e8b0d5fc10429d8e/source/timer/timer.ts#L46)

#### Parameters

##### args?

[`TimerArgs`](../interfaces/TimerArgs.md)

#### Returns

`Timer`

## Methods

### add()

> **add**(`time`): `void`

Defined in: [timer/timer.ts:229](https://github.com/noobiept/utilities/blob/786efe35015e1a6c21914057e8b0d5fc10429d8e/source/timer/timer.ts#L229)

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

Defined in: [timer/timer.ts:250](https://github.com/noobiept/utilities/blob/786efe35015e1a6c21914057e8b0d5fc10429d8e/source/timer/timer.ts#L250)

Returns the time it has passed so far, in milliseconds.

#### Returns

`number`

***

### getTimeSeconds()

> **getTimeSeconds**(): `number`

Defined in: [timer/timer.ts:243](https://github.com/noobiept/utilities/blob/786efe35015e1a6c21914057e8b0d5fc10429d8e/source/timer/timer.ts#L243)

Returns the time it has passed so far, in seconds.

#### Returns

`number`

***

### getTimeString()

> **getTimeString**(): `string`

Defined in: [timer/timer.ts:236](https://github.com/noobiept/utilities/blob/786efe35015e1a6c21914057e8b0d5fc10429d8e/source/timer/timer.ts#L236)

Returns a string with the time passed so far.

#### Returns

`string`

***

### isActive()

> **isActive**(): `boolean`

Defined in: [timer/timer.ts:257](https://github.com/noobiept/utilities/blob/786efe35015e1a6c21914057e8b0d5fc10429d8e/source/timer/timer.ts#L257)

Returns whether the timer is currently active or not.

#### Returns

`boolean`

***

### reset()

> **reset**(): `void`

Defined in: [timer/timer.ts:180](https://github.com/noobiept/utilities/blob/786efe35015e1a6c21914057e8b0d5fc10429d8e/source/timer/timer.ts#L180)

Stops and resets the count.

#### Returns

`void`

***

### restart()

> **restart**(): `void`

Defined in: [timer/timer.ts:190](https://github.com/noobiept/utilities/blob/786efe35015e1a6c21914057e8b0d5fc10429d8e/source/timer/timer.ts#L190)

Restart the timer.

#### Returns

`void`

***

### resume()

> **resume**(): `void`

Defined in: [timer/timer.ts:116](https://github.com/noobiept/utilities/blob/786efe35015e1a6c21914057e8b0d5fc10429d8e/source/timer/timer.ts#L116)

Resumes the timer with the same settings/values that were set before it was stopped.

#### Returns

`void`

***

### setUpdateFormat()

> **setUpdateFormat**(`format`?): `void`

Defined in: [timer/timer.ts:202](https://github.com/noobiept/utilities/blob/786efe35015e1a6c21914057e8b0d5fc10429d8e/source/timer/timer.ts#L202)

#### Parameters

##### format?

[`UpdateFormat`](../type-aliases/UpdateFormat.md)

#### Returns

`void`

***

### start()

> **start**(`args`?): `void`

Defined in: [timer/timer.ts:68](https://github.com/noobiept/utilities/blob/786efe35015e1a6c21914057e8b0d5fc10429d8e/source/timer/timer.ts#L68)

Start counting.
If no endValue is given, it never stops counting.

`startValue` and `endValue` are in milliseconds.

`onEnd` is called when the timer ends (only if an `endValue` was provided).
`onTick` is called every second.
`countDown` if it counts up or down (default is count up).
`interval` time in between each tick (default is 1000 milliseconds).

#### Parameters

##### args?

[`TimerStartArgs`](../interfaces/TimerStartArgs.md)

#### Returns

`void`

***

### stop()

> **stop**(): `void`

Defined in: [timer/timer.ts:168](https://github.com/noobiept/utilities/blob/786efe35015e1a6c21914057e8b0d5fc10429d8e/source/timer/timer.ts#L168)

Stop counting.

#### Returns

`void`

***

### updateHtmlElement()

> **updateHtmlElement**(): `void`

Defined in: [timer/timer.ts:218](https://github.com/noobiept/utilities/blob/786efe35015e1a6c21914057e8b0d5fc10429d8e/source/timer/timer.ts#L218)

Updates the associated html element (if was given) with the current time value.

#### Returns

`void`
