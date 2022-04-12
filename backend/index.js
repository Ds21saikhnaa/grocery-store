const express = require("express");
const dotenv = require("dotenv");
const { getFirestore } = require("firebase/firestore");
const { initializeApp } = require("firebase/app");
const cors = require("cors");
const {
  collection,
  setDoc,
  getDoc,
  doc,
  deleteDoc,
  addDoc,
  getDocs,
} = require("firebase/firestore");
const app = express();
const port = 8080;
app.use(express.json());
app.use(cors());
dotenv.config();
const {
  API_KEY,
  AUTH_DOMAIN,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID,
} = process.env;
console.log(API_KEY);
firebaseConfig = initializeApp({
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
});
const db = getFirestore();
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
app.get("/products", async (req, res) => {
  const querySnapshot = await getDocs(collection(db, "datas"));
  const products = [];
  for (const doc of querySnapshot.docs) {
    products.push({
      id: doc.id,
      ...doc.data(),
    });
  }

  res.send(products);
});
app.post("/products", async (req, res) => {
  console.log(req.body);
  const data = req.body;
  const citiesRef = await addDoc(collection(db, "datas"), data);
  res.send({
    id: citiesRef.id,
    ...data,
  });
});
// Product detail
app.get("/products/:id", async (req, res) => {
  console.log(req.query);
  console.log(req.params);
  const getID = await getDoc(doc(db, "datas", req.params.id));
  res.status(200).send({
    id: getID.id,
    ...getID.data(),
  });
});

// Edit product
app.patch("/products/:id", async (req, res) => {
  const editableFields = ["name", "description", "price"];
  const getID = doc(db, "datas", req.params.id);
  await setDoc(getID, req.body, { merge: true });
  const list = await getDoc(getID);
  res.send({
    id: list.id,
    ...list.data(),
  });
});

app.put("/products/:id", async (req, res) => {
  const getID = doc(db, "datas", req.params.id);
  await setDoc(getID, req.body);
  const list = await getDoc(getID);
  res.send({
    id: list.id,
    ...list.data(),
  });
});

// Delete product
app.delete("/products/:id", async (req, res) => {
  const getID = doc(db, "datas", req.params.id);
  await deleteDoc(getID);
  res.status(204).send({});
});

// Get current user details
app.get("/me", (req, res) => {
  // document.get
  res.send("me");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
