import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
export const Login = ({fn, setPassword, setUsername, stat}) => {
  const navigate = useNavigate(); 
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
    const gettingToken = async () => {
      if (stat === 200){ 
        navigate("/admin");
      }
    };
    gettingToken();
  }, [stat]);

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
