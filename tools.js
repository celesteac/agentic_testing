function addition(a, b) {
    /**
     * Adds two numbers together.
     * @param {number} a - The first number.
     * @param {number} b - The second number.
     * @returns {number} The sum of a and b.
     */
    return a + b;
}

function subtraction(a, b) {
    /**
     * Subtracts the second number from the first.
     * @param {number} a - The first number.
     * @param {number} b - The second number.
     * @returns {number} The difference of a and b.
     */
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}   

function division(a, b) {
    return a / b;
}

export { addition, subtraction, multiplication, division };