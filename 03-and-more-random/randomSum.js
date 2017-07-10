/***

randomSum()

Randomizes a number (range 1000 .. 9999 )
and calculate the sum of its digits. For instance,
if the randomized number was 1049, program should print 14

***/

function randomSum () {
  function generatesRandom () {
    return Math.floor((Math.random() * (9999 - 1000 + 1)) + 1000)
  }
  function sumStrings (acc, num) {
  	return (+acc) + (+num)
  	// return parseInt(acc,10) + parseInt(num,10)
  }
  var rndNumber = generatesRandom()
  return rndNumber.toString().split('').reduce(sumStrings)
}
randomSum()
