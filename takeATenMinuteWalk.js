//COMPLETED

function isValidWalk(walk) {
  const directions = walk;

  if (directions.length !== 10) {
    return false;
  }
  let { north, south, east, west } = { north: 0, south: 0, east: 0, west: 0 };

  for (const direction of directions) {
    switch (direction) {
      case "n":
        north++;
        break;
      case "s":
        south++;
        break;
      case "e":
        east++;
        break;
      case "w":
        west++;
        break;
      default:
        return false;
    }
  }

  if (north === south && east === west) {
    return true;
  } else {
    return false;
  }
}
