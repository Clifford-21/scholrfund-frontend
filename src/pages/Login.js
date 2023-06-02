import React from 'react';
import "../styles/Login.css";
import LoginForm from '../components/LoginForm';
import login_video from "../videos/login_video.mp4";

function Login() {
    return (
        <div className="login-page">
            <video autoPlay loop muted id="login-video">
                <source src={login_video} type="video/mp4" />
            </video>

            <LoginForm />


        </div>
    )
}

export default Login