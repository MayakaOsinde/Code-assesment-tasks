// BDD
// Accept an array of numbers.
// Rotate the numbers a certain number of times
// Output the array after the number of rotations is enacted.

// Pseudocode
// Accept an array as a parameter. Accept an integer as a parameter, to represent the number of times a rotation occurs.
// Iterate over the array using a for loop.
// Identify the number with the last possible index.
// Remove the number from the array and add it to the begining of the array.
// Repeat the process K number of times.
// Return the new array.

function solution(A, K) {
  let A = [];
  // Implement your solution here
  //   let A = [2, 3, 4, 5, 6, 7];
  //   let K = 3;
  if (K > 0 && K < 100) {
    for (let i = 0; i < K; i++) {
      let X = A[A.length - 1];
      A.unshift(X);
      A.pop(A.lastIndexOf(X));
      console.log(A);
      return A;
      // console.log(A.lastIndexOf(X));
    }
  } else {}
}
solution();
