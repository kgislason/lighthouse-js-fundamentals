const whichSchool = function(age) {
  // The function returns one of the following strings, based on the value of age:

  if (age < 13) {
    // Elementary School if age is below 13
    console.log("Elementary School");
  } else if (age >= 13 && age < 18) {
    // Secondary School if age is between 13 and 18 (both inclusive)
    console.log("Secondary School");
  } else {
    // Lighthouse Labs in all other cases.
    console.log("Lighthouse Labs");
  }
}

whichSchool(12);