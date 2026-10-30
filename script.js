const display = document.getElementById("display");

let expression = "";

function appendValue(value) {
    if (value === "%") {
        expression += "/100";
    } else {
        expression += value;
    }

    display.value = expression;
}

function clearDisplay() {
    expression = "";
    display.value = "0";
}

function deleteLast() {
    expression = expression.slice(0, -1);
    display.value = expression || "0";
}

function calculate() {
    try {
        if (!expression.trim()) return;

        if (!/^[0-9+\-*/.()\s]+$/.test(expression)) {
            throw new Error("Invalid input");
        }

        const result = Function(
            '"use strict"; return (' + expression + ')'
        )();

        if (!Number.isFinite(result)) {
            throw new Error("Invalid result");
        }

        expression = String(Number(result.toFixed(10)));
        display.value = expression;

    } catch (error) {
        display.value = "Error";
        expression = "";
    }
}