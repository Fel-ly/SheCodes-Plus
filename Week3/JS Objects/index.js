//challenge 1
// Create an object weather and console log it
let Weather = {};
console.log(Weather);

//challenge 2
//Create an object weather with properties of temp and humidity and console log the object
let weather = {
  temp: 19,
  humidity: 50,
};
console.log(weather);

//challenge 3
//console log the humidity and the temperature
console.log(weather.temp);
console.log(weather.humidity);

//challenge 4
//Add a property windSpeed and console log it
weather.windSpeed = 3;
console.log(weather.windSpeed);

//challenge 5
//Console log the wind speed, the temperature and the humidity using the square brackets syntax
console.log(weather["windSpeed"]);
console.log(weather["humidity"]);
console.log(weather["temp"]);

//challenge 6
//Create an object or an array of objects called `forecast` with each day’s temperature, and console log it
let forecast = [
  { day: "Monday", temperature: 18 },
  { day: "Tuesday", temperature: 20 },
  { day: "Wednesday", temperature: 22 },
  { day: "Thursday", temperature: 19 },
  { day: "Friday", temperature: 21 },
  { day: "Saturday", temperature: 23 },
  { day: "Sunday", temperature: 20 },
];
console.log(forecast);
