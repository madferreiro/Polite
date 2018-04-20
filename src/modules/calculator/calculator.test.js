/* Every service must have a test module which validates its implementation */

const calculator = require('./calculator')

describe('Addition Operation', () => {
    test('should be able of adding two numbers', () => {
        expect(calculator.sum(1, 1)).toBe(2)
    })
})

describe('Subtraction Operation', () => {
    test('should be able of subtracting two numbers', () => {
        expect(calculator.minus(2, 1)).toBe(1)
    })
})

describe('Multiplication Operation', () => {
    test('should be able of multiplying two numbers', () => {
        expect(calculator.multiply(3, 3)).toBe(9)
    })
})

describe('Division Operation', () => {
    test('should be able of dividing an even number by two', () => {
        expect(calculator.divide(8, 2)).toBe(4)
    })
})