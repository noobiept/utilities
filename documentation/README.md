> **[Utilities](README.md)**

[Globals](globals.md) /

# Javascript Utilities

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

You can read the documentation here -> [http://javascript-utilities.herokuapp.com](http://javascript-utilities.herokuapp.com).

When viewing the documentation, click on the 'Utilities' module on the right to check what is available.

You can also download it from the [download](https://bitbucket.org/drk4/javascript_utilities/downloads/) section to view it offline.

# Build

-   `npm install` (install the dependencies)
-   `npm run dev` (run the typescript compiler on watch mode, useful for development)
-   `npm run dev:test` (run a local server (at `localhost:8000/`) where you can run some tests that are used while developing the library components (go to the `/dev/` directory))
-   `npm run build` (builds into the `/build` directory)
-   `npm run test` (run the tests (expects the `/build` to exist, so run the above command first))
-   `npm run documentation` (build the documentation into the `/documentation` directory)