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
