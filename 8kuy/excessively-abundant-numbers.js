/* An abundant number or excessive number is a number for which the sum of its proper divisors is greater than the number itself.

The integer 12 is the first abundant number. Its proper divisors are 1, 2, 3, 4 and 6 for a total of 16 (> 12).

Derive function abundantNumber(num)/abundant_number(num) which returns true/True/.true. if num is abundant, false/False/.false. if not. */

/* SOLUTION: */

function abundantNumber(num) {
    if (num <= 0) {
      return false; // Non-positive numbers are not considered abundant
    }
  
    let divisorsSum = 0;
  
    for (let i = 1; i <= Math.floor(num / 2); i++) {
      if (num % i === 0) {
        divisorsSum += i;
      }
    }
  
    return divisorsSum > num;
  }
  
  // Examples
  console.log(abundantNumber(12)); // Output: true
  console.log(abundantNumber(16)); // Output: false
  console.log(abundantNumber(18)); // Output: true
  console.log(abundantNumber(24)); // Output: true
  console.log(abundantNumber(7));  // O