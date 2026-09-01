
function getDayType(day) {
  const normalizedDay = day.toLowerCase();

  switch (normalizedDay) {
    case "friday":
    case "saturday":
      return "Weekend";
    case "sunday":
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
      return "Working Day";
    default:
      return "Invalid Day";
  }
}

console.log(getDayType("MONDAY"))
