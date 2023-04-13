// Question
// Remove words from the sentence if they contain exactly one exclamation mark. Words are separated by a single space, without leading/trailing spaces.

// Examples
// remove("Hi!") === ""
// remove("Hi! Hi!") === ""
// remove("Hi! Hi! Hi!") === ""
// remove("Hi Hi! Hi!") === "Hi"
// remove("Hi! !Hi Hi!") === ""
// remove("Hi! Hi!! Hi!") === "Hi!!"
// remove("Hi! !Hi! Hi!") === "!Hi!"

// BDD

// Pseudocode


// Solution
function remove(sentence) {
    const words = sentence.split(' ');
    const filteredWords = words.filter(word => {
      const count = (word.match(/!/g) || []).length;
      return count !== 1;
    });
    console.log(filteredWords.join(' '));
  }
  
 remove("My house!")