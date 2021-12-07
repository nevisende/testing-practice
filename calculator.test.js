const { describe, expect } = require("@jest/globals");

class calculator {
  static add(first, second) {
    return first + second;
  }

  static subtract(first, second) {
    return first - second;
  }

  static divide(first, second) {
    return first / second;
  }

  static multiply(first, second) {
    return first * second;
  }
}

describe("Calculator Test", () => {
  test("2 and 5 given to add method should return 7", () => {
    const first = 2;
    const second = 5;

    const returnedClass = calculator.add(first, second);

    expect(returnedClass).toBe(7);
  })

  test("2 and 5 given to add method should return -2", () => {
    const first = 2;
    const second = 5;

    const returnedClass = calculator.subtract(first, second);

    expect(returnedClass).toBe(-3);
  })

  test("2 and 5 given to divide method should return 0.4", () => {
    const first = 2;
    const second = 5;

    const returnedClass = calculator.divide(first, second);

    expect(returnedClass).toBe(0.4);
  })

  test("2 and 5 given to multiply method should return 10", () => {
    const first = 2;
    const second = 5;

    const returnedClass = calculator.multiply(first, second);

    expect(returnedClass).toBe(10);
  })
})