import stringLength from './str-length';

describe("String checking", () => {
  test("The function should return given string length", () => {
    const str = "Alex";

    const resultFunction = stringLength(str);

    expect(resultFunction).toBe(4);
  })

  test('Should throw error if the string is longer than 10 characters', () => {
    const str = "Alexander Graham Bell";

    expect(()=> stringLength(str)).toThrowError(/not longer than 10/);
  })
  
  test('Should throw error if the string is empty', () => {
    const str = "";

    expect(()=> stringLength(str)).toThrowError(/enter a string/);
  })
})
