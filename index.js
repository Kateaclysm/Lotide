const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middleFunction');
const flatten = require('./flatten');
const countOnly = require ('./countOnly');
const countLetters = require('./countLetters');
const letterPositions = require('./letterPositions')
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');

module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  flatten: flatten,
  countOnly: countOnly,
  countLetters: countLetters,
  letterPositions: letterPositions,
  map: map,
  takeUntil: takeUntil,
  without: without,
  findKey: findKey,
  findKeyByValue: findKeyByValue
};