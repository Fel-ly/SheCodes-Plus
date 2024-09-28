let paris = {
  name: "Paris",
  country: "France",
  language: "French",
  temperature: 18,
  capitalCity: true,
};

//challenge  1
//Given an object called paris, log its temperature
console.log(paris.temperature);

//challenge 2
//Create an object called sydney similar to paris and log its temperature (use fake data)
let sydney = {
  name: "Sydney",
  country: "Austtralia",
  language: "English",
  temperature: 21,
  capitalCity: false,
};
console.log(sydney.temperature);

//challenge 3
//Create an array with 3 different Australian city names only and log each name
let australianCities = ["Sydney", "Melbourne", "Canberra"];
console.log(australianCities);

//challenge 4
//Create an array of 3 cities with the same properties as paris and console log each city temperature
let cities = [
  {
    name: "Sydney",
    country: "Australia",
    language: "English",
    temperature: 21,
    capitalCity: false,
  },
  {
    name: "Nairobi",
    country: "Kenya",
    language: "English",
    temperature: 25,
    capitalCity: true,
  },
  {
    name: "Antananarivo",
    country: "Madagascar",
    language: "French",
    temperature: 21,
    capitalCity: false,
  },
];
cities.forEach((city) => {
  console.log(`${city.name}, ${city.temperature}°C `);
});
