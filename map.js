const map = function(array, callback) {
  const results = [];

  for(let item of array) {
   results.push(callback(item));
  }
  return results;
};

module.exports = map;
/*const results1 = map(words, word => word[0]);

assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);*/
