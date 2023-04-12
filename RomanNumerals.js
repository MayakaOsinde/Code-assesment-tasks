// Question
// Create a function taking a positive integer between 1 and 3999
// returning a string containing the Roman Numeral representation of that integer.
// Create roman number chart with all roman number representation possible.
// Find the equvalent of the roman numbers
// Return the number

// Pseudocode
// Create an empty array to store the numbers and roman values.
// Accept only integers of range x > 1 && x < 3999
// Create a roman index hash.
// Loop through the input and assign every individual integer a roman value.
// Concatenate the string of roman values.

function solution(n) {
  let arr = [];
  const romanHash = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let thouDiv = n / 1000;
  let thouMod = (n % 1000) / 100;
  if (thouDiv >= 1 || thouMod >= 5) {
    for (let i = 0; i <= thouDiv; i++) {
      arr.push("M");
    }
    arr.push("D")
    for (let i = 0; i <= thouMod; i++) {
        arr.push("C");
    }
  } else {
  }
  console.log(arr);
}

solution(3945);
