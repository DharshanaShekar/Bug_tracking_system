import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './login.css';


const Login=()=>{
    const navigate=useNavigate(null);
    const [formInput, setFormInput] = useState({
        name: "",
        password: ""
    });

    function inputChanged(e) {
        setFormInput({
            ...formInput,
            [e.target.name]: e.target.value
        });
    }

    async function submit(e) {
        e.preventDefault();
        try {
            axios.defaults.baseURL = 'http://localhost:3500';
            const response = await axios.post("/login", formInput);
            if (response.data === true) {
                console.log("Login successful"); 
                navigate('/view');
            } else {
                console.log("Login failed"); 
            }
        } catch (error) {
            console.error("Error:", error); 
        }
    }

    return(
        <div className="loginBG">
            <form className='login-panel' onSubmit={submit}>
                <h1>Login:</h1>
                <input name='name' placeholder='Name' onChange={inputChanged} value={formInput.name}></input>
                <input name='password' type='password' placeholder='Password' onChange={inputChanged} value={formInput.password}></input>
                <button type='submit' >Login</button>
            </form>
        </div>
    );
}

export default Login;