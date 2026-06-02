import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  console.log(req.rawHeaders);
  res.send("<h1>Home Page</h1>");
});

app.post("/register", (req, res) => {
  res.sendStatus(201);
});

app.put("/user/renz", (req, res) => {
  res.sendStatus(200);
});

app.patch("/user/renz", (req, res) => {
  res.sendStatus(200);
});

app.delete("/user/renz", (req, res) => {
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
