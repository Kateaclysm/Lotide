const findKeyByValue = function (object, value) {
  let keysArray = Object.keys(object)
  let finalArray = [];

  for (const key of keysArray) {
    if (object[key] === value) {

      finalArray.push(key);

    }
  }
  if (finalArray.length === 0) {
    return undefined;
  }

  return finalArray;

};

module.exports = findKeyByValue;
 
// TEST OBJECT

/*const exampleObject = {
  a: 1,
  b: 2,
  c: 3,
  d: "string",
  e: false
}*/
// TEST CASES 
/*
console.log(findKeyByValue(exampleObject, "Kate"));
console.log(findKeyByValue(exampleObject, 1));
console.log(findKeyByValue(exampleObject, 2));
console.log(findKeyByValue(exampleObject, 3));
console.log(findKeyByValue(exampleObject, false));
console.log(findKeyByValue(exampleObject, "Goop"));*/
