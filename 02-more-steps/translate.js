/*

translate()

Write a function translate() that will translate a text into
"rövarspråket". That is, double every consonant and
place an occurrence of "o" in between. For example,
translate("this is fun") should return the string "tothohisos isos fofunon".

*/

function translate (str) {
  var isConsonant = function (char) {
    var reg = /[^aeiou ]/
    return reg.test(char)
  }
  var newWord = ''
  for (var i = 0; i < str.length; i++) {
    if (isConsonant(str[i])) {
      newWord += str[i] + 'o' + str[i]
    } else {
      newWord += str[i]
    }
  }
  return newWord
}

translate('this is fun') // tothohisos isos fofunon

// Way 2

function translate (str) {
  return str.replace(/[^aeiou 0-9]/g, '$&o$&')
}

// Way 3
function translate (str) {
  return str.replace(/[b-df-hj-np-tv-z]/gi, '$&o$&')
}
