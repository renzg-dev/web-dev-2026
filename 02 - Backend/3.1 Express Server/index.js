import express from "express";
const app = express();
const PORT = 3000;

// // Middleware to parse JSON bodies
// app.use(express.json());

// // Define a route for the root URL
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Start the server and listen on the specified port

app.listen(PORT, () => {
  // Callback function to run when the server starts
  console.log(`Server is running on port ${PORT}.`);
});
