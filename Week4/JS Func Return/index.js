            // Challenge 1
// 1. Modify the function is Windy and return true if the speed is greater than 5 and false if not

function isWindy(speed) {
  if (speed > 5) {
    return true;
  } else {
    return false;
  }
}

// 2. Call the function and alert ‘It is windy’ if it is windy, Else, alert ‘It is not windy’
let speed = prompt("What is the wind speed?");
if (isWindy(speed)) {
  alert("It is windy");
} else {
  alert("It is not windy");
}

            // Challenge 2
// 1. Add unit parameter to isWindy
// 2. if greater than 5 and unit is metric, return true, else return false
function isWindyUnit(speed, unit) {
  if (speed > 5 && unit === "metric") {
    return true;
  } else {
    return false;
  }
}
// 3. Test both scenarios
// isWindy(2, 'imperial') should return false
// isWindy(20, 'metric') should return true
console.log(isWindyUnit(2, "imperial"));
console.log(isWindyUnit(20, "metric"));
