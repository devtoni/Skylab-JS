/*

Define a function called ​isBoolean​ that receives a
value and return true if the value received is a boolean

   isBoolean(3) // false
   isBoolean("true") // false
   isBoolean(true) // true

*/

function isBoolean (bool) {
  return typeof bool === 'boolean'
}

isBoolean('pepe')
