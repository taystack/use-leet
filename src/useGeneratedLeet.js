import { useMemo } from "react";
import { defaultLeetMap } from "./config";
import getLeetValue from "./getLeetValue";


export default function useGeneratedLeet( value, leetMap = defaultLeetMap ) {
  // Memoize the generated leet when either VALUE or LEET_MAP changes
  return useMemo(() => {

    // Get some words out that transpile to characters
    let subbedValue = value;

    // Point at 'ness' with a safe-ish character.
    subbedValue = subbedValue.replace(/ness/gi, "…");

    // own -> pwn
    subbedValue = subbedValue.replace(/own/gi, "pwn");

    // and, banned, sandbox -> &, b&, &box
    subbedValue = subbedValue.replace(/and|anned/gi, "&");

    // replace past participles (ed) WORDed -> WORDd
    subbedValue = subbedValue.replace(/ed\b/gi, "d");

    // dude -> dood, dudes -> doodz
    subbedValue = subbedValue.replace(/dudes/gi, "doodz");
    subbedValue = subbedValue.replace(/dude/gi, "dood");

    // fool -> foo
    subbedValue = subbedValue.replace(/fool/gi, "foo");

    // Some people need help with 'you're a' from 'your a'. I'm a nice guy
    subbedValue = subbedValue.replace(/you\sare\sa|you\'re\sa|your\sa/gi, "you a");

    // you -> joo
    subbedValue = subbedValue.replace(/\byou/gi, "joo");

    // my -> mah
    subbedValue = subbedValue.replace(/\bmy\b/gi, "mah");

    // [...greetings] -> jo
    subbedValue = subbedValue.replace(/yo|hi|hey|hello|sup|what\'s\sup|what\sis\sup/gi, "jo");

    // Not a noob, but a newb.
    subbedValue = subbedValue.replace(/new\sperson/gi, "newb");

    // hacks -> hax
    subbedValue = subbedValue.replace(/hacks/gi, "hax");

    // Generate the gibberish...
    const generatedLeet = subbedValue.split("").map(letter => getLeetValue(letter, leetMap)).join("");

    // Memoize the generated leet
    return generatedLeet;

  }, [value, leetMap]);
}
