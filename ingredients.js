const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
console.log("\n\nWhile Loop Example\n");
let i = 0;
while (i < ingredients.length ) {
  console.log(ingredients[i]);
 i++
}

// Write a for loop that prints out the contents of ingredients:
console.log("\n\nFor Loop Example\n");
for (let x = 0; x < ingredients.length; x++) {
  console.log(ingredients[x]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
console.log("\n\nBackwards Loop Example\n" );
for (let y = ingredients.length - 1; y >= 0; y--) {
  console.log(ingredients[y]);
}