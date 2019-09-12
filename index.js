function distanceFromHqInBlocks(value1) {
    return Math.abs(value1 - 42);
}

function distanceFromHqInFeet(value2) {
    return distanceFromHqInBlocks(value2) * 264;
}

function distanceTravelledInFeet(value1, value2) {
    return Math.abs(value1 - value2) * 264;
}

function calculatesFarePrice(value1, value2) {
    let distance = distanceTravelledInFeet(value1, value2)
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