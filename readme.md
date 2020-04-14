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

# Build

-   `npm install` (install the dependencies)
-   `npm run dev` (run a dev build and a local server where you can try out some test pages that are used while developing the library components)
-   `npm run tsc` (run the typescript compiler on watch mode, useful during development)
-   `npm run build` (builds into the `/build` directory)
-   `npm run test` (run the tests (expects the `/build` to exist, so run the above command first))
-   `npm run documentation` (build the documentation into the `/docs` directory)
