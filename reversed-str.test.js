import reverseString from './reversed-str';

describe("Reverse Function test", () => {
  test('Should return reversed string', () => {
    const str = 'same';

    const resultFunction = reverseString(str);

    expect(resultFunction).toBe('emas');
  })
})