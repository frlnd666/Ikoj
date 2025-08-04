// File: functions/index.js
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const generateAIResponse = require("./generate");

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.post("/generate", generateAIResponse);

exports.api = functions.https.onRequest(app);