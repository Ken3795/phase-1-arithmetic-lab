// Declare variables for the assignment

// 1. Create a variable `multiply` set to an equation that multiplies num1 and num2 to equal 62.
const num1 = 31;
const num2 = 2;
const multiply = num1 * num2; // 62

// 2. Create a variable `random` that generates a random integer greater than 0.
const random = Math.floor(Math.random() * 100) + 1; // Random integer > 0

// 3. Create a variable `mod` set to the remainder of dividing num3 by num4, where the remainder is 4.
const num3 = 28;
const num4 = 8;
const mod = num3 % num4; // 4

// 4. Create a variable `max` that finds the highest number in a set; the value returned should be 20.
const max = Math.max(1, 5, 10, 15, 20); // 20

// Exporting the variables (optional depending on your test setup)
module.exports = { multiply, random, mod, max };
