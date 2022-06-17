const express = require("express");
const request = require('request');
const cors = require("cors");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const port = process.env.PORT || 4001;

app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

//CORS Middleware
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET,HEAD,OPTIONS,POST,PUT,DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization"
  );

  next();
});

const url_line_notification = "https://notify-api.line.me/api/notify";
app.post("/api/send_line", (req, res) => {
  request({
    method: 'POST',
    uri: url_line_notification,
    header: {
      'Content-Type': 'multipart/form-data',
    },
    auth: {
      bearer: "tBYCunbPEFnAu7tOKJBaJoT40o48D0yfzhRIPsrEZ4j",
    },
    form: {
      message: req.body.text
    },
  }, (err, httpResponse, body) => {
    if (err) {
      res.send(err);
    } else {
      res.send(body);
    }
  });
});

app.post("/api/send_telegram", (req, res) => {

  res.send("Hello! Node.js");
});


app.use(express.static(path.resolve(__dirname, "..", "build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});

app.listen(port, () => {
  console.log("Starting node.js at port " + port);
});