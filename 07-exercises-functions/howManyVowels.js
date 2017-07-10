/***

## How many vowels

Write a JavaScript function that accepts a string as a parameter
and counts the number of vowels within the string
 Note : As the letter
'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.

Example string : 'The quick brown fox'
Expected Output : 5

***/

function howManyVowels (str) {
  var vowels = /[aeiou]/g
  var quantity = str.match(vowels)
  if (quantity) return quantity.length
  else return 0
}

howManyVowels('holatfhj898yugi8iyihih898889uuouoo80988t')
