/***

Integer Numbers Range

Write a function in Javascript that having
two integers x1 and x2 returns all the integers between them.
If x2 es lower than x1 it should return -1

***/

function integerNumberRange (int1, int2) {
  var aNumbers = []
  if (int1 > int2) return -1
  while (int2 >= int1) {
    aNumbers.push(int2)
    int2--
  }
  return aNumbers
}

integerNumberRange(5, 10)
