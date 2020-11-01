const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HgvSwHCldCU5ogIr1w3HEcM9EyA8pwyDi3iX1rtFS1SC1l8WZXINg16BvwtVfI6UUs3niCZta483aj7YA9ieSp300yI8x13bI"
);

//API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query["total"];

  console.log("Payment request received !!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  //OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - listen command
exports.api = functions.https.onRequest(app);
