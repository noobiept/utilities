[**Utilities**](../README.md)

***

[Utilities](../README.md) / seededRandom

# Function: seededRandom()

> **seededRandom**(`seed`): `object`

Defined in: [source/random/random.ts:85](https://github.com/noobiept/utilities/blob/e6a08ca69d4fb1f440b5c1bfd63b2dadf3422789/source/random/random.ts#L85)

Seeded random number generator, returns an object with the same shape as the
stand-alone helpers but with reproducible output for a given `seed`.

Uses mulberry32 internally — fast, small, and good enough for games, tests, and
procedural generation. Not suitable for cryptography.

## Parameters

### seed

`number`

## Returns

`object`

### float

> **float**: (`min`, `max`) => `number`

#### Parameters

##### min

`number`

##### max

`number`

#### Returns

`number`

### int

> **int**: (`min`, `max`) => `number`

#### Parameters

##### min

`number`

##### max

`number`

#### Returns

`number`

### next

> **next**: () => `number`

#### Returns

`number`

### pickN

> **pickN**: \<`T`\>(`array`, `n`) => `T`[]

#### Type Parameters

##### T

`T`

#### Parameters

##### array

readonly `T`[]

##### n

`number`

#### Returns

`T`[]

### pickOne

> **pickOne**: \<`T`\>(`array`) => `T` \| `undefined`

#### Type Parameters

##### T

`T`

#### Parameters

##### array

readonly `T`[]

#### Returns

`T` \| `undefined`

### shuffle

> **shuffle**: \<`T`\>(`array`) => `T`[] = `shuffleInPlace`

#### Type Parameters

##### T

`T`

#### Parameters

##### array

`T`[]

#### Returns

`T`[]

### weightedPick

> **weightedPick**: \<`T`\>(`items`, `weights`) => `T` \| `undefined`

#### Type Parameters

##### T

`T`

#### Parameters

##### items

readonly `T`[]

##### weights

readonly `number`[]

#### Returns

`T` \| `undefined`
