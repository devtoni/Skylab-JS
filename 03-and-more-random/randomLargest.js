/*
randomLargest()

Randomizes three numbers in range (0.. 100) and prints the largest one.
*/

function randomLargest () {
  var aNumbers = []
  var randomNumber = 0
  var randomGenerator = function () {
    return Math.floor((Math.random() * 100) + 0)
  }
  for (var i = 0; i < 3; i++) {
    randomNumber = randomGenerator()
    aNumbers.push(randomNumber)
  }
  return Math.max(...aNumbers)
}
randomLargest()
