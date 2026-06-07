const mongoose = require("mongoose");
require("dotenv").config();
const Customer = require("./models/Customer");

async function run() {
  await mongoose.connect(process.env.MONGO_URI);

  await Customer.deleteMany({});
  await Customer.create({
    customerId: "C1",
    firstName: "Mark",
    lastName: "Lee"
  });

  console.log("Customer seeded");
  await mongoose.disconnect();
}

run();