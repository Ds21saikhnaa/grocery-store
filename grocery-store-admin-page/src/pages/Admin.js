import '../App.css'
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Render } from "../components";
export const Admin = ({tok}) => {
    const navigate = useNavigate();
    const token = window.localStorage.getItem("token");
    useEffect(() => {
        const gettingToken = async () => {
            if (!token){ 
                navigate("/");
            }
        };
        console.log(tok);
        gettingToken();
    }, [tok])
    return (
        <div className="container">
            <div className="App">
                <Render/>
            </div>
        </div>
    )
} 
