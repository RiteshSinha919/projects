import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import "./Register.css";

const Login = () => {

    const [message, setMessage] = useState("");
    const [userData, setUserData] = useState({
        userEmail: "",
        userPassword: "",
        userConfirmedPassword: ""
    });

    const handleChange =(e) => {
        const { name , value } = e.target;
        setUserData((prevUserData) => ({...prevUserData, [name]: value}))
    }


    const handleRegister = (e) => {
        e.preventDefault();

        if(userData.userPassword === userData.userConfirmedPassword){
            axios.post("http://localhost:3000/user/register", userData)
            .then((response) => {
                console.log(response.data);
                setMessage(response.data.message)
            })
            .catch((error) => {
                console.error(error);
            })
        }
        else {
            console.error("Password do not match"); 
            setMessage("Password do not match")
        }
    }

    return (
        <div className="main-container">
            <div className="sub-container">
                <div className="login-container">
                    <img id="logo" src={ process.env.PUBLIC_URL + "/logo.svg"} />
                    <input type="email" name="userEmail" value={userData.userEmail} placeholder="E-mail" id="email" onChange={handleChange} required/>
                    <input type="password" name="userPassword" value={userData.userPassword} placeholder="Password" id="password" onChange={handleChange} required/>
                    <input type="password" name="userConfirmedPassword" value={userData.userConfirmedPassword} placeholder="Confirm Password" id="cpassword" onChange={handleChange} required/>
                    <button type="button" id="login-btn" onClick={handleRegister}>Sign Up</button>
                </div>
                <div className="re-login-container">
                    <p>Have an Account?</p>
                    <Link to="/"><button type="button" id="register-btn">Sign In</button></Link>
                </div>
            </div>
        </div>
    );
}

export default Login;