/*const testArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
const testArray2 = ["Having", "a", "very", ",", "very", "nice", "day"];*/


const takeUntil = function(array, callback) {
  returnedArray = [];
  for (item of array) {
    if (callback(item) === false) {
      returnedArray.push(item)
    }else break;
  }
  console.log(returnedArray);
};

module.exports = takeUntil;
/*
takeUntil(testArray1, (item) => item >= 6 );
takeUntil(testArray2, (item) => item === ",")*/