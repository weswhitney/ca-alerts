"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
require("dotenv").config();
const forecast_1 = __importDefault(require("./lib/forecast"));
var AWS = require("aws-sdk");
async function run(_event, context, _callback) {
    const alert = await (0, forecast_1.default)();
    const msg = alert.alerts[0].description;
    var sns = new AWS.SNS();
    var params = {
        Message: msg,
        Subject: "Test SNS From Lambda",
        TopicArn: "arn:aws:sns:us-east-1:979673662712:topic-for-pusher-lambda",
    };
    sns.publish(params, context.done);
    console.log("published msg ", msg);
}
exports.run = run;
