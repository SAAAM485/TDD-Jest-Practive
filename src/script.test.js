import {
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray,
} from "./script.js";

test("returns it with the first character capitalized", () => {
    expect(capitalize("holY")).toBe("Holy");
});

test("returns it reversed", () => {
    expect(reverseString("god")).toBe("dog");
});

test("adds and returns the correct calculation", () => {
    expect(calculator.add(1, 2)).toBe(3);
});

test("subtracts and returns the correct calculation", () => {
    expect(calculator.subtract(2, 1)).toBe(1);
});

test("divides and returns the correct calculation", () => {
    expect(calculator.divide(4, 2)).toBeCloseTo(2);
});

test("multiplies and returns the correct calculation", () => {
    expect(calculator.multiply(4, 2)).toBe(8);
});

test("returns it with each character “shifted”, 3", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("returns it with each character “shifted”, letter case", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("returns it with each character “shifted”, non-alphabetical", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("returns an object with: average, min, max, and length", () => {
    const object = {
        average: 4,
        min: 1,
        max: 8,
        length: 6,
    };
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual(object);
});
