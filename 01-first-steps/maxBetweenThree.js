/* Define a function maxOfThree() that takes three
 numbers as arguments and returns the largest of them. */

/* Way 1 */

function maxOfThree (a, b, c) {
  // si a > b, a > c? si no, c es el mayor
  // si es que sí entonces a es mayor
  // si a < b, b > c? si no, c es el mayor
  // si es que si entonces b es mayor
  var biggest
  if (a > b) {
    if (a > c) {
      biggest = a
    } else {
      biggest = c
    }
  } else {
    if (b > c) {
      biggest = b
    } else {
      biggest = c
    }
  }
  return biggest
}

/* Way 2 */

function maxOfThree (a, b, c) {
  var numbers = arguments
  return Math.max(...numbers)
}
