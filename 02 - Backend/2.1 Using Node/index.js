const fs = require("fs");

fs.writeFile("message.txt", "Hello, from NodeJS!", (err) => {
  if (err) {
    console.error("Error writing file:", err);
  } else {
    console.log("File written successfully!");
  }
});
