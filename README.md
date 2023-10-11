# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @kateaclysm/lotide`

**Require it:**

`const _ = require('@kateaclysm/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: Given an array, returns the item at the first index.
* `tail`: Given an array, returns an array containing every element after the first.
* `middle`: Given an array, finds the middle item (or two middle items) and returns them.
* `flatten`: Given an array, converts the array into a string.
* `countOnly`: Given an Array and a value to search for, will return a count of how many times the given value appears in the array.
* `countLetters`: Given a string, returns the amount of characters as a number.
* `letterPositions`: Given a string, converts the string to an array, and returns an object with key-value pairs that pertain to each letter in the string, and the index number(s) in which the letter appears.
* `map`: Given an array and a function, will execute the given function on every item in the array, and will return an array with only the items that pass the given function's parameters.
* `takeUntil`: Given an array and a callback function, returns an array that contains every item until the function is no longer satisfied.
* `without`: Given an array and a value, will return a new array with all of the specified values removed.
* `findKey`: Given an object and a callback function, executes the function on every key in the given object and returns the key that satified the function. If the function is not satisified, returns undefined.
* `findKeyByValue`: given an object and a value, returns an array of the object's keys that contain said value.