/*

encodeWordPlus

Improve the previous function to add a
random number between 0 and 1000 every 7 characters

*/

function encodeWordPlus (str) {
  var letters = {
    T: 7,
    A: 4,
    S: 5,
    O: 0
  }
  var random = Math.floor((Math.random() * 1000) + 1)
  // Si la property coincide con alguna letra de la str, la sustitye por el value de letters
  for (var i in letters) {
    str = str.replace(new RegExp(i, 'g'), letters[i])
  }

  if (str.length >= 7) {
    str = str.split('')
    for (var j = 7; j < str.length; j += 7) {
      str.splice(j, 0, random)
    }
    return str.join('')
  } else {
    return str
  }
}

encodeWordPlus('HOLAQ')
