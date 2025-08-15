"use strict";

//WIP

function score(dice) {
  const combinations = [
    [[1, 1, 1], 1000],
    [[6, 6, 6], 600],
    [[5, 5, 5], 500],
    [[4, 4, 4], 400],
    [[3, 3, 3], 300],
    [[2, 2, 2], 200],
    [[1], 100],
    [[5], 50],
  ];

  console.log(combinations[0]);

  let score = 0;

  let diceCopy = [...dice];
  let diceCopy2 = [];

  diceCopy.sort(function (a, b) {
    return a - b;
  });

  console.log(diceCopy);

  for (const [pattern, points] of combinations) {
    let found = true;

    for (const num of pattern) {
      console.log(`${num} in ${diceCopy} from ${pattern}`);
      const index = diceCopy.indexOf(num);
      if (index === -1) {
        found = false;
        break;
      }
      diceCopy2.splice(index, 1);
    }
    if (found) {
      score += points;
      console.log(`Found combination: ${pattern} for ${points} points`);
    }
  }
}

score([3, 2, 2, 1, 2]); // Example input
