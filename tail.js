//The Tail function takes the given array and uses the slice method to remove the first item, creating a shallow copy array that only contains the tail of the given array.
const tail = function(array) {

  let arrayTail = array.slice(1);
  return arrayTail;
};

module.exports = tail;