// Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.

// BDD

// Pseudocode

// Solution

function first_non_repeating_letter(str) {
    let letters = str.toLowerCase().split("");
    let counts = new Map();
  
    // Count the occurrences of each letter in the string
    letters.forEach(function(letter) {
      counts.set(letter, (counts.get(letter) || 0) + 1);
    });
  
    // Find the first non-repeating letter
    for (let i = 0; i < str.length; i++) {
      let letter = str[i].toLowerCase();
      if (counts.get(letter) === 1) {
        console.log(str[i]);
        return str[i];
      }
    }
  
    // Return an empty string if all characters are repeating
    return "";
  }
  
first_non_repeating_letter("Momoneneyiyis");
