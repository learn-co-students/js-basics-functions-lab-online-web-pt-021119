// Code your solution in this file!
const distanceFromHqInBlocks = block => Math.abs(block - 42);

const distanceFromHqInFeet = block => distanceFromHqInBlocks(block) * 264;

const distanceTravelledInFeet = (block1, block2) => Math.abs(block2 - block1) * 264;

const calculatesFarePrice = (start, destination) => {
  let distance = Math.abs(destination - start) * 264;
  if (distance <= 400) {
    return 0;
  } else if (distance > 2500) {
    return 'cannot travel that far';
  } else if (distance > 2000) {
    return 25;
  } else if (distance > 400) {
    return (distance - 400) * 0.02;
  }
}