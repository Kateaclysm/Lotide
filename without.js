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
};
module.exports = without;