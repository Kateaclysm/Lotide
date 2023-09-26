// allItems will be an Array of strings we need to sift through
// itemsToCount is an object that specifies what to count
let countOnly = function (allItems, itemsToCount) {
  const results = {}
  for (item of allItems) {
    console.log(item);

    if (results[item]) {
      results[item]+= 1;
    } else {
      results[item] = 1;
    }
  };
  


  return results;
}


const firstNames = [ 
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];


const assertEqual = function(actual, expected) {

  if (actual === expected) {

    console.log(`✅✅✅ Assertion Passed! ${actual}  ===  ${expected}`);

  } else {

    console.log(`❌❌❌ Assertion FAILED! ${actual} !== ${expected}!`);
  }

};

const result1 = countOnly(firstNames, {"Jason": true, "Karima": true, "Fang": true, "Agouhanna": false});


assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);


