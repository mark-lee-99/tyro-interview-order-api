const Customer = require("../models/Customer");
const Order = require("../models/Order");

exports.createOrder = async (req, res) => {
  try {
    const { orderId, customerId, item, quantity } = req.body;

    if (!orderId || !customerId || !item || typeof quantity !== "number") {
      return res.status(400).json({ error: "Invalid payload" });
    }

    const customer = await Customer.findOne({ customerId });
    if (!customer) {
      return res.status(404).json({ error: "Customer does not exist" });
    }

    const order = await Order.create({ orderId, customerId, item, quantity });
    return res.status(201).json(order);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal server error" });
  }
};
