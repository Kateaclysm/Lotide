const findKey = function (object, callback) {
  let keysArray = Object.keys(object);
  for (keys of keysArray) {
    if (callback(keys) === true) {
      console.log(keys);
      break;
    } else if (keysArray.indexOf(keys) === keysArray.length -1) {

      console.log(undefined);
      
  }
  
  
}
};
module.exports = findKey;