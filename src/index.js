import { useState, useMemo } from "react";
import { defaultLeetMap } from "./config";
import useGeneratedLeet from "./useGeneratedLeet";


export default (global.UseLeet || (global.UseLeet = new UseLeetGlobal()));

function UseLeetGlobal() {
  this.map = { ...defaultLeetMap };
}

UseLeetGlobal.prototype.setMap = function(customLeetMap) {
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
