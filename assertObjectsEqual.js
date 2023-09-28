const eqArrays = function(array1, array2) {

  if (array1.length === array2.length) {

    for (let i = 0; i < array1.length; i++) {
      
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  }  else {

    return false;
  
  }

    


}

const eqObjects = function(object1, object2) {
  let object1Array = Object.keys(object1);
  let object2Array = Object.keys(object2);


  if (object1Array.length !== object2Array.length) {
    return false;
  }
  for (const key of object1Array) {
    if (Array.isArray(object1[key]) === true && Array.isArray(object2[key]) === true) {
      if (eqArrays(object1[key], object2[key]) !== true) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};


const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;
  
    if (eqObjects(actual, expected) === true) {

      console.log(`✅✅✅ Assertion Passed! ${inspect(actual)} === ${inspect(expected)}!`);

    } else {

      console.log(`❌❌❌ Assertion FAILED! ${inspect(actual)} !== ${inspect(expected)}!`);
    }
};

const testObj1 = {a: 1, b: 2};
const testObj2 = {a: 1, b: 2};
const testObj3 = {a: 1, b: 2, c: 3};
const testObj4 = {a: 2, b: 1, c: 3}

assertObjectsEqual(testObj1, testObj2);
assertObjectsEqual(testObj1, testObj3);
assertObjectsEqual(testObj3, testObj4);