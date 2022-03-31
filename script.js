//Numbers
const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    })
});

const calculatorScreen = document.querySelector(".calculator-screen");

const updateScreen = (number) => {
    calculatorScreen.value = number;
};

let prevNumber = "";
let calculationOperator = "";
let currentNumber = "0";

const inputNumber = (number) => {
    if (currentNumber === "0") {
        currentNumber = number;
    } else {
        currentNumber += number;
    }
};

//Operators
const operators = document.querySelectorAll(".operator");

const inputOperator = (operator) => {
    if(calculationOperator === "") {
        prevNumber = currentNumber;
    }
    calculationOperator = operator;
    currentNumber = "0";
};

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value);
    })
});

//Equal & Calculate
const equalSign = document.querySelector(".equal-sign");

const calculate = () => {
    let result = "";
    switch(calculationOperator) {
        case "-":
            result = prevNumber - currentNumber;
            break;
        case "*":
            result = prevNumber * currentNumber;
            break;
        case "/":
            result = prevNumber / currentNumber;
            break;
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        default:
            return;
    }
    currentNumber = result;
    calculationOperator = "";
};

equalSign.addEventListener("click", () => {
    calculate();
    updateScreen(currentNumber);
});

//ClearAll
const clearBtn = document.querySelector(".all-clear");

clearBtn.addEventListener("click", () => {
    console.log("AC button is pressed");
});

const clearAll = () => {
    prevNumber = "";
    calculationOperator = "";
    currentNumber = "0";
};

clearBtn.addEventListener("click", () => {
    clearAll();
    updateScreen(currentNumber);
});

//Decimal
const decimal = document.querySelector(".decimal");

inputDecimal = (dot) => {
    currentNumber += dot;
};

decimal.addEventListener("click", (event) => {
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
});

inputDecimal = (dot) => {
    if (currentNumber.includes(".")) {
        return;
    }
    currentNumber += dot;
};

//Percentage
const percentage = document.querySelector(".percentage");

percentage.addEventListener("click", (event) => {
  inputPercentage(event.target.value);
  updateScreen(currentNumber);
});

const inputPercentage = (percentage) => {
  if (currentNumber.includes("%")) {
    return;
  }
  var divided = currentNumber / 100;
  console.log("divided", divided);
  if (calculationOperator === "*" || calculationOperator === "/") {
    console.log("x");
    currentNumber = divided;
  } else {
    console.log("else", calculationOperator);
    currentNumber = (currentNumber * prevNumber) / 100;
  }
};
