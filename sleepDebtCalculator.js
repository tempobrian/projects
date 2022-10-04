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

  const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
  }