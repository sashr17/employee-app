const express = require("express");
const cors = require("cors");
const app = express();

const routes = require("./routes");
const PORT = 5000;

app.use(cors());
app.use("/employees", routes);

app.listen(PORT, () => {
  console.log(`Employee app listening at http://localhost:${PORT}`);
});
