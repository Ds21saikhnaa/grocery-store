const express = require("express");
const crypto = require("crypto");
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
const isAuthenticated = async (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(402).send([]);
  }
  const sessionDoc = await getDoc(
    doc(db, "sessions", req.headers.authorization)
  );
  if (!sessionDoc.exists()) {
    return res.status(403).send([]);
  }

  if (sessionDoc.data().expireDate.seconds <= new Date().getTime() / 1000) {
    return res.status(403).send([]);
  }

  const userDoc = await getDoc(doc(db, "users", sessionDoc.data().user));
  req.user = userDoc;

  next();
};

const isAdmin = (req, res, next) => {
  if (!req.user.data().isAdmin) {
    return res.status(403).send({});
  }

  next();
};
app.post("/register", async (req, res) => {
  const { username, password } = req.body;

  const user = await getDoc(doc(db, "users", username));
  if (user.exists()) {
    // User with this username does already exist.
    return res.status(400).send({
      message: "This username already exists.",
    });
  }

  const hashedPassword = crypto
    .createHash("sha256")
    .update(password)
    .digest("hex");
  await setDoc(doc(db, "users", username), {
    password: hashedPassword,
  });

  res.send({ success: true });
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await getDoc(doc(db, "users", username));
  if (!user.exists()) {
    // User with this username does not exist.
    return res.status(400).send({
      message: "This username does not exist.",
    });
  }
  const hash = crypto.createHash("sha256").update(password).digest("hex");
  if (user.data().password !== hash) {
    return res.status(400).send({
      message: "Wrong password!",
    });
  }
  const token = crypto.randomUUID();
  await setDoc(doc(db, "sessions", username), {
    user: user.id,
    token: token,
    expireDate: new Date(Date.now() + 5 * 60 * 1000),
  });

  res.send({ token });
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
  const editableFields = ["name", "description", "price", "image", "category"];
  for (const key of Object.keys(req.body)) {
    if (!editableFields.includes(key)) {
      res.status(400).send({
        message: `"${key}" field is not editable!`,
      });
      return;
    }
  }
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
  res.send("me");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
