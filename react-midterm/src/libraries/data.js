const API_KEY = '071befcc01021dc9ac93cb348f6cee17';

async function fetchJSON(city = 'Vancouver') {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`); // fetch the data from the API
  const data = await response.json(); // convert the data to JSON
  return data; // return the object
}

async function fakefetchJSON(city = 'Vancouver') {
  return city.toLowerCase() === 'vancouver' ? {
    "coord": {
      "lon": -123.1193,
      "lat": 49.2497
    },
    "weather": [{
      "id": 800,
      "main": "Clear",
      "description": "clear sky",
      "icon": "01n"
    }],
    "base": "stations",
    "main": {
      "temp": -0.55,
      "feels_like": -2.45,
      "temp_min": -3.64,
      "temp_max": 1.25,
      "pressure": 1030,
      "humidity": 73
    },
    "visibility": 10000,
    "wind": {
      "speed": 1.54,
      "deg": 110
    },
    "clouds": {
      "all": 0
    },
    "dt": 1645763230,
    "sys": {
      "type": 2,
      "id": 2009529,
      "country": "CA",
      "sunrise": 1645715080,
      "sunset": 1645753620
    },
    "timezone": -28800,
    "id": 6173331,
    "name": "Vancouver",
    "cod": 200
  } : {"cod":"404","message":"city not found"} 
}

const getData = fetchJSON;

export default getData;




