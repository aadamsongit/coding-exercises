// ===============================
// 💡 CHALLENGE: Sum of Digits 💡
// ===============================

// Write a function that takes a positive integer 
// and returns the sum of its digits. 

// Examples:

// Input:
// number = 123

// Output:
// 6

// ---

// Input:
// number = 4567

// Output:
// 22

// ---

// Input:
// number = 9

// Output:
// 9

// Explanation of Examples:
// For number = 123: The sum of digits is 1 + 2 + 3 = 6.
// For number = 4567: The sum of digits is 4 + 5 + 6 + 7 = 22.
// For number = 9: There's only one digit, so the result is 9.

// Requirements:
// You can use basic math operations to extract each digit.
// Try not to convert the number to a string.

/**
 * Calculates the sum of the digits of a given positive integer.
 *
 * @param {number} num - The positive integer whose digits will be summed.
 * @returns {number} The sum of the digits.
 *
 * @example
 * // returns 6
 * sumofDigits(123);
 *
 * @example
 * // returns 22
 * sumofDigits(4567);
 *
 * @example
 * // returns 9
 * sumofDigits(9);
 */
function sumofDigits(num) {
    // Initialize sum to 0
    var sum = 0;
    // Loop through each digit
    while (num > 0) {
        // Extract the last digit
        var digit = num % 10;
        // Add the digit to the sum
        sum += digit;
        // Remove the last digit from the number
        num = Math.floor(num / 10); // Use Math.floor() to remove the decimal part
    }
    // Return the result
    return sum;
}

// Declare the number variable
let number = 123;
// Call the function and print the result
console.log(sumofDigits(number));





// Hint: You might need to use the modulo (%) operator and integer division (//) to separate the digits.
