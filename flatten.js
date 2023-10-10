const flatten = function(array1) {
  let arrayStatus = array1;

  let flattenedArray = undefined;

  for (let i = 0; i < array1.length; i++) {
    if (Array.isArray(array1[i]) === true) {
    
      arrayStatus = true;

    }
   }

  if (arrayStatus === true) {

    flattenedArray = array1.flat();
  }

  return flattenedArray;

};
module.exports = flatten;

/*console.log(flatten([1, 2, 3, [4, 5, 6], [7, 8, 9]]));*/