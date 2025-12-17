const display = document.getElementById('display');

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        // eval é simples para este exemplo, mas em projetos reais use um parser de matemática
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Erro";
        setTimeout(clearDisplay, 1500);
    }
}