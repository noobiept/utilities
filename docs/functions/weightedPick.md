[**Utilities**](../README.md)

***

[Utilities](../README.md) / weightedPick

# Function: weightedPick()

> **weightedPick**\<`T`\>(`items`, `weights`): `T` \| `undefined`

Defined in: [source/random/random.ts:44](https://github.com/noobiept/utilities/blob/a2b219c4e944f55be1689b2aadd978da31c48c73/source/random/random.ts#L44)

Returns a random item picked according to the given weights.
`items` and `weights` are matched by index — higher weight means more likely.

Negative weights are treated as 0. If the lengths differ, the shorter one wins.
Returns `undefined` if there's nothing to pick from or the total weight is 0.

## Type Parameters

### T

`T`

## Parameters

### items

readonly `T`[]

### weights

readonly `number`[]

## Returns

`T` \| `undefined`
