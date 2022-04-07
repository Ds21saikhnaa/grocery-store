const express = require("express");
const app = express();
const port = 8080;
app.use(express.json());

// GET - Get / List
// POST - Create
// PUT - Replace / edit (update)
// PATCH - Edit (update)
// DELETE - Delete

// 100-199 -> Inforational Responses
// 200-299 -> Success
// 300-399 -> Redirect
// 400-499 -> Client Error
// 500-599 -> Server Error

// JSON -> JavaScript Object Notation
let data = [
  {
    id: 1,
    title: "Fits 15 Laptops",
    price: 109.95,
    description: "Stash your laptop",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
];
app.post("/login", (req, res) => {
  console.log(req.query);
  console.log(req.body);
  res.send({
    success: true,
  });
});

app.post("/logout", (req, res) => {
  res.send("OK");
});
app.get("/products", (req, res) => {
  res.send(data);
});
app.get("/products", async (req, res) => {
  console.log(req.query);
  console.log(req.body);
  await db.collection().doc().set();
  
  res.send("success");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
