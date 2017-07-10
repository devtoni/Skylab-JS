/***

## Fibonacci Challenge

The fibonacci sequence is a mathematical sequence of integers.
By definition, the first two numbers in the Fibonacci sequence are 0 and 1,
and each subsequent number is the sum of the previous two.

0, 1, 1, 2, 3, 5, 8, 13, ..

Define a function called fibonacci with a single argument n The f
unction should return the nth number of the fibonacci sequence.

Hint: Use a recursive function

fn = fn-1 + fn-2

***/

function fibonacciNth (position) {
  if (position === 0) return 0
  if (position === 1) return 1
  return fibonacciNth(position - 1) + fibonacciNth(position - 2)
}
fibonacciNth(15) // 610
