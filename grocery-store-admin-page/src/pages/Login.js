import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
export const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const token = window.localStorage.getItem("token");
  const fn = async () => {
    const a = await axios.post(`http://localhost:8080/login`, {
      username: username,
      password: password,
    });
    console.log(a.data.token);
    await window.localStorage.setItem("token", a.data.token);
    if (token) navigate("/admin");
  };
  const name = (e) => {
    setUsername(e.target.value);
  };
  const pass = (e) => {
    setPassword(e.target.value);
  };
  const log = () => {
    fn();
  };
  useEffect(() => {
    //   axios.get()
    const gettingToken = async () => {
      if (token) navigate("/admin");
      else navigate("/");
    };
    gettingToken();
  }, []);

  return (
    <div className="login">
      <div className="miniCon">
        <h1>login</h1>
        <input placeholder="username" onChange={name}></input>
        <input placeholder="password" onChange={pass}></input>
        <button onClick={log}>login</button>
        <Link to="/register">
          <div>sign-up</div>
        </Link>
      </div>
    </div>
  );
};
