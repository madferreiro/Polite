/* This is a service implementation module example. */

const calculator = {}

calculator.sum = (leftOperand, rightOperand) => {
    return leftOperand + rightOperand
}

calculator.minus = (leftOperand, rightOperand) => {
    return leftOperand - rightOperand
}

calculator.divide = (leftOperand, rightOperand) => {
    return leftOperand / rightOperand
}

calculator.multiply = (leftOperand, rightOperand) => {
    return leftOperand * rightOperand
}

module.exports = calculator