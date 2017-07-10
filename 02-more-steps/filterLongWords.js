/*

filterLongWords()

Write a function filterLongWords() that takes an array of
words and an integer i and returns the array of words that are longer than i.

*/

function filterLongWords (str, i) {
  var words = str.split(' ')
  var longerWords
  var filterByLength = function (word) {
    return word.length > i
  }
  longerWords = words.filter(filterByLength)
  return longerWords
}
filterLongWords('Hola que tal soy Toni skylabcoder', 4)
