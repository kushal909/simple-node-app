const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello from Node.js App deployed on AWS... kushal!");
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on kushal http://3.110.27.124:${PORT}`);
});
