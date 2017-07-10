/****

randomOddSmallers()

Randomizes a number (range 0..100), then prints all the odd numbers
from 40 to that one. If the number was smaller than 40,
print all the numbers down to the randomized one
(i.e. if the result was 37, you should print: 40, 39, 38, 37)

****/

function randomOddSmaller () {
  var randomGenerator = function () {
    return Math.floor((Math.random() * 100) + 0)
  }
  var printNumbers = function (number) {
    if (number < 40) {
      for (let i = 40; i >= number; i--) {
        console.log(i)
      }
    } else {
      for (let i = 41; i <= number; i++) {
        if (i % 2) {
          console.log(i)
        }
      }
    }
  }
  var rndNumber = randomGenerator()
  return printNumbers(rndNumber)
}
randomOddSmaller()
