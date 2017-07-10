/*

Define a function called ​isString​ that receives a value and return true if the value received is a string

   isString(3) // false
   isString("3") // true
   isString("asass") // true

*/

function isString (str) {
  return typeof str === 'string'
}

isString('hola')
