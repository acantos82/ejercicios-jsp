function addNumbers(numberOne, numberTwo) {
  return numberOne + numberTwo;
}

function subtractNumbers(numberOne, numberTwo) {
  return numberOne - numberTwo;
}

function multiplyNumbers(numberOne, numberTwo) {
  return numberOne * numberTwo;
}

function divideNumbers (numberOne, numberTwo) {
  return numberOne / numberTwo;
}

function calculator (numberOne, numberTwo, operation) {
  switch (opertaion){
    case "addition":
      addNumbers(numberOne, numberTwo);
    case "subtraction":
      subtractNumbers(numberOne, numberTwo);      
    case "multiplication":
      multiplyNumbers(numberOne, numberTwo);     
    case "division":
      divideNumbers(numberOne, numberTwo);   
  }
}