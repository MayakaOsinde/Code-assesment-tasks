// Question
// You are given an array (which will have a length of at least 3, but could be very large) containing integers.
// The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// BDD
// Accept an array as a parameter.
// Check if the array contains odd integers.
// Check if the array contains even integers.
// Return the outlier of the array

// Pseudocode
// Loop throught the array using a for loop.
// Use modulus to determine whether an integer is even or odd.
// If all other integers are even, return the odd one out.

// Solution
function findOutlier(integers){
    let evenArrays = [];
    let oddArrays = [];


    for (let i = 0; i < integers.length; i++) {
        if (integers[i] % 2 === 0) {
            evenArrays.push(integers[i])
            // console.log("Even array");
        } else if (integers[i] % 2 !== 0){
            oddArrays.push(integers[i])
            // console.log("Odd array");

        } else{}
    }
    console.log(evenArrays);

    if (evenArrays.length > oddArrays.length) {
        return oddArrays[0];
        
    } else {
        return evenArrays[0];
    }
    }


  findOutlier(integers = [2,6,8,12,9,16,20,24,32])


//   More Effecient solution
function findOutlier(arr) {
    // Check the parity of the first three numbers to determine if the array is odd or even
    const isEven = arr.slice(0, 3).filter(num => num % 2 === 0).length > 1;
  
    // Find the first number that doesn't match the parity of the other numbers
    return arr.find(num => num % 2 === (isEven ? 0 : 1));
  }
  

