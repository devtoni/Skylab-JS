/***

## Uppercase First Letter

Write a JavaScript function that accepts a string as a parameter
 and converts the first letter of each word of the string in upper case

Example string : 'the quick brown fox'
Expected Output : 'The Quick Brown Fox '

***/

function firstLetterUpperCase (str) {
  return str.split(' ').map(word => {
    var firstLetter = word[0]
    return word.replace(firstLetter, firstLetter.toUpperCase())
  }).join(' ')
}
