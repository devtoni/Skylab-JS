/*

sum() & multiply()

Define a function sum() and a function multiply()
that sums and multiplies (respectively) all the numbers in an array of numbers.
For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.

*/

function sum () {
  var operators = Array.prototype.slice.call(arguments)[0]
  return operators.reduce((acc, el) => {
    return sum + el
  }, 0) // <- inicializas el sum
}

sum([1, 2, 3, 4])

function multiply () {
  var operators = Array.prototype.slice.call(arguments)[0]
  return operators.reduce((acc, el) => acc * el, 1)
}

multiply([1, 2, 3, 4])
