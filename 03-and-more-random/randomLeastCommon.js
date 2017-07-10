/***

randomLeastCommon()

Randomizes two numbers and prints their least common multiplication of them.
(use http://en.wikipedia.org/wiki/Least_common_multiple for details)
Randomizes two numbers and prints their average and standard deviation.

*/

function randomLeastCommon () {
  function generatesRandom () {
    return Math.floor((Math.random() * (9999 - 1000 + 1)) + 1000)
  }

  function lcm (num1, num2) {
    function gcd (num1, num2) {
      var result = 0
      if (num2 === 0) {
        result = num1
      } else {
        result = gcd(num2, num1 % num2)
      }
      if (result === 1) return 'There is no common divisor greater than 1'
      else return result
    }
    var abs = Math.abs(num1) * Math.abs(num2)
    var gcdResult = gcd(num1, num2)
    var result = abs / gcdResult
    return result
  }
  var [rndNum1, rndNum2] = [generatesRandom(), generatesRandom()]
  console.log(rndNum1, rndNum2)
  return lcm(rndNum1, rndNum2)
}
randomLeastCommon()
