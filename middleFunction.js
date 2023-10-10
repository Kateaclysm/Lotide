const middle = function (inputArray) {
  let revisedArray = [];
  let length = inputArray.length;
  if (length <= 2){
    return revisedArray;
  }
  
  if (length % 2 === 0) {
    revisedArray.push(inputArray[length / 2 - 1]);
    revisedArray.push(inputArray[length / 2]);
  }
  if (length % 2 !== 0) {
    length = Math.round(inputArray.length / 2);
    revisedArray.push(length);
  }

  
  return revisedArray;
}

module.exports = middle;

