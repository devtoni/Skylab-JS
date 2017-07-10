/***
randomRandom()

Randomizes a number n in range 0..100.
Now randomizes n more numbers in that range,
printing the largest of them.

***/

// number between 0 and 100

// create an array of number length with random numbers

// then choose the largest

function randomRandom () {
  function generatesRandom () {
    return Math.floor((Math.random() * 100) + 0)
  }
  function generateArrayOfRndNumbers (length) {
    return Array.apply(null, { length: length }).map(Function.call, generatesRandom)
  }
  var rndNumber = generatesRandom()
  var aRndNumbers = generateArrayOfRndNumbers(rndNumber)
  var maxNumber = Math.max(...aRndNumbers)
  console.log(maxNumber)
}
randomRandom()
