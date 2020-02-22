import { useMemo, useState } from 'react';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

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

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
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

// import { defaultLeetMap } from "./config";
// otherwise return the letter.

function getLeetValue(letter, leetMap) {
  var leetValue = leetMap[letter.toLowerCase()];
  return leetValue ? leetValue : letter;
}

function useGeneratedLeet(value, leetMap) {
  // Memoize the generated leet when either VALUE, LEET_MAP, or UseLeet.generator changes
  return useMemo(function () {
    // Hotwire our way to the custom generator.
    if (UseLeet$1.generator) {
      return UseLeet$1.generator(value);
    } // Get some words out that transpile to characters


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
  }, [value, leetMap, UseLeet$1.generator]);
}

var UseLeet$1 = global.UseLeet || (global.UseLeet = new UseLeetGlobal());

function UseLeetGlobal() {
  this.map = _objectSpread2({}, defaultLeetMap);
  this.generator = false;
}

var UseLeetError =
/*#__PURE__*/
function (_Error) {
  _inherits(UseLeetError, _Error);

  function UseLeetError(msg, arg) {
    var _this;

    _classCallCheck(this, UseLeetError);

    var str = "".concat(msg, " - you provided");

    try {
      _this = _possibleConstructorReturn(this, _getPrototypeOf(UseLeetError).call(this, "".concat(str, " ").concat(arg.toString())));
    } catch (e) {
      _this = _possibleConstructorReturn(this, _getPrototypeOf(UseLeetError).call(this, "".concat(str, " something... something unprintable.")));
    }

    return _this;
  }

  return UseLeetError;
}(_wrapNativeSuper(Error));
var UseLeetCustomMapError =
/*#__PURE__*/
function (_UseLeetError) {
  _inherits(UseLeetCustomMapError, _UseLeetError);

  function UseLeetCustomMapError(arg) {
    _classCallCheck(this, UseLeetCustomMapError);

    return _possibleConstructorReturn(this, _getPrototypeOf(UseLeetCustomMapError).call(this, "UseLeet expects customMap to be of a shape { CHAR_A: CHAR_A_RETURNS }", arg));
  }

  return UseLeetCustomMapError;
}(UseLeetError);
var UseLeetCustomGeneratorError =
/*#__PURE__*/
function (_UseLeetError2) {
  _inherits(UseLeetCustomGeneratorError, _UseLeetError2);

  function UseLeetCustomGeneratorError(arg) {
    _classCallCheck(this, UseLeetCustomGeneratorError);

    return _possibleConstructorReturn(this, _getPrototypeOf(UseLeetCustomGeneratorError).call(this, "UseLeet expects customGenerator to be of type FUNC", arg));
  }

  return UseLeetCustomGeneratorError;
}(UseLeetError);

UseLeetGlobal.prototype.setMap = function (customLeetMap) {
  if (customLeetMap.constructor !== Object) throw new UseLeetCustomMapError(customLeetMap);
  Object.keys(customLeetMap).forEach(function (k) {
    if (typeof customLeetMap[k] !== "string") throw new UseLeetCustomMapError(customLeetMap[k]);
  });
  this.map = _objectSpread2({}, defaultLeetMap, {}, customLeetMap);
};

UseLeetGlobal.prototype.setGenerator = function (generator) {
  if (typeof generator !== "function") throw new UseLeetCustomGeneratorError(generator);
  this.generator = generator;
};

UseLeetGlobal.prototype.resetGenerator = function () {
  this.generator = false;
};

UseLeetGlobal.prototype.getMap = function () {
  return this.map;
};

UseLeetGlobal.prototype.resetMap = function () {
  this.map = _objectSpread2({}, defaultLeetMap);
};

function useLeet() {
  var defaultValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var custom = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  // Store the plain text stuff
  var _useState = useState(defaultValue),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1]; // Memoize the map used for leet-ifying


  var leetMap = useMemo(function () {
    return _objectSpread2({}, UseLeet.getMap(), {}, custom);
  }, [custom]); // Memoize the generated leet

  var leet = useGeneratedLeet(value, leetMap, UseLeet.generator);
  return [value, setValue, leet];
}

export default UseLeet$1;
export { UseLeetCustomGeneratorError, UseLeetCustomMapError, UseLeetError, useLeet };
//# sourceMappingURL=index.es.js.map
