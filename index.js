const routes = {
    "Paris": "Skopje",
    "Zurich": "Amsterdam",
    "Prague": "Zurich",
    "Barcelona": "Berlin",
    "Kiev": "Prague",
    "Skopje": "Paris",
    "Amsterdam": "Barcelona",
    "Berlin": "Kiev",
    "Berlin": "Amsterdam"
}

const visited_cities = {
    "Kiev": false,
    "Amsterdam": false,
    "Zurich": false,
    "Prague": false,
    "Berlin": false,
    "Barcelona": false
}

let count = 0;

let currentCity = "Kiev"; 
let result = "";

while (count < 6) {
    count++;

    visited_cities[currentCity] = true;
    result += currentCity;
    result += " -> ";

    currentCity = routes[currentCity];
}

console.log(result);