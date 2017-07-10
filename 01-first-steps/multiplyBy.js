/* Write a function that writes in the console the
multiplication table (in one column) of any number
passed as parameter */

function multiplyBy (n) {
  for (var i = 1; i <= 10; i++) {
    console.log(i * n)
  }
}
multiplyBy(10)
