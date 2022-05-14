require("dotenv").config()
import forecast from "./lib/forecast"

import AWS from "aws-sdk"

module.exports.run = async (
  _event: any,
  context: { done: any },
  _callback: (arg0: null, arg1: { success: boolean }) => void
) => {
  const forecastResponse = await forecast()
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
  console.log("params ", params)
  console.log("sns ", sns.config.credentials)
  sns.publish(params, context.done)
}
