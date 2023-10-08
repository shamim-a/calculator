let x = document.getElementById("title");
x.innerText = "Design a Simple Calculator";
x.style.textAlign = "center";
let display = document.getElementById('display');
let history = document.getElementById('history');
let currentInput = '';

function displayValue(value) {
    currentInput = currentInput + value;
    display.value = currentInput;
}
// clear function
function clearDisplay() {
    currentInput = '';
    display.value = '';
    history.innerText = "";
}
// calculation
function calculateResult() {
    history.innerText = currentInput + " =";
    try {
        currentInput = eval(currentInput);
        display.value = "Ans. "+ currentInput;
    } catch (error) {
        display.value = 'Error';
    }
}
// percentage calculation
function calculatePercentage() {
    history.innerText = currentInput + "% =";
    try {
        currentInput = eval(currentInput);
        currentInput = currentInput / 100;
        display.value = "Ans. "+ currentInput;
    } catch (error) {
        display.value = 'Error';
    }
}
// Remove the last character from the current input
function backspace() {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
    // history.innerHTML = currentInput;
}