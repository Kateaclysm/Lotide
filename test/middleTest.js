const middle = require(`../middleFunction`);
const assertArraysEqual = require(`../assertArraysEqual`);


console.log(middle([1,2,3,4,5,6]));
console.log(middle([1,2,3,4,5]));
assertArraysEqual(middle([1,2,3,4]), [2,3]);