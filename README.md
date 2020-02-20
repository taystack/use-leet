![UseLeet](https://github.com/taystack/use-leet/blob/master/logo.png?raw=true)
[![NPM](https://img.shields.io/npm/v/@taystack/use-leet.svg)](https://www.npmjs.com/package/@taystack/use-leet) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![codecov](https://codecov.io/gh/taystack/use-leet/branch/master/graph/badge.svg)](https://codecov.io/gh/taystack/use-leet)

# @taystack/use-leet

> Leet-ify your text with leet speak. React hook turns your given text value into 1337 SP34K.

## Install

```bash
npm install --save @taystack/use-leet
```

## Usage

```jsx
import React from "react";

import { useLeet } from "@taystack/use-leet";


const Example = () => {
  const [value, setValue, leetValue] = useLeet("dope hacks!");
  return (<>
    <input
      defaultValue={value}
      onChange={event => setValue(event.target.value)}
    />
    <div>{leetValue}</div>
  </>);
}
// => ( react fragment )
// <input />
// <div>d0p3 haxzorz</div>


const ExampleWithCustomLeetMap = () => {
  const leetMap = { c: "¢" };
  const [stateValue, stateValueSetter, leetValue] = useLeet("nice zeebra dude", leetMap);
  return (<div>{leetValue}</div>);
}
/* => <div>n1¢3 z33br4 d00d</div> */
```

## Setting your `leetMap` globally

It's possible to just set your optional `leetMap` from an exported global `UseLeet`. Once this is done, you don't have to worry about providing it in the hook.

```jsx
import UseLeet from "@taystack/use-leet";

import App from "./App";

const customLeetMap = { c: "¢" };
UseLeet.setMap(customLeetMap); // <- set it and forget it

ReactDOM.render(<App />, document.getElementById('root'))
```

## default export `useLeet`

`const [STRING value, FUNC setValue, STRING leetValue] = useLeet ( STRING defaultValue [, customLeetMap HASH ])`

This is essentially `const [value, setValue] = useState("")` but with an extra returned item `leetValue`.

| argument |  type | effect | required | default value |
|---|---|---|---|---|
| `defaultValue` | `STRING`| The value to initialize with | No | "" |
| `customLeetMap` | `HASH` | {`key`/`value`} pairs to override default leet map | No | {} |


| returns | type | effect |
|---|---|---|
| `value` | `STRING`| This is [`value`, _] = useState(`defaultValue`) |
| `setValue` | `FUNC` | This is [`value`, `setValue`] = useState(`defaultValue`), re-converts `leetValue` automatically |
| `leetValue` | `STRING` | The converted 7334 |




## License

MIT © [taystack](https://github.com/taystack)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
