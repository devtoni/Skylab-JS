/***

## Longest Word

Write a JavaScript function that accepts a string as a parameter and find the longest word within the string

Example string : 'Web Development Tutorial'
Expected Output : 'Development'

***/

function longestWord (str) {
  return str.split(' ').sort((word1, word2) => word2.length > word1.length)[0]
}
longestWord('web development')
