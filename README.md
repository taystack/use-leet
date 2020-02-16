# @taystack/use-leet

> Leet-ify your text with leet speak. React hook turns your given text value into 1337 SP34K.

[![NPM](https://img.shields.io/npm/v/@taystack/use-leet.svg)](https://www.npmjs.com/package/@taystack/use-leet) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![codecov](https://codecov.io/gh/taystack/use-leet/branch/master/graph/badge.svg)](https://codecov.io/gh/taystack/use-leet)". For adding a "build" badge add "[![Build Status](https://travis-ci.org/taystack/use-leet.png)](https://travis-ci.org/taystack/use-leet)

## Install

```bash
npm install --save @taystack/use-leet
```

## Usage

```jsx
import React from "react";

import useLeet from "@taystack/use-leet";


const Example = () => {
  const [stateValue, stateValueSetter, leetValue] = useLeet("dope hacks!");
  return (<div>{leetValue}</div>);
}
/* => <div>d0p3 haxzorz</div> */

const ExampleWithCustomLeetMap = () => {
  const leetMap = { c: "¢" };
  const [stateValue, stateValueSetter, leetValue] = useLeet("nice zeebra dude", leetMap);
  return (<div>{leetValue}</div>);
}
/* => <div>n1¢3 z33br4 d00d</div> */
```

## License

MIT © [taystack](https://github.com/taystack)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
