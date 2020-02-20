// import { defaultLeetMap } from "./config";
import UseLeet from "./";


// Return the mapped value if it exists.
// otherwise return the letter.
export default function getLeetValue(letter, leetMap) {
  let leetValue = leetMap[letter.toLowerCase()];
  return leetValue ? leetValue : letter;
}
