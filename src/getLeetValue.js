import { defaultLeetMap } from "./config";


// Return the mapped value if it exists.
// otherwise return the letter.
export default function getLeetValue(letter, leetMap = defaultLeetMap) {
  let leetValue = leetMap[letter.toLowerCase()];
  return leetValue ? leetValue : letter;
}
