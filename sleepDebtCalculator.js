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