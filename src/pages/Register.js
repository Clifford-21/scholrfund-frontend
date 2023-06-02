import React from 'react';
import register from "../images/register.jpg";
import RegistrationForm from '../components/RegistrationForm';


function Register() {

    return (
        <div class="content" style={{ width: "100vw", height: "100vh", backgroundImage: `url(${register})`, backgroundSize: "cover" }}>
            <RegistrationForm />


        </div>
    )
}

export default Register;