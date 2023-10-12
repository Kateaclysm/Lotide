const letterPositions = function (sentence) {
  
  const result = {};
  const newSentence = Array.from(sentence);
  
  for (let i = 0; i < newSentence.length; i++) {
    
    if (newSentence[i] !== " ") {

      if(result[newSentence[i]]) {

      result[newSentence[i]].push(i);

    } else {
        result[newSentence[i]] = [i]
      }
    }
  }
return result;
};
module.exports = letterPositions;