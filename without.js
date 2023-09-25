const without = function(source, itemsToRemove) {

  let result = [];

  let foundStatus = false;

  for (let i = 0; i < source.length; i++) {
    
   
    for (value of itemsToRemove) {

      if (value === source[i]) {

        foundStatus = true;

      } 
      
      

    } 
   

    
    if (foundStatus === false) {

      result.push(source[i]);

    }
  
    foundStatus = false;    

  }
  
  return result;
}

  



const sampleArray = [1,2,3,4,5];

console.log(without(sampleArray, [1,3,5]));