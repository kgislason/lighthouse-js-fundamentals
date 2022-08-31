/**
 * Creating a long array of repeating numbers can be a time consuming task. 
 * Imagine creating an array of every even number from 0 to 100. In this 
 * challenge, we will build a function that creates an array like this for a 
 * given start, end, and step parameter.
 */

  // The function should return an empty array [] if given incorrect parameters, such as:
  // - start, end, or step being undefined
  // - start being greater than end
  // - step being 0, or negative

function range(start, end, step) {
  let result = [];
  if (start === undefined || end === undefined || step === undefined || start > end || step <= 0 || isNaN(start) || isNaN(end) || isNaN(step)) {
    console.log("Oops! There is something wrong with the numbers you gave me");    
  } else {
    for(let i = start; i <= end; i = i + step) {
      result.push(i);
    }
  }
  return result;
}

console.log(range(0,10,2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
console.log(range());
console.log(range(0, 0, 0));
console.log(range(-3, 100, -3));
console.log(range(0, 8, 2));