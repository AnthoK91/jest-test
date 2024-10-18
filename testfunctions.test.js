import {
  analyseArray,
  caesarCipher,
  calculator,
  capitalise,
  reverseString,
  sum,
} from "./testfunctions.js";

test("tests if the word is capitalised", () => {
  expect(capitalise("ak")).toBe("AK");
});

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("reverses a string", () => {
  expect(reverseString("abc")).toBe("cba");
});

test("calculator", () => {
  expect(calculator.add(1, 1)).toBe(2);
  expect(calculator.add(1, 2)).toBe(3);
  expect(calculator.add(5, 2)).toBe(7);
  expect(calculator.subtract(1, 1)).toBe(0);
  expect(calculator.subtract(4, 1)).toBe(3);
  expect(calculator.subtract(523, 23)).toBe(500);
  expect(calculator.multiply(0, 10)).toBe(0);
  expect(calculator.multiply(1, 10)).toBe(10);
  expect(calculator.multiply(50, 2)).toBe(100);
  expect(calculator.divide(2, 2)).toBe(1);
  expect(calculator.divide(50, 10)).toBe(5);
  expect(calculator.divide(10, 3)).toBeCloseTo(3.33);
});

test("caesar", () => {
  expect(caesarCipher("a", 1)).toContain("b");
  expect(caesarCipher("!", 1)).toContain("!");
  expect(caesarCipher("z", 1)).toContain("a");
  expect(caesarCipher("a", 2)).toContain("c");
  expect(caesarCipher("A", 1)).toContain("B");
  expect(caesarCipher("Ab", 1)).toContain("Bc");
  expect(caesarCipher("XYZ", 2)).toContain("ZAB");
});

test("basic math functions", () => {
  expect(analyseArray([1, 2, 3, 4, 5]).average).toBe(3);
  expect(analyseArray([1, 2, 3, 4, 5]).min).toBe(1);
  expect(analyseArray([1, 2, 3, 4, 5]).max).toBe(5);
  expect(analyseArray([1, 2, 3, 4, 5]).length).toBe(5);
});
