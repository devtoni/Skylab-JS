/***

Is palindrome?

Write a JavaScript function that checks whether a passed string is palindrome or not
A palindrome is word, phrase, or sequence that reads the same backward as
forward, e.g., madam or nurses run.

***/

function isPalindrome (str) {
  var regex = /[^A-Za-z]/g
  var strToReverse = ''
  str = str.toLowerCase()
  str = str.replace(regex, '')
  strToReverse = str.split('').reverse().join('')
  return (str === strToReverse)
}
isPalindrome('Are we not pure? “No sir!” Panama’s moody Noriega brags. “It is garbage!” Irony dooms a man; a prisoner up to new era.')
