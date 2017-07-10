/***

randomOne()

Randomizes a number (range 1000..9999) and calculate the sum of its digits
repeatedly until you reach one digit only. For instance,
 if the randomized number was 1049, program should print 5

 ***/

function randomOne () {
  function generatesRandom () {
    return Math.floor((Math.random() * (9999 - 1000 + 1)) + 1000)
  }

  function sumStrings (acc, num) {
    return (+acc) + (+num)
      // return parseInt(acc,10) + parseInt(num,10)
  }

  function sumDigits (number) {
    var sum = number.toString().split('').reduce(sumStrings)
    var sumToString = sum.toString()
    if (sumToString.length >= 2) {
      return sumDigits(sum)
    } else {
      return sum
    }
  }
  var rndNumber = generatesRandom()
  return sumDigits(rndNumber)
}
randomOne()
