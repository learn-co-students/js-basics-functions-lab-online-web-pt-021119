// Code your solution in this file!
const feetPerBlock = 264;
const hqBlock = 42;

function distanceFromHqInBlocks(block) {
  let result;
  if (block > hqBlock) {
    result = block - hqBlock;
  }
  else if (block < hqBlock) {
    result = hqBlock - block;
  }
  return result;
}

function distanceFromHqInFeet(block) {
  let result; 
  result = distanceFromHqInBlocks(block) * feetPerBlock
  return result
}

function distanceTravelledInFeet (startBlock, endBlock) {
  let result;
  if (startBlock > endBlock) {
    result = (startBlock - endBlock) * feetPerBlock;
  }
  else if (endBlock > startBlock) {
    result = (endBlock - startBlock) * feetPerBlock;
  }
  return result;
}

function calculatesFarePrice(startBlock, endBlock) {
  let result;
  let distance = distanceTravelledInFeet(startBlock, endBlock);
  if (distance <= 400) {
    result = 0;
  }
  else if (distance > 400 && distance <= 2000) {
    result = (distance - 400) * 0.02;
  }
  else if (distance > 2000 && distance <= 2500) {
    result = 25;
  }
  else if (distance > 2500) {
    result = "cannot travel that far";
  }
  return result
}