// BDD
// Find two numbers that pair in an array.
// Exclude the number that cannot be paired.
// Return the odd one out

// Pseudocode
// Accept an array as a parameter.
// Initialize an empty array.
// Iterate over the array using a for loop.
// Find the number that cannot be paired with another number.
// Return number

// Solution

function solution(A) { 
    let result = 0;
    for (let i = 0; i < A.length; i++) {
      result ^= A[i];
    }
    console.log(result); 
  }

solution((A = [2, 4, 5, 2, 4, 7, 5]));



