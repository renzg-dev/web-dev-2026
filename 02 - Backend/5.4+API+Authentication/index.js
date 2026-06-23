import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "renz-test";
const yourPassword = "password";
const yourAPIKey = "6011f103-c0a0-4ddf-8f23-85730a32f4c7";
const yourBearerToken = "dc408a2c-e403-45dc-9c2e-87b8708ccf12";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", (req, res) => {
  //TODO 2: Use axios to hit up the /random endpoint
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.

  axios
    .get(`${API_URL}random`)
    .then((response) => {
      const data = response.data;
      res.render("index.ejs", { content: JSON.stringify(data) });
    })
    .catch((error) => {
      console.error(error);
      res.render("index.ejs", { content: "Error fetching data." });
    })
    .finally(() => {
      console.log("Request to /random completed.");
    });
});

app.get("/basicAuth", (req, res) => {
  //TODO 3: Write your code here to hit up the /all endpoint
  //Specify that you only want the secrets from page 2
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908
  /*
   axios.get(URL, {
      auth: {
        username: "abc",
        password: "123",
      },
    });
  */
  axios
    .get(`${API_URL}all?page=2`, {
      auth: {
        username: yourUsername,
        password: yourPassword,
      },
    })
    .then((response) => {
      const data = response.data;
      res.render("index.ejs", { content: JSON.stringify(data) });
    })
    .catch((error) => {
      console.error(error);
      res.render("index.ejs", { content: "Error fetching data." });
    });
});

app.get("/apiKey", (req, res) => {
  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.

  axios
    .get(`${API_URL}filter`, {
      params: {
        embarassment: 5,
        apiKey: yourAPIKey,
      },
    })
    .then((response) => {
      const data = response.data;
      res.render("index.ejs", { content: JSON.stringify(data) });
    })
    .catch((error) => {
      console.error(error);
      res.render("index.ejs", { content: "Error fetching data." });
    });
});

app.get("/bearerToken", (req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  /*
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer <YOUR TOKEN HERE>` 
    },
  });
  */

  axios
    .get(`${API_URL}secrets/42`, {
      headers: {
        Authorization: `Bearer ${yourBearerToken}`,
      },
    })
    .then((response) => {
      const data = response.data;
      res.render("index.ejs", { content: JSON.stringify(data) });
    })
    .catch((error) => {
      console.error(error);
      res.render("index.ejs", { content: "Error fetching data." });
    });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
