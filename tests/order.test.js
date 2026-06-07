const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../src/app");
const Customer = require("../src/models/Customer");
const Order = require("../src/models/Order");
require("dotenv").config();

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI);

  await Customer.deleteMany({});
  await Order.deleteMany({});

  await Customer.create({
    customerId: "C1",
    firstName: "Mark",
    lastName: "Lee"
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe("POST /orders", () => {
  it("creates an order when customer exists", async () => {
    const res = await request(app)
      .post("/orders")
      .send({ orderId: "O1", customerId: "C1", item: "Book", quantity: 2 });

    expect(res.status).toBe(201);
    expect(res.body.item).toBe("Book");
  });

  it("returns error when customer does not exist", async () => {
    const res = await request(app)
      .post("/orders")
      .send({ orderId: "O2", customerId: "C999", item: "Pen", quantity: 1 });

    expect(res.status).toBe(400);
    expect(res.body.error).toBe("Customer does not exist");
  });
});
