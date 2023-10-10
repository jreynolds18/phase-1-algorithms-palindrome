function isPalindrome(word) {
  let backwardsWord = word.split('').reverse().join('');
  if (word === backwardsWord) {
    return true;
  } else if (word !== backwardsWord) {
    return false;
  }
}

/* 
  I need a function that returns true or false based on an input
    Take every letter, split it apart, put it in an array
    Rejoin the letters into a word and no longer an array
    If that word is the same as before it was split apart, returns true
    If that word is not the same as before it was split, returns false
*/

/*
  First, I created a backwardsWord variable, where I used methods to split the input word into letters in an array, reversed the array, and rejoined it into a string.
  If the word is the same as the backwardsWord, it is true and therefore a palindrome
  If the word is not the same as the backwardsWord, it is false and not a palindrome.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
