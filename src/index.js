import { useState, useMemo } from "react";
import { defaultLeetMap } from "./config";
import useGeneratedLeet from "./useGeneratedLeet";


export default function useLeet( defaultValue = "", custom = {} ) {

  // Store the plain text stuff
  const [ value, setValue ] = useState(defaultValue);

  // Memoize the map used for leet-ifying
  const leetMap = useMemo(() => {
    return {
      ...defaultLeetMap,
      ...custom,
    };
  }, [custom]);

  // Memoize the generated leet
  const leet = useGeneratedLeet(value, leetMap);

  return [ value, setValue, leet ];
}
