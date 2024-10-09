function appendValue(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculate() {
  let expression = document.getElementById("display").value;

  // Handling exponentiation (^) manually
  expression = expression.replace("^", "**");

  try {
    document.getElementById("display").value = eval(expression);
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}
