let display = document.getElementById('display');
let equation = '';

function appendValue(value) {
  equation += value;
  display.value = equation;
}

function clearDisplay() {
  equation = '';
  display.value = equation;
}

function calculate() {
  try {
    let result = eval(equation);
    equation = result.toString();
    display.value = equation;
  } catch (error) {
    display.value = 'Error';
  }
}
