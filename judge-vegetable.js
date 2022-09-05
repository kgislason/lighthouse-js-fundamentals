// For this challenge, we'll need to implement a function called judgeVegetable()that will decide which vegetable is best based on a given judging characteristic. Our function will receive two parameters: a list of veggies(as an array of objects), and a characteristic to judge the veggies by (in the case of a tomato, either redness or plumpness).

const vegetables = [
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

const judgeVegetable = (vegetables, metric) => {
  // Our function must return the name of the person who submitted 
  // (vegetables.submitter) the vegetable with the highest ranking in the provided category.
  let highestRating = 0;
  let submitterName = "And the winner is";

  for ( let i = 0; i < vegetables.length; i++ ) {
    if (vegetables[i][metric] > highestRating) {
      highestRating = (vegetables[i][metric]);
      submitterName = (vegetables[i]["submitter"]);
    }
  }
  return submitterName;
};

console.log(judgeVegetable(vegetables, metric));