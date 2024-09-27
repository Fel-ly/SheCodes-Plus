// Challenge 1
// Create an array weekDays with all days of the week, console log the array
let weekDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
console.log(weekDays);

// Challenge 2
// Log ‘Monday’ and ‘Sunday’
console.log(weekDays[0], weekDays[6]);

// Challenge 3
// Change ‘Sunday’ by ‘Funday’
weekDays[6] = weekDays[6].replace("S", "F");
// Log the array
console.log(weekDays[6]);

// Challenge 4
// Remove Monday and Tuesday
weekDays.shift();
weekDays.shift();
// Log the array
console.log(weekDays);

// Challenge 5
// Log every day of the week this way:`Temperature on Monday is 18 degrees`

function weather(day) {
  console.log(`Temperature on ${day} is 18 degrees`);
}
weekDays.forEach(weather);
