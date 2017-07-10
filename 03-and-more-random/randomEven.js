/***
randomEven()
Randomizes a number (range 0..100), then prints all the
even numbers from 0 to the randomized.
***/

function randomEven () {
  var randomNumber = 0
  var randomGenerator = function () {
    return Math.floor((Math.random() * 100) + 0)
  }
  var listEvenNumbers = function (number) {
    for (var i = 0; i <= number; i++) {
      if (i % 2 === 0) {
        console.log(i)
      }
    }
  }
  randomNumber = randomGenerator()
  listEvenNumbers(randomNumber)
}
randomEven()
