/*

encodeWord

Define a function called ​encodeWord​ that receives a string and
return the codified version of that string replacing the following characters:

7 instead of T
4 instead of A
5 instead of S
0 instead of O

*/

function encodeWord (str) {
  var letters = {
    T: 7,
    A: 4,
    S: 5,
    O: 0
  }
  for (var i in letters) {
    str = str.replace(new RegExp(i, 'g'), letters[i])
  }
  return str
}

encodeWord('HOLAQUETAL')

/* i va tomando los valores T,A,S,O dentro de str, si i coincide con alguna letra,
le pasamos regex de forma global 'g', y sustituimos por el valor que coincide con la property */
