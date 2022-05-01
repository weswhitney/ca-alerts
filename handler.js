require("dotenv").config()
const getForecast = require("./lib/forecast")

module.exports.run = (event, context, callback) => {
  getForecast()
    .then((forecast) => {
      // eslint-disable-line arrow-body-style
      console.log("forecast: ", forecast)
    })
    .then(() => {
      callback(null, { success: true })
    })
    .catch((error) => {
      callback(error, { success: false })
    })
}
