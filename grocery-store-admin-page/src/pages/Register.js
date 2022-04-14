import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import e from "cors";
export const Register = ({fn, setUsername, setPassword, stat}) => {
    const navigate = useNavigate();
    const name = (e) => {
        setUsername(e.target.value)
    }
    const pass = (e) => {
        setPassword(e.target.value)
    }
    const log = () => {
        fn()
    }
    useEffect(() => {
        const gettingToken = async () => {
          if (stat === 200){ 
            navigate("/");
          }else if(stat !== 200) alert('ali hediin iim nerte hun bn ahin oroldono uu!')
        };
        gettingToken();
      }, [stat]);
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
