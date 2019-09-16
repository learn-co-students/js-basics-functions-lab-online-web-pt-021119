// Code your solution in this file!
function distanceFromHqInBlocks(block1) {
    return Math.abs(block1 - 42);
}

function distanceFromHqInFeet(block2) {
    return distanceFromHqInBlocks(block2) * 264;
}

function distanceTravelledInFeet(block1, block2) {
    return Math.abs(block1 - block2) * 264;
}

function calculatesFarePrice(block1, block2) {
    let distance = distanceTravelledInFeet(block1, block2)
    if (distance > 2500) {
    return `cannot travel that far`;
  } else if (distance > 2000) {
      return 25;
  } else if (distance > 400) {
      return (distance - 400) * 0.02;
  } else if (distance <= 400) {
      return 0;
  }
}
