require("dotenv").config()
import forecast from "./lib/forecast"

var AWS = require("aws-sdk")

export async function run(
  _event: any,
  context: { done: any },
  _callback: (arg0: null, arg1: { success: boolean }) => void
) {
  const alert = await forecast()
  const msg = alert.alerts[0].description
  var sns = new AWS.SNS()
  var params = {
    Message: msg,
    Subject: "Test SNS From Lambda",
    TopicArn: process.env.TOPIC_ARN,
  }
  sns.publish(params, context.done)
  console.log("published msg ", msg)
}
