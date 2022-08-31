// Do not modify these first two lines
const iceCreamFlavours = ["chocolate", "vanilla", "cookies and cream", "rocky road", "strawberry"];
console.log(iceCreamFlavours);

// Your code below here...
// Step 1 - Add the flavour "root beer" to the array without modifying the original array. Then console.log the value of the entire array.
iceCreamFlavours.push("root beer");

// After adding "root beer" to the array, remember to console.log the value of the entire array. 
// This way you can view the output in the DevTools console. It also allows Compass to inspect the console and make sure you're doing it right :)
console.log(iceCreamFlavours);


// Use the Evaluate button to make sure that particular test passes before moving on to the next step.

// Step 2 - Get the First Flavour
// Someone wants the first flavour of ice cream.

// Instruction
// console.log the first flavour in the array.
console.log(iceCreamFlavours[0]);

// Step 4 Get the Last Flavour
// Someone wants the last flavour of ice cream.

// Instruction
// console.log the last flavour in the array
console.log(iceCreamFlavours[(iceCreamFlavours.length - 1)]);

// This should come out to be "root beer". Index it from the array, do not hard-code the value by just doing console.log("root beer").

// Use the Evaluate button to make sure that particular test passes, and that the previous steps' tests continue to pass as well, before moving on to the next step.

// Step 4 Total Number of Flavours
// Someone wants to know how many options there are.

// Instruction
// console.log the resulting number of flavours in the array
console.log(iceCreamFlavours.length);

// This should come out to be 6 at that point. Again, do it programatically by asking the array for its size, do not hard-code the value by just doing console.log(6).

// Use the Evaluate button and hopefully, you will have no remaining failures. And just like that, we're done with the ice cream.

