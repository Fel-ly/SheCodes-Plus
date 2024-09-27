let country = "Guinea Bissau";
let city = " Sydney   ";
let place = "School";
let attraction = "Opera House";

//challenge 1
country = country.replace(" ", "-");
console.log(country);

//challenge 2
city = city.trim();
console.log(city);

//challenge 3
attraction = attraction.toLowerCase();
console.log(attraction);

//challenge 4
place = place.toUpperCase();
console.log(place);

//challenge 5
let sentence = `I went to visit the ${attraction} in ${city}, right next to my ${place}. Now, I'm getting ready for my trip to ${country}!`;
console.log(sentence);
