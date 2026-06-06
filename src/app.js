const express = require("express");
const ordersRoute = require("./routes/orders");

const app = express();

app.use(express.json());
app.use("/orders", ordersRoute);

module.exports = app;
