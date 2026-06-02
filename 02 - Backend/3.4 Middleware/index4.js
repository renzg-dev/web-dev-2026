import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
let bandName = "";

// Middleware to parse URL-encoded data from the request body
app.use(bodyParser.urlencoded({ extended: true }));

// Custom middleware function to generate a band name based on the street and pet values from the request body
const generateBandName = (req, res, next) => {
  bandName = `${req.body.street}${req.body.pet}`;
  next();
};

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", generateBandName, (req, res) => {
  console.log(req.body);
  res.send(`<h1>Band Name:</h1> <h2>${bandName}</h2>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
