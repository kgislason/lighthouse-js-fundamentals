/**
 * In this challenge, we will be building a function that determines the last 
 * index of an item in an array.
 */

// Define a function lastIndexOf.
// When this function is given an array and a value, it should return the index of the last time the value occurs in the array. If the value never occurs, the function should return -1.

const lastIndexOf = (array, value) => {
  let result = [];
  for (let x = 0; x < array.length; x++) {
    if (value === array[x]) {
      result.push(x);
    }

  }
  if (result.length === 0) {
    return -1;
  } else {
    return result[(result.length - 1)];
  }
}

// Test cases

console.log(lastIndexOf([0, 1, 4, 1, 2], 1));	// expected result 3
console.log(lastIndexOf([0, 1, 4, 1, 2], 2));	// expected result 	4
console.log(lastIndexOf([0, 1, 4, 1, 2], 3));	// expected result	-1
console.log(lastIndexOf([5, 5, 5], 5));	// expected result	2
console.log(lastIndexOf([], 3));	// expected result	-1
console.log(lastIndexOf([0, 1, 4, 1, 2], 1), "=?", 3);
console.log(lastIndexOf([0, 1, 4, 1, 2], 2), "=?", 4);
console.log(lastIndexOf([0, 1, 4, 1, 2], 3), "=?", -1);
console.log(lastIndexOf([5, 5, 5], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);