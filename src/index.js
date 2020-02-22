import { useState, useMemo } from "react";
import { defaultLeetMap } from "./config";
import useGeneratedLeet from "./useGeneratedLeet";


export default (global.UseLeet || (global.UseLeet = new UseLeetGlobal()));

function UseLeetGlobal() {
  this.map = { ...defaultLeetMap };
  this.generator = false;
}

export class UseLeetError extends Error {
  constructor(msg, arg) {
    const str = `${msg} - you provided`;
    try { super(`${str} ${arg.toString()}`);
    } catch(e) { super(`${str} something... something unprintable.`); }
  }
}

export class UseLeetCustomMapError extends UseLeetError {
  constructor(arg) { super("UseLeet expects customMap to be of a shape { CHAR_A: CHAR_A_RETURNS }", arg); }
}

export class UseLeetCustomGeneratorError extends UseLeetError {
  constructor(arg) {
    super("UseLeet expects customGenerator to be of type FUNC", arg);
  }
}

UseLeetGlobal.prototype.setMap = function(customLeetMap) {
  if (customLeetMap.constructor !== Object) throw new UseLeetCustomMapError(customLeetMap);
  Object.keys(customLeetMap).forEach(k => {
    if (typeof customLeetMap[k] !== "string") throw new UseLeetCustomMapError(customLeetMap[k]);
  });
  this.map = {
    ...defaultLeetMap,
    ...customLeetMap,
  };
}

UseLeetGlobal.prototype.setGenerator = function(generator) {
  if (typeof generator !== "function") throw new UseLeetCustomGeneratorError(generator);
  this.generator = generator;
}

UseLeetGlobal.prototype.resetGenerator = function() {
  this.generator = false;
}

UseLeetGlobal.prototype.getMap = function() {
  return this.map;
}

UseLeetGlobal.prototype.resetMap = function() {
  this.map = { ...defaultLeetMap };
}

export function useLeet( defaultValue = "", custom = {} ) {

  // Store the plain text stuff
  const [ value, setValue ] = useState(defaultValue);

  // Memoize the map used for leet-ifying
  const leetMap = useMemo(() => {
    return {
      ...UseLeet.getMap(),
      ...custom,
    };
  }, [custom]);

  // Memoize the generated leet
  const leet = useGeneratedLeet(value, leetMap, UseLeet.generator);

  return [ value, setValue, leet ];
}
