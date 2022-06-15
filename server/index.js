const express = require("express");
const app = express();
const port = process.env.PORT || 4001;

//
const rsi = require('trading-indicator').rsi

app.get("/info", (req, res) => {

  function initPromise() {
    return new Promise(function (res, rej) {
      rsi(14, "close", "binance", "BTC/USDT", "5m", true)
    })
  }

  rsi(14, "close", "binance", "BTC/USDT", "5m", true)
    .then(function (result) {
      console.log(result); // "initResolve"
    })
    .then(function (result) {
      console.log(result); // "normalReturn"
    });

  console.log('status');
  // rsi(14, "close", "binance", "BTC/USDT", "5m", true)
  // console.log('a', a)
  res.send("Hello! Node.js");
});

app.listen(port, () => {
  console.log("Starting node.js at port " + port);
});