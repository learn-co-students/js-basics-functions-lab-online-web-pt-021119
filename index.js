function distanceFromHqInBlocks (value) {
    return Math.abs(value - 42);
}

function distanceFromHqInFeet (value) {
    return distanceFromHqInBlocks(value) * 264;
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264;
}

function calculatesFarePrice(start, destination) {
    const price = distanceTravelledInFeet(start, destination);

    if (price <= 400) {
        return 0;
      } else if (price < 2000) {
        return (price- 400) * .02;
      } else if (price < 2500) {
        return 25;
      } else {
        return "cannot travel that far";
      }

}

