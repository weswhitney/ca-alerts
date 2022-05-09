import fetch from "node-fetch"

let url = `https://api.weatherbit.io/v2.0/alerts?lat=39.761554&lon=-104.962095&key=<redacted>`

const forecast = async function () {
  const response = await fetch(url)
  const body = await response.json()
  return body
}

export default forecast
