const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  customerId: { type: String, required: true, unique: true },
  firstName: String,
  lastName: String
});

module.exports = mongoose.model("Customer", customerSchema);