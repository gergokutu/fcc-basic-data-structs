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
console.log(htmlColorNames(
  ['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']
));

// slice() to copy/extract
function forecast(arr) {
  return arr.slice(2, 4);
}
console.log("Should be [ 'warm', 'sunny' ] >",
  forecast(
    ['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']
  )
);

// Copy an array with the spread operator
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    newArr.push([...arr]);
    num--;
  }
  return newArr;
}
console.log("Result:", copyMachine([true, false, true], 2));

// Combine arrays with the spread operator
function spreadOut() {
  let fragment = ["to", "code"];
  let sentence = ["learning", ...fragment, "is", "fun"];
  return sentence;
}
// And use replace to make the first letter to uppercase
console.log("Should be 'Learning to code is fun' >",
  spreadOut()
    .join(" ")
    .replace(/(^\w)/, match => match.toUpperCase()) + "!"
);

// Check the presence with indexOf
function quickCheck(arr, elem) {
  return arr.indexOf(elem) === -1 ?
    false :
    true;
}
console.log("Should be false >",
  quickCheck(['squash', 'onions', 'shallots'], 'mushrooms')
);

// If the subarray contains the passed element
// Remove the subarray from the array
// Use for loop!
function filteredArray(arr, elem) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) === -1) newArr.push(arr[i]);
  }

  return newArr;
}
console.log("Should be [] >",
  filteredArray([
    [3, 2, 3],
    [1, 6, 3],
    [3, 13, 26],
    [19, 3, 9]], 3)
);