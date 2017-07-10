/*

charFreq()

Write a function charFreq() that takes a string and builds a frequency
listing of the characters contained in it. Represent the frequency listing
as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").

*/

function charFreq (str) {
  var lettersRepeated = {}
  for (var i = 0; i < str.length; i++) {
    if (lettersRepeated[str[i]] === undefined) {
      lettersRepeated[str[i]] = 1
    } else {
      lettersRepeated[str[i]]++
    }
  }
  return lettersRepeated
}

charFreq('abbakkkkkaaaaaaabbaaa')

// por defecto el objeto dara undefined con la primera letra ya que es ese momento no tiene valor
// le asigno el valor de uno, creando asi el par letra y numero repetido
// si al pasar a la siguiente es la misma letra, ya no dara undefined, por lo que para al else que lo que hace es sumarle uno al valor

// Way 2 //

function charFreq (text) {
  var lettersRepeated = {}
  var letters = text.split('')
  letters.forEach((char) => {
    if (lettersRepeated[char]) lettersRepeated += 1
    else lettersRepeated[char] = 1
  })
  return lettersRepeated
}

function charFreq (text) {
  return text.split('').reduce(function (oFrequency, char) {
    if (oFrequency[char]) oFrequency[char]++
    else oFrequency[char] = 1
    return oFrequency
  }, {}) // <- puedes inicializar con objetos o lo que necesites
}
