[![Open in Visual Studio Code](https://open.vscode.dev/badges/open-in-vscode.svg)](https://open.vscode.dev/noobiept/utilities) ![Workflow](https://github.com/noobiept/utilities/actions/workflows/build.yml/badge.svg)

# Utilities Library

A small, dependency-free collection of TypeScript utility functions and classes for the browser and Node.js — async/control-flow helpers, randomness, strings, type guards, math, timers, and a few DOM helpers.

# Installation

- `npm install @drk4/utilities`

# What's included

| Category            | Functions / classes                                                                                 |
| ------------------- | --------------------------------------------------------------------------------------------------- |
| **Async**           | `sleep` · `retry` · `debounce` · `throttle` · `withTimeout` · `pollUntil` · `deferred`              |
| **Random**          | `pickOne` · `pickN` · `weightedPick` · `seededRandom` · `shuffle`                                   |
| **String**          | `slugify` · `truncate` · `template` · `capitalize` · `escapeHtml` · `escapeRegExp` · `randomString` |
| **Type guards**     | `isString` · `isNumber` · `isInteger` · `isBoolean` · `isArray` · `isFunction`                      |
| **Number**          | `getRandomInt` · `getRandomFloat` · `getSeveralRandomInts` · `range` · `round` · `numberOfDigits`   |
| **Math / geometry** | `calculateAngle` · `calculateDistance` · `toRadians` · `toDegrees` · box/circle/point collisions    |
| **Object**          | `deepClone` · `createEnum`                                                                          |
| **Time**            | `Timer` · `Timeout` · `timeToString`                                                                |
| **DOM**             | `Dialog` · `Preload`                                                                                |
| **Storage**         | `saveObject` · `getObject`                                                                          |
| **Events**          | `EventDispatcher`                                                                                   |

See the [full documentation](docs/README.md) for every function and its signature.

# Examples

```ts
import { sleep, debounce, retry } from "@drk4/utilities";

// only fire the search once the user pauses typing for 200ms
const onInput = debounce((query) => search(query), 200);

// retry a flaky operation up to 3 times with exponential backoff
const data = await retry(() => fetch("/api/data").then((r) => r.json()), {
    attempts: 3,
    delay: 100,
    backoff: 2,
});

await sleep(500); // promise-based delay
```

```ts
import { slugify, template } from "@drk4/utilities";

slugify("Olá, World!"); // "ola-world"
template("Hello, {{name}}!", { name: "World" }); // "Hello, World!"
```

```ts
import { seededRandom, weightedPick } from "@drk4/utilities";

// reproducible random sequence for a given seed
const rng = seededRandom(42);
rng.int(1, 6); // dice roll
rng.shuffle(["a", "b", "c", "d"]);

// pick by weight — "common" wins ~99% of the time
weightedPick(["rare", "common"], [1, 99]);
```

```ts
import { timeToString } from "@drk4/utilities";

const second = 1000;
const minute = 60 * second;
const hour = 60 * minute;

const time = 2 * hour + 30 * minute;
const text = timeToString({ time }); // "2 hours 30 minutes"
const daytime = timeToString({ time, format: "daytime" }); // "02:30:00"
```

```ts
import { Timeout } from "@drk4/utilities";

const timeout = new Timeout();
timeout.start(() => {
    console.log("Done!");
}, 1000);
```

```ts
import { Preload } from "@drk4/utilities";

const preload = new Preload();
const manifest = [{ id: "something", path: "path/image.png" }];

preload.addEventListener("complete", (loaded) => {
    const image = preload.get("something");
    // do something with it
});
preload.loadManifest(manifest);
```

```ts
import { Dialog } from "@drk4/utilities";
import "@drk4/utilities/dialog.css"; // optional styling

const body = document.createElement("div");
body.innerHTML = "Some HTML elements here";

const dialog = new Dialog({
    title: "The Title", // title/body can be either a string or an HTMLElement
    body,
});
dialog.open();
```

In Node you can require it (some things only work in the browser though):

```js
const Utilities = require("@drk4/utilities");

const values = [1, 2, 3];
Utilities.shuffle(values);
```

Or load it directly with a `script` tag:

```html
<script src="path/to/library/utilities.iife.js"></script>
```

# Development

- `corepack enable` (install pnpm)
- `pnpm install` (install the dependencies)
- `pnpm run dev` (run a dev build and a local server where you can try out some test pages that are used while developing the library components)
- `pnpm run test` (run the tests)
- `pnpm run build` (builds into the `/build` directory)
- `pnpm run documentation` (build the documentation into the `/docs` directory)

Check `package.json` scripts section for more information.
