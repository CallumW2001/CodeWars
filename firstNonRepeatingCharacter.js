"use strict";

// COMPLETED

function firstNonRepeatingLetter(s) {
  const wordArray = s.split("");

  for (let i = 0; i < wordArray.length; i++) {
    const char = wordArray[i];
    let count = 0;
    let iteration = 0;

    for (let j = 0; j < wordArray.length; j++) {
      if (char.toLowerCase() === wordArray[j].toLowerCase()) {
        count++;
        if (count > 1) {
          break;
        }
      }
      iteration++;
      if (iteration === wordArray.length) {
        console.log(`First non-repeating character: ${char}`);
        return char;
      }
    }
  }

  return "";
}

firstNonRepeatingLetter("sTress");
