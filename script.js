/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

/* DIV ID's you'll need access to 👇
"city-name"
"weather-type"
"temp"
"min-temp"
"max-temp"
*/

// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this: 
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  //HINT: Use template literals to create a url with input and an API key

  //CODE GOES HERE
  const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
  return fetch(FULL_URL)
  .then(response=>response.json())
  .then(data=>data)
  .catch(err=>console.log(err))
}

/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
const searchCity = async () => {
  const city = document.getElementById('city-input').value;
  console.log(city)
  const data=await getWeatherData(city)
  showWeatherData(data)
  // CODE GOES HERE

}

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
const showWeatherData = (weatherData) => {
  //CODE GOES HERE
  console.log(weatherData,"aa" )
  console.log(weatherData.main.temp)
  document.getElementById('temp').innerText=weatherData.main.temp
  document.getElementById('city-name').innerText=weatherData.name
  document.getElementById('weather-type').innerText=weatherData.weather[0].main
  document.getElementById('min-temp').innerText=weatherData.main.humidity
  document.getElementById('max-temp').innerText=weatherData.sys.country

  

}

