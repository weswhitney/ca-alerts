import fetch from "node-fetch"
console.log("env var", process.env)
let url = `https://api.weatherbit.io/v2.0/alerts?lat=39.761554&lon=-104.962095&key=${process.env.WEATHER_BIT_API_KEY}`

const forecast = async function () {
  const response = await fetch(url)
  const body = await response.json()
  return body
}

export default forecast
