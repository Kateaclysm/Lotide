let countLetters = function(string) {
  let result = {};
  for (letter of string) {
    if (letter !== " ") {

    if (result[letter] === undefined) {

      result[letter] = 1;

    } else {
      result[letter] += 1;
    } 
  } 
  }
  return result;
}




