function divideNumbers() {
    const numerator = parseFloat(document.getElementById('numerator').value);
    const denominator = parseFloat(document.getElementById('denominator').value);
    const resultElement = document.getElementById('result');    

    let result;

    if (denominator === 0) {
        result = "Error: Division by zero is not allowed.";
    } else {
        result = numerator / denominator;
    }

    resultElement.textContent = `Result: ${result}`;
}
