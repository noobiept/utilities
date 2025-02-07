[![Open in Visual Studio Code](https://open.vscode.dev/badges/open-in-vscode.svg)](https://open.vscode.dev/noobiept/utilities) ![Workflow](https://github.com/noobiept/utilities/actions/workflows/build.yml/badge.svg)

# Utilities Library

Random collection of utilities functions/classes.

# Installation

- `npm install @drk4/utilities`

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

```
import { Dialog } from '@drk4/utilities';
import "@drk4/utilities/build/dialog.css";  // optional styling

const body = document.createElement('div');
body.innerHTML = "Some HTML elements here";

const dialog = new Dialog({
    title: 'The Title', // title/body can be either a string or an HTMLElement
    body,
});
dialog.open();
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

- `corepack enable` (install pnpm)
- `pnpm install` (install the dependencies)
- `pnpm run dev` (run a dev build and a local server where you can try out some test pages that are used while developing the library components)
- `pnpm run test` (run the tests)
- `pnpm run build` (builds into the `/build` directory)
- `pnpm run documentation` (build the documentation into the `/docs` directory)

Check `package.json` scripts section for more information.
