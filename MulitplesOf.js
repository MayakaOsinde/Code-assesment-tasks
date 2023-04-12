// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).
// Note: If the number is a multiple of both 3 and 5, only count it once.

// BDD
// Accept a number between 0 and n. n being the input number.
// put 0 if the output is less than 0.
// Find the multiples of 3 or 5.
// Find the sum of all the multiples.
// Put only the sum of number below n.

// Pseudocode
// Pass n as a parameter.
// Use if control flow to make sure the input is greater than 0.
// Use modulus to find the mulitples of 3 and 5.
// Assign variables to these modulus outputs.
// Add the values to an empty array.
// Use for loop to find the values that less than the number n.
// Sum the numbers.
// If a number appears twice, only count once.

function solution(n) {
  const array = [];

  if (n > 0){

  for (let i = 1; i < n; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      array.push(i);
    } else {
    }

    // console.log(i);
  }

  const sum = array.reduce((a, b) => a + b, 0);
  console.log(sum);
  console.log(array);
  return sum;
} else {
    console.log(0);
    return 0;
}
}

solution(2);
