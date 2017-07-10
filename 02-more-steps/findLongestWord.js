/*

findLongestWord()

Write a function findLongestWord() that takes an
array of words and returns the length of the longest one

*/

function findLongestWord (str) {
  var words = str.split(' ')
  // method
  function sortByLength (strA, strB) {
    if (strA.length < strB.length) {
      return 1
    } else if (strA.length > strB.length) {
      return 0
    } else {
      return -1
    }
  }
  // de mayor a menor y te quedas con la primera que es la mayor
  words = words.sort(sortByLength)[0]
  return words
}

findLongestWord('Hola que tal soy Toni skylabcoder')
