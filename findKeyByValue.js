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