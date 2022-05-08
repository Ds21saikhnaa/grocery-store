import { SeeToList } from "../components";
import { useNavigate } from "react-router-dom";
import '../App.css';
import { useEffect } from "react";
export const Render = () => {
  const navigate = useNavigate();
  const token = window.localStorage.getItem("token");
  useEffect(() => {
    const gettingToken = async () => {
      if (!token){ 
          navigate("/");
      }
  };
  gettingToken();
  }, [token])
  return (
      <div className="column">
        <SeeToList/>
      </div>
  );
};
