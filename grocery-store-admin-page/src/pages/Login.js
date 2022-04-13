import '../App.css'
import {Link} from 'react-router-dom';
import axios from "axios"
import { useState } from 'react'
export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')
    const fn = async () => {
        await axios.post(`http://localhost:8080/login`, {
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
        <div className='login'>
            <div className='miniCon'>
            <h1>login</h1>
                <input placeholder="username" onChange={name}></input>
                <input placeholder="password" onChange={pass}></input>
                <button onClick={log}>login</button>
                <Link to="/register">
                    <div>sign-up</div>
                </Link>
            </div>
        </div>
    )
} 
