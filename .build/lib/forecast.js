"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
let url = `https://api.weatherbit.io/v2.0/alerts?lat=39.761554&lon=-104.962095&key=c50caacc89184c59af6dccae4339311a`;
const forecast = async function () {
    const response = await (0, node_fetch_1.default)(url);
    const body = await response.json();
    return body;
};
exports.default = forecast;
