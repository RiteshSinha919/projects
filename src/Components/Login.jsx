import { useState } from 'react';
import "./Login.css";

const Login = () => {

    return (
        <div className="main-container">
            <div className="sub-container">
                <div className="login-container">
                    <img id="logo" src={ process.env.PUBLIC_URL + "/logo.svg"} />
                    <input type="text" name="user_email"  placeholder="E-mail" id="email" />
                    <input type="password" name="user_password"  placeholder="Password" id="password" />
                    <button type="button" id="login-btn">Sign In</button>
                </div>
                <div className="register-container">
                    <button type="button" id="forget-btn">Forgot Password?</button>
                    <button type="button" id="register-btn">Sign Up</button>
                </div>
            </div>
        </div>
    );
}

export default Login;