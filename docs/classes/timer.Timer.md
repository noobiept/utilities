[Utilities](../README.md) / [timer](../modules/timer.md) / Timer

# Class: Timer

[timer](../modules/timer.md).Timer

Count-up or count-down timer. Can optionally update an html element.

## Table of contents

### Constructors

- [constructor](timer.Timer.md#constructor)

### Properties

- [count\_down](timer.Timer.md#count_down)
- [end\_callback](timer.Timer.md#end_callback)
- [end\_value](timer.Timer.md#end_value)
- [html\_element](timer.Timer.md#html_element)
- [interval](timer.Timer.md#interval)
- [interval\_f](timer.Timer.md#interval_f)
- [is\_active](timer.Timer.md#is_active)
- [start\_value](timer.Timer.md#start_value)
- [tick\_callback](timer.Timer.md#tick_callback)
- [time\_count](timer.Timer.md#time_count)

### Methods

- [add](timer.Timer.md#add)
- [getTimeMilliseconds](timer.Timer.md#gettimemilliseconds)
- [getTimeSeconds](timer.Timer.md#gettimeseconds)
- [getTimeString](timer.Timer.md#gettimestring)
- [isActive](timer.Timer.md#isactive)
- [reset](timer.Timer.md#reset)
- [restart](timer.Timer.md#restart)
- [resume](timer.Timer.md#resume)
- [start](timer.Timer.md#start)
- [stop](timer.Timer.md#stop)
- [updateHtmlElement](timer.Timer.md#updatehtmlelement)

## Constructors

### constructor

• **new Timer**(`htmlElement?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `htmlElement?` | `HTMLElement` |

#### Defined in

[timer.ts:21](https://github.com/noobiept/utilities/blob/03a3e48/source/timer.ts#L21)

## Properties

### count\_down

• `Private` **count\_down**: `boolean` = `false`

#### Defined in

[timer.ts:10](https://github.com/noobiept/utilities/blob/03a3e48/source/timer.ts#L10)

___

### end\_callback

• `Private` `Optional` **end\_callback**: () => `any`

#### Type declaration

▸ (): `any`

##### Returns

`any`

#### Defined in

[timer.ts:16](https://github.com/noobiept/utilities/blob/03a3e48/source/timer.ts#L16)

___

### end\_value

• `Private` `Optional` **end\_value**: `number`

#### Defined in

[timer.ts:15](https://github.com/noobiept/utilities/blob/03a3e48/source/timer.ts#L15)

___

### html\_element

• `Private` `Optional` **html\_element**: `HTMLElement`

#### Defined in

[timer.ts:19](https://github.com/noobiept/utilities/blob/03a3e48/source/timer.ts#L19)

___

### interval

• `Private` **interval**: `number` = `1000`

#### Defined in

[timer.ts:12](https://github.com/noobiept/utilities/blob/03a3e48/source/timer.ts#L12)

___

### interval\_f

• `Private` `Optional` **interval\_f**: `number`

#### Defined in

[timer.ts:18](https://github.com/noobiept/utilities/blob/03a3e48/source/timer.ts#L18)

___

### is\_active

• `Private` **is\_active**: `boolean` = `false`

#### Defined in

[timer.ts:8](https://github.com/noobiept/utilities/blob/03a3e48/source/timer.ts#L8)

___

### start\_value

• `Private` **start\_value**: `number` = `0`

#### Defined in

[timer.ts:9](https://github.com/noobiept/utilities/blob/03a3e48/source/timer.ts#L9)

___

### tick\_callback

• `Private` `Optional` **tick\_callback**: () => `any`

#### Type declaration

▸ (): `any`

##### Returns

`any`

#### Defined in

[timer.ts:17](https://github.com/noobiept/utilities/blob/03a3e48/source/timer.ts#L17)

___

### time\_count

• `Private` **time\_count**: `number` = `0`

#### Defined in

[timer.ts:11](https://github.com/noobiept/utilities/blob/03a3e48/source/timer.ts#L11)

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

[timer.ts:192](https://github.com/noobiept/utilities/blob/03a3e48/source/timer.ts#L192)

___

### getTimeMilliseconds

▸ **getTimeMilliseconds**(): `number`

Returns the time it has passed so far, in milliseconds.

#### Returns

`number`

#### Defined in

[timer.ts:213](https://github.com/noobiept/utilities/blob/03a3e48/source/timer.ts#L213)

___

### getTimeSeconds

▸ **getTimeSeconds**(): `number`

Returns the time it has passed so far, in seconds.

#### Returns

`number`

#### Defined in

[timer.ts:206](https://github.com/noobiept/utilities/blob/03a3e48/source/timer.ts#L206)

___

### getTimeString

▸ **getTimeString**(): `string`

Returns a string with the time passed so far.

#### Returns

`string`

#### Defined in

[timer.ts:199](https://github.com/noobiept/utilities/blob/03a3e48/source/timer.ts#L199)

___

### isActive

▸ **isActive**(): `boolean`

Returns whether the timer is currently active or not.

#### Returns

`boolean`

#### Defined in

[timer.ts:220](https://github.com/noobiept/utilities/blob/03a3e48/source/timer.ts#L220)

___

### reset

▸ **reset**(): `void`

Stops and resets the count.

#### Returns

`void`

#### Defined in

[timer.ts:156](https://github.com/noobiept/utilities/blob/03a3e48/source/timer.ts#L156)

___

### restart

▸ **restart**(): `void`

Restart the timer.

#### Returns

`void`

#### Defined in

[timer.ts:166](https://github.com/noobiept/utilities/blob/03a3e48/source/timer.ts#L166)

___

### resume

▸ **resume**(): `void`

Resumes the timer with the same settings/values that were set before it was stopped.

#### Returns

`void`

#### Defined in

[timer.ts:92](https://github.com/noobiept/utilities/blob/03a3e48/source/timer.ts#L92)

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
| `args?` | `Object` |
| `args.countDown?` | `boolean` |
| `args.endValue?` | `number` |
| `args.interval?` | `number` |
| `args.startValue?` | `number` |
| `args.onEnd?` | () => `void` |
| `args.onTick?` | () => `void` |

#### Returns

`void`

#### Defined in

[timer.ts:37](https://github.com/noobiept/utilities/blob/03a3e48/source/timer.ts#L37)

___

### stop

▸ **stop**(): `void`

Stop counting.

#### Returns

`void`

#### Defined in

[timer.ts:144](https://github.com/noobiept/utilities/blob/03a3e48/source/timer.ts#L144)

___

### updateHtmlElement

▸ **updateHtmlElement**(): `void`

Updates the associated html element (if was given) with the current time value.

#### Returns

`void`

#### Defined in

[timer.ts:181](https://github.com/noobiept/utilities/blob/03a3e48/source/timer.ts#L181)
