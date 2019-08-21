function distanceFromHqInBlocks(destination){
  return Math.abs(destination - 42);
}

function distanceFromHqInFeet(destination){
  return distanceFromHqInBlocks(destination) * 264;
}

function distanceTravelledInFeet(start, destination){
  return Math.abs(start - destination) * 264;
}

function calculatesFarePrice(start, destination) {
  const feet_conversion = Math.abs(start - destination) * 264;

  if (feet_conversion <= 400) {
    return 0;
  } else if (feet_conversion < 2000) {
    return (feet_conversion - 400) * .02;
  } else if (feet_conversion < 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
