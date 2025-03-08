// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
const headQuarters=42;
return Math.abs(headQuarters-pickupLocation)
}
function distanceFromHqInFeet(pickupLocation) {
  const feetPerBlock = 264;
  return distanceFromHqInBlocks(pickupLocation)*feetPerBlock

  // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
  // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks

  // the return value of distanceFromHqInBlocks can then be used to calculate feet
}
function distanceTravelledInFeet(start, destination) {
  const feetPerBlock = 264;
  
  return Math.abs(start-destination) * feetPerBlock;
}
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}
