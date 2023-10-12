const eqArrays = require(`./eqArrays`);

const assertArraysEqual = function(array1, array2) {
  
  if (eqArrays(array1, array2) === true) {

    console.log("The submitted arrays are identical.");
  }

  if(eqArrays(array1, array2) === false) {

    console.log("Uh oh! the submitted arrays are not identical.")
  }



}

module.exports = assertArraysEqual;