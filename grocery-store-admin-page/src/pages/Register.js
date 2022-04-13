import axios from "axios"
import { useState } from 'react'
export const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')
    const fn = async () => {
        await axios.post(`http://localhost:8080/register`, {
            username: username,
            password: password,
          });
    }
    const name = (e) => {
        setUsername(e.target.value)
    }
    const pass = (e) => {
        setPassword(e.target.value)
    }
    const log = () => {
        fn()
    }
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
