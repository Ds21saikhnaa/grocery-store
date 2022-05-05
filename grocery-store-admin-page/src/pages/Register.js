import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useContext } from "react";
import { DataContext } from "../App";
export const Register = () => {
    const {setPassword, setUsername, stat1, register} = useContext(DataContext);
    const navigate = useNavigate();
    const name = (e) => {
        setUsername(e.target.value)
    }
    const pass = (e) => {
        setPassword(e.target.value)
    }
    const log = () => {
        register()
    }
    useEffect(() => {
        const gettingToken = async () => {
          if (stat1 === 200){ 
            navigate("/");
          }//else if(stat1 !== 200) //alert('ali hediin iim nerte hun bn ahin oroldono uu!')
        };
        gettingToken();
      }, [stat1]);
    return(
        <div className="login">
            <div className='miniCon'>
                <h1>Sign up</h1>
                    <input placeholder="username" onChange={name}></input>
                    <input placeholder="password" onChange={pass}></input>
                    <button onClick={log}>sign up</button>
            </div>
        </div>
    )
} 
