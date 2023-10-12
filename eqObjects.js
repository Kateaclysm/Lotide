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
};
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







const assertEqual = function(actual, expected) {

  if (actual === expected) {

    console.log(`✅✅✅ Assertion Passed! ${actual}  ===  ${expected}`);

  } else {

    console.log(`❌❌❌ Assertion FAILED! ${actual} !== ${expected}!`);
  }
};



const longSleeveShirtObject= { size: "medium", name: "red"}; 
const multiColorShirtObject = { colors: ["red", "purple"], size: "medium" };
const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
const differentMultiColorShirtObject = { size: "medium", colors: ["orange", "red"]}

assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true );
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);
console.log(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject )); //This one should output "true"
console.log(eqObjects(multiColorShirtObject, differentMultiColorShirtObject )); //this one should output "false"