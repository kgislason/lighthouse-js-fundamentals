/**
 * We've made a mistake, our researchers had already sorted the arrays for us, 
 * from least liked to most liked—but our concat function didn't take this into 
 * account. We'll need to create a new function that keeps our data sorted.
 */


// Define a function called merge
// The function should, when given two sorted arrays containing numbers, returns a sorted array of the numbers from both lists.
function merge(array1, array2) {
  let newArray = [];

  // Add the first array to new array
  for (let i = 0; i < array1.length; i++) {
    newArray.push(array1[i]);
  }

  //Add second array to new array
  for (let x = 0; x < array2.length; x++) {
    newArray.push(array2[x]);
  }

  return newArray.sort();
}

// Tests
console.log(merge([4, 5, 6], [1, 2, 3, 4]), "=?", [1, 2, 3, 4, 4, 5, 6]);
console.log(merge([4], [2, 5, 8]), "=?", [2, 4, 5, 8]);
console.log(merge([1, 2, 6], []), "=?", [1, 2, 6]);