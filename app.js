let x = document.getElementById("title");
x.innerText = "Design a Simple Calculator";
x.style.textAlign = "center";
let display = document.getElementById('display');
let history = document.getElementById('history');
let currentInput = '';

function displayValue(value) {
    currentInput = currentInput + value;
    history.innerText = currentInput;
    display.value = currentInput;

}

function clearDisplay() {
    currentInput = '';
    display.value = '';
    history.innerText = "";
}

function calculateResult() {
    try {
        currentInput = eval(currentInput);
        display.value = currentInput;
    } catch (error) {
        display.value = 'Error';
    }
}

function calculatePercentage() {
    try {
        currentInput = eval(currentInput);
        currentInput = currentInput / 100;
        display.value = currentInput;
    } catch (error) {
        display.value = 'Error';
    }
}
// Remove the last character from the current input
function backspace() {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
}