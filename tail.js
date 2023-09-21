const assertEqual = function(actual, expected) {

  if (actual === expected) {

    console.log(`✅✅✅ Assertion Passed! ${actual}  ===  ${expected}`);

  } else {

    console.log(`❌❌❌ Assertion FAILED! ${actual} !== ${expected}!`);
  }

};

//The Tail function takes the given array and uses the slice method to remove the first item, creating a shallow copy array that only contains the tail of the given array.
const tail = function(array) {

  let arrayTail = array.slice(1);
  return arrayTail;
};

//Testing the assertEqual function with the tail function here:
// -------------------------------------------------------------------

const result = tail(["Hello", "Lighthouse", "Labs"]);

//The line above is creating a variable that stores the tail function's result.

assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");