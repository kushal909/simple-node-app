const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello from Node.js App deployed on AWS... kushal!");
});

app.listen(PORT, () => {
  console.log(`Server running on kushal http://localhost:${PORT}`);
});
