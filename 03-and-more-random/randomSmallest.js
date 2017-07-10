/***

randomSmallest()

Randomizes two numbers and prints the smallest number that is
greater than one, such that both numbers are divided by
it with no remainder. For instance, for 9 and 6 you should print 3.
If there isn't one a proper note should be printed.

***/

function randomSmallest () {
  function mcd (num1, num2) {
    var result = 0
    if (num2 === 0) {
      result = num1
    } else {
      result = mcd(num2, num1 % num2)
    }
    if (result === 1) return 'There is no common divisor greater than 1'
    else return result
  }

  function generatesRandom () {
    return Math.floor((Math.random() * (9999 - 1000 + 1)) + 1000)
  }
  var [num1, num2] = [generatesRandom(), generatesRandom()]
  return mcd(num1, num2)
}
randomSmallest()
