const fetch = require("node-fetch")

let url = `https://api.weatherbit.io/v2.0/alerts?lat=39.761554&lon=-104.962095&key=${process.env.WEATHER_BIT_API_KEY}`

module.exports = async function (event) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data))
}
