function distanceFromHqInBlocks(block) {
  return Math.abs(block - 42)
}

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264
}

function distanceTravelledInFeet(start_block, end_block) {
  return Math.abs(distanceFromHqInFeet(end_block) - distanceFromHqInFeet(start_block))
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start,destination)
  if (distance <= 400) {
    return 0;
  } else if (distance > 2500) {
    return 'cannot travel that far';
  } else if (distance <= 2500 && distance > 2000) {
    return 25;
  } else if (distance < 2001) {
    return ((distance - 400) * 0.02)
  }
}
