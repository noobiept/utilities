[Utilities](../README.md) / Timer

# Class: Timer

Count-up or count-down timer. Can optionally update an html element.

## Table of contents

### Constructors

- [constructor](Timer.md#constructor)

### Properties

- [count\_down](Timer.md#count_down)
- [element](Timer.md#element)
- [end\_callback](Timer.md#end_callback)
- [end\_value](Timer.md#end_value)
- [interval](Timer.md#interval)
- [interval\_f](Timer.md#interval_f)
- [is\_active](Timer.md#is_active)
- [start\_value](Timer.md#start_value)
- [tick\_callback](Timer.md#tick_callback)
- [time\_count](Timer.md#time_count)
- [update\_html](Timer.md#update_html)

### Methods

- [add](Timer.md#add)
- [getTimeMilliseconds](Timer.md#gettimemilliseconds)
- [getTimeSeconds](Timer.md#gettimeseconds)
- [getTimeString](Timer.md#gettimestring)
- [isActive](Timer.md#isactive)
- [reset](Timer.md#reset)
- [restart](Timer.md#restart)
- [resume](Timer.md#resume)
- [setUpdateFormat](Timer.md#setupdateformat)
- [start](Timer.md#start)
- [stop](Timer.md#stop)
- [updateHtmlElement](Timer.md#updatehtmlelement)

## Constructors

### constructor

• **new Timer**(`args?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `args?` | [`TimerArgs`](../interfaces/TimerArgs.md) |

#### Defined in

[timer/timer.ts:46](https://github.com/noobiept/utilities/blob/1ba3532/source/timer/timer.ts#L46)

## Properties

### count\_down

• `Private` **count\_down**: `boolean` = `false`

#### Defined in

[timer/timer.ts:35](https://github.com/noobiept/utilities/blob/1ba3532/source/timer/timer.ts#L35)

___

### element

• `Private` `Optional` **element**: `HTMLElement`

#### Defined in

[timer/timer.ts:43](https://github.com/noobiept/utilities/blob/1ba3532/source/timer/timer.ts#L43)

___

### end\_callback

• `Private` `Optional` **end\_callback**: () => `any`

#### Type declaration

▸ (): `any`

##### Returns

`any`

#### Defined in

[timer/timer.ts:40](https://github.com/noobiept/utilities/blob/1ba3532/source/timer/timer.ts#L40)

___

### end\_value

• `Private` `Optional` **end\_value**: `number`

#### Defined in

[timer/timer.ts:39](https://github.com/noobiept/utilities/blob/1ba3532/source/timer/timer.ts#L39)

___

### interval

• `Private` **interval**: `number` = `1000`

#### Defined in

[timer/timer.ts:37](https://github.com/noobiept/utilities/blob/1ba3532/source/timer/timer.ts#L37)

___

### interval\_f

• `Private` `Optional` **interval\_f**: `number`

#### Defined in

[timer/timer.ts:42](https://github.com/noobiept/utilities/blob/1ba3532/source/timer/timer.ts#L42)

___

### is\_active

• `Private` **is\_active**: `boolean` = `false`

#### Defined in

[timer/timer.ts:33](https://github.com/noobiept/utilities/blob/1ba3532/source/timer/timer.ts#L33)

___

### start\_value

• `Private` **start\_value**: `number` = `0`

#### Defined in

[timer/timer.ts:34](https://github.com/noobiept/utilities/blob/1ba3532/source/timer/timer.ts#L34)

___

### tick\_callback

• `Private` `Optional` **tick\_callback**: () => `any`

#### Type declaration

▸ (): `any`

##### Returns

`any`

#### Defined in

[timer/timer.ts:41](https://github.com/noobiept/utilities/blob/1ba3532/source/timer/timer.ts#L41)

___

### time\_count

• `Private` **time\_count**: `number` = `0`

#### Defined in

[timer/timer.ts:36](https://github.com/noobiept/utilities/blob/1ba3532/source/timer/timer.ts#L36)

___

### update\_html

• `Private` `Optional` **update\_html**: (`timer`: [`Timer`](Timer.md)) => `string`

#### Type declaration

▸ (`timer`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `timer` | [`Timer`](Timer.md) |

##### Returns

`string`

#### Defined in

[timer/timer.ts:44](https://github.com/noobiept/utilities/blob/1ba3532/source/timer/timer.ts#L44)

## Methods

### add

▸ **add**(`time`): `void`

Adds time to the current value in the timer. So for example, if the timer is right now at 4 seconds, and we add 1000 (1 second), it jumps to 5 seconds.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `time` | `number` | In milliseconds. |

#### Returns

`void`

#### Defined in

[timer/timer.ts:229](https://github.com/noobiept/utilities/blob/1ba3532/source/timer/timer.ts#L229)

___

### getTimeMilliseconds

▸ **getTimeMilliseconds**(): `number`

Returns the time it has passed so far, in milliseconds.

#### Returns

`number`

#### Defined in

[timer/timer.ts:250](https://github.com/noobiept/utilities/blob/1ba3532/source/timer/timer.ts#L250)

___

### getTimeSeconds

▸ **getTimeSeconds**(): `number`

Returns the time it has passed so far, in seconds.

#### Returns

`number`

#### Defined in

[timer/timer.ts:243](https://github.com/noobiept/utilities/blob/1ba3532/source/timer/timer.ts#L243)

___

### getTimeString

▸ **getTimeString**(): `string`

Returns a string with the time passed so far.

#### Returns

`string`

#### Defined in

[timer/timer.ts:236](https://github.com/noobiept/utilities/blob/1ba3532/source/timer/timer.ts#L236)

___

### isActive

▸ **isActive**(): `boolean`

Returns whether the timer is currently active or not.

#### Returns

`boolean`

#### Defined in

[timer/timer.ts:257](https://github.com/noobiept/utilities/blob/1ba3532/source/timer/timer.ts#L257)

___

### reset

▸ **reset**(): `void`

Stops and resets the count.

#### Returns

`void`

#### Defined in

[timer/timer.ts:180](https://github.com/noobiept/utilities/blob/1ba3532/source/timer/timer.ts#L180)

___

### restart

▸ **restart**(): `void`

Restart the timer.

#### Returns

`void`

#### Defined in

[timer/timer.ts:190](https://github.com/noobiept/utilities/blob/1ba3532/source/timer/timer.ts#L190)

___

### resume

▸ **resume**(): `void`

Resumes the timer with the same settings/values that were set before it was stopped.

#### Returns

`void`

#### Defined in

[timer/timer.ts:116](https://github.com/noobiept/utilities/blob/1ba3532/source/timer/timer.ts#L116)

___

### setUpdateFormat

▸ **setUpdateFormat**(`format?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `format?` | [`UpdateFormat`](../README.md#updateformat) |

#### Returns

`void`

#### Defined in

[timer/timer.ts:202](https://github.com/noobiept/utilities/blob/1ba3532/source/timer/timer.ts#L202)

___

### start

▸ **start**(`args?`): `void`

Start counting.
If no endValue is given, it never stops counting.

`startValue` and `endValue` are in milliseconds.

`onEnd` is called when the timer ends (only if an `endValue` was provided).
`onTick` is called every second.
`countDown` if it counts up or down (default is count up).
`interval` time in between each tick (default is 1000 milliseconds).

#### Parameters

| Name | Type |
| :------ | :------ |
| `args?` | [`TimerStartArgs`](../interfaces/TimerStartArgs.md) |

#### Returns

`void`

#### Defined in

[timer/timer.ts:68](https://github.com/noobiept/utilities/blob/1ba3532/source/timer/timer.ts#L68)

___

### stop

▸ **stop**(): `void`

Stop counting.

#### Returns

`void`

#### Defined in

[timer/timer.ts:168](https://github.com/noobiept/utilities/blob/1ba3532/source/timer/timer.ts#L168)

___

### updateHtmlElement

▸ **updateHtmlElement**(): `void`

Updates the associated html element (if was given) with the current time value.

#### Returns

`void`

#### Defined in

[timer/timer.ts:218](https://github.com/noobiept/utilities/blob/1ba3532/source/timer/timer.ts#L218)
