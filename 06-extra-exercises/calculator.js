// Calculator

/*******

Define a function called calculator that
receives an operation and two numbers and returns
the result of the operation applied to the values
passed as parameters

   calculator("suma",10,5) // 15
   calculator("resta",10,5) // 5
   calculator("multiplicacion",10,5) // 50
   calculator("division",10,5) // 2

********/

function calculator (operation, num1, num2) {
  switch (operation) {
    case 'suma':
      return num1 + num2
    case 'resta':
      return num1 - num2
    case 'multiplicacion':
      return num1 * num2
    case 'division':
      return num1 / num2
    default:
      return 'unknown type of operation'
  }
}

calculator('suma', 4, 5)
