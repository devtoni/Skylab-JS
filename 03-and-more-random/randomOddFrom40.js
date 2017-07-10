/****

randomOdd()

Randomizes a number (range 0..100),
then prints all the odd numbers from 40 to that one.
If the number was smaller than 40 nothing should be printed

****/

// debe crear un rango de 0 a 100
// imprimir todos los impares desde el 40 hasta el
// si el numero es menor, entonces nada

function randomOdd () {
  var randomGenerator = function () {
    return Math.floor((Math.random() * 100) + 0)
  }
  var listOddNumbers = function (number) {
    for (var i = 41; i <= number; i++) {
      if (i % 2) {
        console.log(i)
      }
    }
  }
  var randomNumber = randomGenerator()
  listOddNumbers(randomNumber)
}
randomOdd()

/* way 2 */

function randomOdd () {
  var randomGenerator = function () {
    return Math.floor((Math.random() * 100) + 0)
  }
  var isOdd = function (num) {
    return num % 2 !== 0
  }
  var randomNumber = randomGenerator()
  var aNumbers = []
  var length = 0
  if (randomNumber > 40) {
    length = randomNumber - 40
    aNumbers = Math.pow(2, length).toString(2).split('').map((i, j) => j + 40).filter(isOdd)
  }
  return aNumbers
}
randomOdd()
