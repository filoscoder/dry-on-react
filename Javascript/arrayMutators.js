/*
# Returns 2 arrays filtered by a given callback conditional logic
# Usage
import { biFilter } from "./utils";

const numArr = [10, 20, 30, 40, 50]
const [trueArray, falseArray] = biFilter(numArr, x => x > 25);
console.log(trueArray); // Output> [30, 40, 50]
console.log(falseArray); // Output> [10, 20]

*/

export const biFilter = (arr, cb) =>
  arr.reduce(
    ([T, F], current) => {
      if (cb(current)) return [[...T, current], F];
      else return [T, [...F, current]];
    },
    [[], []]
  );
