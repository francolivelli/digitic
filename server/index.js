const express = require("express");
const dotenv = require("dotenv").config();
const dbConnect = require("./src/config/dbConnect");
const bodyParser = require("body-parser");
const routes = require("./src/routes");
const { notFound, errorHandler } = require("./src/middlewares/errorHandler");

const app = express();
const PORT = process.env.PORT || 4000;

dbConnect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api", routes);
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
