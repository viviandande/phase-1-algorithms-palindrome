function reverse(word){
  const wordInArray = word.split("")
  const reversedLettersArray = wordInArray.reverse()
  reversedWord = reversedLettersArray.join("")
  return reversedWord
}

function isPalindrome(word) {
  // Write your algorithm here
  //reverse the input String
  const reverseWord = reverse(word)
  if (word === reverseWord){
    return true
  } else {
    return false
  }
}


  // Write your algorithm here

reverse the input's string 
/*
  Add your pseudocode here
*/
Add your pseudocode here
means that if the wors is the same as the word in reverse, I should return true
reverse the string
if the input is the same as the reversed input return true
else return false
/*
  Add written explanation of your solution here
*/
a function isPalindrome will receive an a single argument of string type
the function should return true if the string is a palindrome
else return false if it is not a palindrome
if the a word reads the same forward and backwards, it is a palindrome
dad === dad //true
kayak === kayak //true
pray === pray //false

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
