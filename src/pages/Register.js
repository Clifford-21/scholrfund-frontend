import React from 'react';
import register from "../images/register.jpg";
import RegistrationForm3 from '../components/RegistrationForm3';


function Register() {

    return (
        <div class="content" style={{ width: "100vw", height: "100vh", backgroundImage: `url(${register})`, backgroundSize: "cover" }}>
            <RegistrationForm3 />


        </div>
    )
}

export default Register;