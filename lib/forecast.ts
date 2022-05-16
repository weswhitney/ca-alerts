import fetch from "node-fetch"
import AWS from "aws-sdk"

let url = `https://api.weatherbit.io/v2.0/alerts?lat=39.761554&lon=-104.962095&key=${process.env.WEATHER_BIT_API_KEY}`

const forecast = async function () {
  const response = await fetch(url)
  const forecastResponse = await response.json()

  let msg
  forecastResponse.alerts[0] !== undefined
    ? (msg = forecastResponse.alerts[0].description)
    : (msg = "no alerts at this time")
  const sns = new AWS.SNS()
  const params = {
    Message: msg,
    Subject: "Usage Alert from Colorado Aware",
    TopicArn: process.env.TOPIC_ARN,
  }
  sns.publish(params, function (err, data) {
    if (err) console.log("error in send message", err)
    else console.log(data)
  })
}

export default forecast
