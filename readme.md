# Utilities Library

Random collection of utilities functions/classes.

# Installation

-   `npm install @drk4/utilities`

# Usage

```
import { Timeout } from '@drk4/utilities';

const timeout = new Timeout();
timeout.start(() => {
    console.log('Done!');
}, 1000);
```

```
import { Preload } from '@drk4/utilities';

const preload = new Preload();
const manifest = [
    { id: 'something', path: 'path/image.png' },
];

preload.addEventListener('complete', (loaded) => {
    const image = preload.get('something');
    // do something with it
});
preload.loadManifest(manifest);
```

```
import { timeToString } from '@drk4/utilities';

const second = 1000;
const minute = 60 * second;
const hour = 60 * minute;

const time = 2 * hour + 30 * minute;
const text = timeToString({ time });    // "2 hours 30 minutes"
const daytime = timeToString({ time, format: "daytime" });  // "02:30:00"
```

In node you can require it (some things only work on the browser though).

```
const Utilities = require('@drk4/utilities');

const values = [1, 2, 3];
Utilities.shuffle(values);
```

You can also just load directly with a `script` tag.

```
<script src="path/to/library/utilities.iife.js"></script>
```

# Documentation

You can read the [documentation here.](docs/README.md)

# Development

-   `npm install` (install the dependencies)
-   `npm run tsc` (run the typescript compiler on watch mode, useful during development)
-   `npm run dev` (run a dev build and a local server where you can try out some test pages that are used while developing the library components)
-   `npm run test` (run the tests)
-   `npm run build` (builds into the `/build` directory)
-   `npm run documentation` (build the documentation into the `/docs` directory)
