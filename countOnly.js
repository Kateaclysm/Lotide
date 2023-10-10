// allItems will be an Array of strings we need to sift through
// itemsToCount is an object that specifies what to count
let countOnly = function (allItems, itemsToCount) {
  const results = {}
  for (item of allItems) {
    console.log(item);
    
    if (itemsToCount[item]) {

    if (results[item]) {

      results[item]+= 1;

    } else {

      results[item] = 1;

    }
  }
  };
  


  return results;
}

module.exports = countOnly;
