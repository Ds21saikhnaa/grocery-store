import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useContext } from "react";
import { DataContext } from "../App";
export const Login = () => {
  const {setPassword, setUsername, stat, login} = useContext(DataContext);
  const navigate = useNavigate();
  const name = (e) => {
    setUsername(e.target.value);
  };
  const pass = (e) => {
    setPassword(e.target.value);
  };
  const log = () => {
    login();
  };
  useEffect(() => {
    const gettingToken = async () => {
      if (stat.status === 200) {
        navigate("/admin");

        // navigate("/login");
      }
    };
    gettingToken();
  }, [stat]);

  return (
    <div className="login">
      <div className="miniCon">
        <h1>login</h1>
        <input placeholder="username" onChange={name}></input>
        <input placeholder="password" type="password" onChange={pass}></input>
        <button onClick={log}>login</button>
        <Link to="/register">
          <div>sign-up</div>
        </Link>
      </div>
    </div>
  );
};
