var dayOfTheWeek = function (day, month, year) {
  // Step 1: Create an array to map index → weekday name
  // getDay() in JS returns: 0=Sunday, 1=Monday, ..., 6=Saturday
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Step 2: Create a JavaScript Date object
  // ⚠️ Note: JS months are 0-indexed (January = 0, February = 1, etc.)
  const date = new Date(year, month - 1, day);

  // Step 3: Get the day index (0-6) and return the corresponding day name
  return days[date.getDay()];
};
