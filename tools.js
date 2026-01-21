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
    /**
     * Multiplies two numbers together.
     * @param {number} a - The first number.
     * @param {number} b - The second number.
     * @returns {number} The product of a and b.
     */
    return a * b;
}   

function division(a, b) {
    /**
     * Divides the first number by the second.
     * @param {number} a - The numerator.
     * @param {number} b - The denominator.
     * @returns {number} The quotient of a and b.
     */
    return a / b;
}

function exponentiation(a, b) {
    /**
     * Raises the first number to the power of the second.
     * @param {number} a - The base number.
     * @param {number} b - The exponent.
     * @returns {number} The result of a raised to the power of b.
     */
    return Math.pow(a, b);
}

export { addition, subtraction, multiplication, division, exponentiation };