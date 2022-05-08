import forecast from "./lib/forecast"

require("dotenv").config()
var AWS = require("aws-sdk")

export async function run(
  _event: any,
  context: { done: any },
  _callback: (arg0: null, arg1: { success: boolean }) => void
) {
  const alert = await forecast()
  console.log("alert ", alert.alerts[0].description)
  var sns = new AWS.SNS()
  var params = {
    Message: "will be forecast",
    Subject: "Test SNS From Lambda",
    TopicArn: "arn:aws:sns:us-east-1:979673662712:topic-for-pusher-lambda",
  }
  sns.publish(params, context.done)
}
