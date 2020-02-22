import { useState, useMemo } from "react";
import { defaultLeetMap } from "./config";
import useGeneratedLeet from "./useGeneratedLeet";


export default (global.UseLeet || (global.UseLeet = new UseLeetGlobal()));

function UseLeetGlobal() {
  this.map = { ...defaultLeetMap };
}

class UseLeetCustomMapError extends Error {
  constructor(arg) {
    const str = "UseLeet expects customMap to be of a shape { STRING_A: STRING_A_RETURNS } - you provided ";
    try { super(`${str}${arg.toString()}`);
    } catch(e) { super(`${str}something... something unprintable.`); }
  }
}

UseLeetGlobal.prototype.setMap = function(customLeetMap) {
  Object.keys(customLeetMap).forEach(k => {
    if (typeof customLeetMap[k] !== "string") throw new UseLeetCustomMapError(customLeetMap[k]);
  });
  this.map = {
    ...defaultLeetMap,
    ...customLeetMap,
  };
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
  const leet = useGeneratedLeet(value, leetMap);

  return [ value, setValue, leet ];
}
