const eqArrays = function(array1, array2){

  if (array1.length === array2.length) {

    for (let i = 0; i < array1.length; i++) {
      
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  }  else { 

    return false;
  
  };

    


}

const assertArraysEqual = function(array1, array2) {
  
  if (eqArrays(array1, array2) === true) {

    console.log("The submitted arrays are identical.");
  }

  if(eqArrays(array1, array2) === false) {

    console.log("Uh oh! the submitted arrays are not identical.")
  }



}

assertArraysEqual([1,2,4], [1,2,3]);