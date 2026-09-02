const getChaseVerdict = (target, scored, ballsLeft) => {
  const runsNeeded = target - scored;

  if (runsNeeded <= 0) {
    return "Won";
  } else if (ballsLeft <= 0) {
    return "Lost";
  } else {
    const requiredRate = (runsNeeded / ballsLeft) * 6;
    
    let verdict;

    if (requiredRate <= 6) {
      verdict = "Comfortable";
    } else if (requiredRate <= 12) {
      verdict = "Tough";
    } else {
      verdict = "Almost Impossible";
    }

    return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;
  }
};


console.log(getChaseVerdict(200, 175, 14));
