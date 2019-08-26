// Code your solution in this file!
let block
let start;
let destination;

function distanceFromHqInBlocks(block){
  return Math.abs(block - 42);
}

function distanceFromHqInFeet(block){
  return distanceFromHqInBlocks(block) * 264;
}

function distanceTravelledInFeet(start, destination){
  return Math.abs((destination - start) * 264);
}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination)
  if (distance <= 400) {
    return 0;
  } else if (distance <= 2500 && distance > 2000) {
    return 25;
  } else if (distance < 2001) {
    return ((distance - 400) * 0.02)
  } else {
    return 'cannot travel that far';
  }
}
