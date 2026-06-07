# Tyro Interview Order API

A simple Node.js + Express + MongoDB API built for a technical interview.  
The API accepts orders and validates that the customer exists before saving.

## Features

- Offline‑friendly setup using MongoDB Community Server  
- Clean MVC structure (models, controllers, routes)  
- Customer validation before order creation  
- Jest + Supertest test suite  
- Fully version‑controlled with Git & GitHub  

## Tech Stack

- Node.js  
- Express  
- MongoDB Community Server  
- Mongoose  
- Jest + Supertest  

## Setup Instructions

### Install dependencies

```bash
npm install
```

### Create `.env`

```bash
MONGO_URI=mongodb://localhost:27017/takehome
PORT=3000
```

### Seed the database

```bash
node src/seedCustomer.js
```

### Run the server

```bash
npm run dev
```

### Run tests

```bash
npm test
```

## API Endpoints

### POST `/orders`

Create a new order.

#### Request body

```json
{
  "orderId": "O1",
  "customerId": "C1",
  "item": "Book",
  "quantity": 2
}
```

#### Responses

- `201` — Order created  
- `400` — Customer does not exist  
- `400` — Invalid payload  

## Project Structure

```bash
src/
  app.js
  server.js
  db.js
  controllers/
    orderController.js
  models/
    Customer.js
    Order.js
  routes/
    orders.js
tests/
  order.test.js
```

## Testing

Jest + Supertest are used to test:

- Successful order creation  
- Customer validation failure  
