function distanceFromHqInBlocks(endBlock){
  const hqBlock=42;
  return Math.abs(endBlock-hqBlock);
}

function distanceFromHqInFeet(endBlock){
  return distanceFromHqInBlocks(endBlock)*264;
}

function distanceTravelledInFeet(beginBlock, endBlock){
  return Math.abs(beginBlock-endBlock)*264;
}

function calculatesFarePrice(beginBlock,endBlock){
  let distance = distanceTravelledInFeet(beginBlock, endBlock);
  if (distance>2500){
    return 'cannot travel that far';
  } else if (distance>2000){
    return 25;
  } else if (distance>400){
    return (distance-400)*0.02;
  } else if (distance<=400){
    return 0;
  }
}
