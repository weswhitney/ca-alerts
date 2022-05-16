require("dotenv").config()
import forecast from "./lib/forecast"

module.exports.run = async (event: any, context: any, callback: any) => {
  const result = forecast()
  callback(null, result)
}
