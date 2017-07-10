/***

Write a JavaScript function that returns a passed string with letters in alphabetical order

Example string : 'webmaster'
Expected Output : 'abeemrstw'

Assume punctuation and numbers symbols are not included in the passed string.

***/

function sortLetters (str) {
  var regNotLetters = /[^a-zA-Z]/g
  var onlyLetters = str.replace(regNotLetters, '')
  return onlyLetters.split('').sort().join('')
}
sortLetters('webm\'ds>as?t....er')
