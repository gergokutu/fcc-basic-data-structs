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