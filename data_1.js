let yourArray = [1, "two", true, undefined, null];
console.log("Length:", yourArray.length);

let myArray = ["a", "b", "c", "d"];
myArray[1] = "b - modified";
console.log(myArray);

// Add items > push() and unshift()
function mixedNumbers(arr) {
  // Only change code below this line
  arr.unshift('I', 2, 'three');
  arr.push(7, 'VIII', 9);
  // Only change code above this line
  return arr;
}
console.log(mixedNumbers(['IV', 5, 'six']));

// Remove items > pop() and shift()
function popShift(arr) {
  let popped = arr.pop(); // Change this line
  let shifted = arr.shift(); // Change this line
  return [shifted, popped];
}
console.log(popShift(['challenge', 'is', 'not', 'complete']));

// splice() for remove
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
const removed = arr.splice(1, 4);
console.log("Sum should be 10 >", arr.reduce((acc, curr) => acc + curr, 0));
console.log("Removed >", removed);

// splice() for add
// It has more params than 2...
function htmlColorNames(arr) {
  const startIndex = 0;
  const amountToDelete = 2;

  arr.splice(startIndex, amountToDelete, 'DarkSalmon', 'BlanchedAlmond');

  return arr;
}
console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));