import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const data = {
  title: "Enter Your Name Below 👇",
};

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { data });
});

app.post("/submit", (req, res) => {
  const numLetters = req.body["fName"].length + req.body["lName"].length;
  data.title = `Your name has ${numLetters} letters!`;

  res.render("index.ejs", { data });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
