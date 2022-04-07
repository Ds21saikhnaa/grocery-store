const express = require("express");
const dotenv = require('dotenv')
const { getFirestore } = require("firebase/firestore");
const { initializeApp } = require("firebase/app");
const {
  collection,
  setDoc,
  doc,
  onSnapshot,
  addDoc,
  query,
  orderBy,} = require("firebase/firestore");
const app = express();
const port = 8080;
app.use(express.json());
dotenv.config();
const {
  API_KEY,
  AUTH_DOMAIN,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID
} = process.env
  firebaseConfig = initializeApp({
        apiKey: API_KEY,
        authDomain: AUTH_DOMAIN,
        projectId: PROJECT_ID,
        storageBucket: STORAGE_BUCKET,
        messagingSenderId: MESSAGING_SENDER_ID,
        appId: APP_ID
      })
const db = getFirestore()
let data = [
  {
    id: 1,
    api: API_KEY,
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
]
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
  console.log(req.query);
  console.log(req.body);
  const data = req.body;
  res.send(req.body);
});
app.post("/products", async(req, res) => {
  console.log(req.query);
  console.log(req.body);
  // const data = req.body
  req.body =   {
    id: 1,
     api: API_KEY,
     title: "Fits 15 Laptops",
     price: 109.95,
     description: "Stash your laptop",
     category: "men's clothing",
     image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
     rating: {
       rate: 3.9,
       count: 120,
     },
}
  const citiesRef = collection(db, "datas");
  await setDoc(doc(citiesRef, '2ysqgMf0p8qurWHoof9o'),req.body)
  res.send(req.body);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
