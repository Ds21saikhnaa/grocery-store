import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Login, Register } from "./pages/";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
// const [a, setA] = useState("");
// const token = window.localStorage.getItem("token");
// const fn = async () => {
//   const a = await axios.post(`http://localhost:8080/login`, {
//     username: username,
//     password: password,
//   });
//   console.log(a.data.token);
//   await window.localStorage.setItem("token", a.data.token);
//   setA(token);
//   if (token) navigate("/admin");
// };
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="/admin" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
