function reverseString(str) {
  return str.split('').reverse().join('')
}

describe("Reverse Function test", () => {
  test('Should return reversed string', () => {
    const str = 'same';

    const resultFunction = reverseString(str);

    expect(resultFunction).toBe('emas');
  })
})