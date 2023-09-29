const assertEqual = function(actual, expected) {

  if (actual === expected) {

    console.log(`✅✅✅ Assertion Passed! ${actual}  ===  ${expected}`);

  } else {

    console.log(`❌❌❌ Assertion FAILED! ${actual} !== ${expected}!`);
  }

}


const findKey = function (object, callback) {
  let keysArray = Object.keys(object);
  for (keys of keysArray) {
    if (callback(keys) === true) {
      console.log(keys);
      break;
    } else if (keysArray.indexOf(keys) === keysArray.length -1) {

      console.log(undefined);
      
  }
  
  
}
};
const testObject = { a: 1, b: 2, c: 3, d: 4};



findKey(testObject, (keys) => keys === "d")