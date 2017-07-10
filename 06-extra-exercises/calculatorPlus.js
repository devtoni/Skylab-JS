/**

Calculator Plus

Define a function called calculator that
receives an operation and several numbers
(can be 2 or 10 or whatever) returns the result
 of the operation applied to the values passed as
 parameters)

   calculator("suma",10,5,2,3) // 20
   calculator("resta",10,5,1) // 4
   calculator("multiplicacion",10,5,2) // 100
   calculator("division",10,5) // 2

**/

function calculatorPlus (parameters) {
  parameters = Array.prototype.slice.call(arguments) // copia arguments convertido a Array
  var [operator, ...operators] = parameters
  switch (operator) {
    case 'suma':
      return operators.reduce((n1, n2) => n1 + n2)
    case 'resta':
      return operators.reduce((n1, n2) => n1 - n2)
    case 'multiplicacion':
      return operators.reduce((n1, n2) => n1 * n2)
    case 'division':
      return operators.reduce((n1, n2) => n1 / n2)
    default:
      return 'unknown type of operation'
  }
}
calculatorPlus('multiplicacion', 4, 5, 6, 7, 8, 8)
