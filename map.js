const words = ["ground", "control", "to", "major", "tom"];


const map = function(array, callback) {
  const results = [];

  for(let item of array) {
   results.push(callback(item));
  }
  return results;
};





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

const assertArraysEqual = function(array1, array2) {
  
  if (eqArrays(array1, array2) === true) {

    console.log("The submitted arrays are identical.");
  }

  if(eqArrays(array1, array2) === false) {

    console.log("Uh oh! the submitted arrays are not identical.")
  }



}





const results1 = map(words, word => word[0]);

assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
