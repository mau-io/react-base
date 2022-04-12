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

//Add event click to the button
const button = document.getElementById('searchRepository');

const getData = fakefetchJSON;

// get the city name
const getCity = () => {
  const city = document.getElementById('city').value;
  return city;
}

const changeText = (id, text) => {
  try {
    document.getElementById(id).innerHTML = text;
  } catch (error) {
    console.log(error);
  }
}

const render = (data) => {
  const icon = document.getElementById('icon');
  icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  changeText('temp', data.main.temp);
  changeText('cityName', data.name + ', ' + data.sys.country);

  changeText('main', data.weather[0].main);
  changeText('description', data.weather[0].description);

  changeText('feels_like', data.main.feels_like);
  changeText('temp_min', data.main.temp_min);
  changeText('temp_max', data.main.temp_max);
  changeText('pressure', data.main.pressure);
  changeText('humidity', data.main.humidity);
}


 button.addEventListener('click', (e) => {
   e.preventDefault();

    const city = getCity();

    getData(city)
      .then(result => {
        
        console.log(result); // fetched movies

        if (result.cod === '404') {
          alert('City not found');
        } else {   
          render(result);
        }

      });
 })


 getData()
  .then(result => {
    render(result);
  });




