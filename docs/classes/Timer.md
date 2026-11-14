[**Utilities**](../README.md)

***

[Utilities](../README.md) / Timer

# Class: Timer

Defined in: [source/timer/timer.ts:31](https://github.com/noobiept/utilities/blob/b21d9fb0c9b704e42a1118c2425caf151c654ec9/source/timer/timer.ts#L31)

Count-up or count-down timer. Can optionally update an html element.

## Constructors

### Constructor

> **new Timer**(`args?`): `Timer`

Defined in: [source/timer/timer.ts:47](https://github.com/noobiept/utilities/blob/b21d9fb0c9b704e42a1118c2425caf151c654ec9/source/timer/timer.ts#L47)

#### Parameters

##### args?

[`TimerArgs`](../interfaces/TimerArgs.md)

#### Returns

`Timer`

## Methods

### add()

> **add**(`time`): `void`

Defined in: [source/timer/timer.ts:212](https://github.com/noobiept/utilities/blob/b21d9fb0c9b704e42a1118c2425caf151c654ec9/source/timer/timer.ts#L212)

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

Defined in: [source/timer/timer.ts:234](https://github.com/noobiept/utilities/blob/b21d9fb0c9b704e42a1118c2425caf151c654ec9/source/timer/timer.ts#L234)

Returns the time it has passed so far, in milliseconds.

#### Returns

`number`

***

### getTimeSeconds()

> **getTimeSeconds**(): `number`

Defined in: [source/timer/timer.ts:227](https://github.com/noobiept/utilities/blob/b21d9fb0c9b704e42a1118c2425caf151c654ec9/source/timer/timer.ts#L227)

Returns the time it has passed so far, in seconds.

#### Returns

`number`

***

### getTimeString()

> **getTimeString**(): `string`

Defined in: [source/timer/timer.ts:220](https://github.com/noobiept/utilities/blob/b21d9fb0c9b704e42a1118c2425caf151c654ec9/source/timer/timer.ts#L220)

Returns a string with the time passed so far.

#### Returns

`string`

***

### isActive()

> **isActive**(): `boolean`

Defined in: [source/timer/timer.ts:241](https://github.com/noobiept/utilities/blob/b21d9fb0c9b704e42a1118c2425caf151c654ec9/source/timer/timer.ts#L241)

Returns whether the timer is currently active or not.

#### Returns

`boolean`

***

### reset()

> **reset**(): `void`

Defined in: [source/timer/timer.ts:163](https://github.com/noobiept/utilities/blob/b21d9fb0c9b704e42a1118c2425caf151c654ec9/source/timer/timer.ts#L163)

Stops and resets the count.

#### Returns

`void`

***

### restart()

> **restart**(): `void`

Defined in: [source/timer/timer.ts:173](https://github.com/noobiept/utilities/blob/b21d9fb0c9b704e42a1118c2425caf151c654ec9/source/timer/timer.ts#L173)

Restart the timer.

#### Returns

`void`

***

### resume()

> **resume**(): `void`

Defined in: [source/timer/timer.ts:97](https://github.com/noobiept/utilities/blob/b21d9fb0c9b704e42a1118c2425caf151c654ec9/source/timer/timer.ts#L97)

Resumes the timer with the same settings/values that were set before it was stopped.

#### Returns

`void`

***

### setUpdateFormat()

> **setUpdateFormat**(`format?`): `void`

Defined in: [source/timer/timer.ts:185](https://github.com/noobiept/utilities/blob/b21d9fb0c9b704e42a1118c2425caf151c654ec9/source/timer/timer.ts#L185)

#### Parameters

##### format?

[`UpdateFormat`](../type-aliases/UpdateFormat.md)

#### Returns

`void`

***

### start()

> **start**(`args?`): `void`

Defined in: [source/timer/timer.ts:69](https://github.com/noobiept/utilities/blob/b21d9fb0c9b704e42a1118c2425caf151c654ec9/source/timer/timer.ts#L69)

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

Defined in: [source/timer/timer.ts:151](https://github.com/noobiept/utilities/blob/b21d9fb0c9b704e42a1118c2425caf151c654ec9/source/timer/timer.ts#L151)

Stop counting.

#### Returns

`void`

***

### updateHtmlElement()

> **updateHtmlElement**(): `void`

Defined in: [source/timer/timer.ts:201](https://github.com/noobiept/utilities/blob/b21d9fb0c9b704e42a1118c2425caf151c654ec9/source/timer/timer.ts#L201)

Updates the associated html element (if was given) with the current time value.

#### Returns

`void`
