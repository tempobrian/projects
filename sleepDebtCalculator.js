const getSleepHours = (day) => {
  day = day.toLowerCase();
  switch (day) {
    case "monday":
      return 8;
    case "tuesday":
      return 9;
    case "wednesday":
      return 7;
    case "thursday":
      return 6;
    case "friday":
      return 5;
    case "saturday":
      return 8;
    case "sunday":
      return 9;
  }
};

const getActualSleepHours = () =>
  getSleepHours("Monday") +
  getSleepHours("Tuesday") +
  getSleepHours("wednesday") +
  getSleepHours("Thursday") +
  getSleepHours("Friday") +
  getSleepHours("Saturday") +
  getSleepHours("Sunday");

  const getIdealSleepHours = idealHours => idealHours * 7;

  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(8);
    if (actualSleepHours === idealSleepHours) {
      return "You got the perfect amount of sleep";
    } else if (actualSleepHours > idealSleepHours) {
      return 'You got ' + (actualSleepHours - idealSleepHours) + ' more hour(s) of sleep than you needed this week.';
    } else if (actualSleepHours < idealSleepHours) {
      return 'You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.';
    }
  };