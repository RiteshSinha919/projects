import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import "./Login.css";

const Login = () => {

    const [message, setMessage] = useState("");
    const [userData, setUserData] = useState({
        userEmail: "",
        userPassword: ""
    });

    const HandleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevUserData) => ({...prevUserData, [name] : value}));
    }

    const handleLogin = (e) => {
        e.preventDefault();

        axios
        .post("http://localhost:3000/user/login/", userData)
        .then((response) => {
          console.log(response.data); 
          setMessage(response.data.message);
        })
        .catch((error) => {
          console.error(error);
        });
    
    }

    return (
        <div className="main-container">
            <div className="sub-container">
                <div className="login-container">
                    <img id="logo" src={ process.env.PUBLIC_URL + "/logo.svg"} />
                    <input type="email" name="userEmail" value = {userData.userEmail} placeholder="E-mail" id="email" onChange={HandleChange} required/>
                    <input type="password" name="userPassword" value={userData.userPassword} placeholder="Password" id="password" onChange={HandleChange} required/>
                    <button type="button" id="login-btn" onClick={handleLogin}>Sign In</button>
                </div>
                <div className="register-container">
                    <button type="button" id="forget-btn">Forgot Password?</button>
                    <Link to="user/register/"><button type="button" id="register-btn">Sign Up</button></Link>
                </div>
            </div>
        </div>
    );
}

export default Login;