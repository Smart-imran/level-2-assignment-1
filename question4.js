function getCngFare(distance, isNight = false, waitingMinutes = 0) {
  let fare = 50;

  if (distance > 2) {
    fare = fare + (distance - 2) * 15;
  }

  let waitingCharge = waitingMinutes * 2;

  let total = fare + waitingCharge;

  if (isNight) {
    total = total * 1.2;
  }

  return total;
}

console.log(getCngFare(2));