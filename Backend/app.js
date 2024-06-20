require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const mongoose = require("mongoose");
const MONGO_URL = process.env.MONGO_URL;
const cron = require("node-cron");
const path = require("path");
const notificationWorker = require("./workers/notificationWorker");
const userRoute = require("./routes/user");


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(userRoute);

const PORT = process.env.PORT || 5000;

mongoose.set('strictQuery', true);
mongoose.connect(MONGO_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to mongoDb database(ATLAS)");
});
mongoose.connection.on("error", err => {
  console.log("Error connecting", err);
});
mongoose.connection.on("disconnected", () => {
  console.log("Mongoose is still disconnected");
});

let notificationTimes = [
  " 55 11 * * *",  ];// Array to store user-selected notification times


// Endpoint to set user-selected notification times
app.post("/setNotificationTimes", (req, res) => {

  notificationTimes = req.body.notificationTimes;
  res.send("Notification times set successfully.");
});

// Schedule notification cron jobs based on user-selected times
notificationTimes.forEach((time) => {
  cron.schedule(time, () => {
    notificationWorker();
  });
});

if (process.env.NODE_ENV === "production" || process.env.NODE_ENV === "staging") {
  app.use(express.static("frontend/build"));
  app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname + "/frontend/build/index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server has started on port: ${PORT}`);
});
