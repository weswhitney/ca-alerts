import fetch from "node-fetch"

let url = `https://api.weatherbit.io/v2.0/alerts?lat=39.761554&lon=-104.962095&key=c50caacc89184c59af6dccae4339311a`

const forecast = async function () {
  const response = await fetch(url)
  const body = await response.json()
  return body
}

export default forecast
