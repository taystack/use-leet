import { useMemo, useState } from 'react';

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var defaultLeetMap = {
  a: "4",
  b: "b",
  c: "c",
  d: "d",
  e: "3",
  f: "f",
  g: "g",
  h: "h",
  i: "i",
  j: "j",
  k: "k",
  l: "1",
  m: "m",
  n: "n",
  o: "0",
  p: "p",
  q: "q",
  r: "r",
  s: "5",
  t: "7",
  u: "u",
  v: "v",
  w: "w",
  x: "x",
  y: "y",
  z: "z",
  "1": "L",
  "2": "Z",
  "3": "E",
  "4": "A",
  "5": "S",
  "6": "b",
  "7": "T",
  "8": "B",
  "9": "g",
  "0": "o",
  "!": "zorz",
  // Preserved items,
  "…": "ness"
};

// otherwise return the letter.

function getLeetValue(letter) {
  var leetMap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultLeetMap;
  var leetValue = leetMap[letter.toLowerCase()];
  return leetValue ? leetValue : letter;
}

function useGeneratedLeet(value) {
  var leetMap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultLeetMap;
  // Memoize the generated leet when either VALUE or LEET_MAP changes
  return useMemo(function () {
    // Get some words out that transpile to characters
    var subbedValue = value; // Point at 'ness' with a safe-ish character.

    subbedValue = subbedValue.replace(/ness/gi, "…"); // own -> pwn

    subbedValue = subbedValue.replace(/own/gi, "pwn"); // and, banned, sandbox -> &, b&, &box

    subbedValue = subbedValue.replace(/and|anned/gi, "&"); // replace past participles (ed) WORDed -> WORDd

    subbedValue = subbedValue.replace(/ed\b/gi, "d"); // dude -> dood, dudes -> doodz

    subbedValue = subbedValue.replace(/dudes/gi, "doodz");
    subbedValue = subbedValue.replace(/dude/gi, "dood"); // fool -> foo

    subbedValue = subbedValue.replace(/fool/gi, "foo"); // Some people need help with 'you're a' from 'your a'. I'm a nice guy

    subbedValue = subbedValue.replace(/you\sare\sa|you\'re\sa|your\sa/gi, "you a"); // you -> joo

    subbedValue = subbedValue.replace(/\byou/gi, "joo"); // my -> mah

    subbedValue = subbedValue.replace(/\bmy\b/gi, "mah"); // [...greetings] -> jo

    subbedValue = subbedValue.replace(/yo|hi|hey|hello|sup|what\'s\sup|what\sis\sup/gi, "jo"); // Not a noob, but a newb.

    subbedValue = subbedValue.replace(/new\sperson/gi, "newb"); // hacks -> hax

    subbedValue = subbedValue.replace(/hacks/gi, "hax"); // Generate the gibberish...

    var generatedLeet = subbedValue.split("").map(function (letter) {
      return getLeetValue(letter, leetMap);
    }).join(""); // Memoize the generated leet

    return generatedLeet;
  }, [value, leetMap]);
}

function useLeet() {
  var defaultValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var custom = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  // Store the plain text stuff
  var _useState = useState(defaultValue),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1]; // Memoize the map used for leet-ifying


  var leetMap = useMemo(function () {
    return _objectSpread2({}, defaultLeetMap, {}, custom);
  }, [custom]); // Memoize the generated leet

  var leet = useGeneratedLeet(value, leetMap);
  return [value, setValue, leet];
}

export default useLeet;
//# sourceMappingURL=index.es.js.map
