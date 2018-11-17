//Finds the longest word in a string

function findLongestWordLength(str) {
  let strArr = str.split(" ");
  let longestWord = "";
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].length > longestWord.length) {
      longestWord = strArr[i];
    }
  }
  return longestWord.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");