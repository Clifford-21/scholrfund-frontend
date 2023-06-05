import React, { useState } from 'react';
import { Link, Navigate } from "react-router-dom";
import "../styles/RegistrationForm.css";

const RegistrationForm3 = () => {
    const [first_name, setfirst_name] = useState('');
    const [last_name, setlast_name] = useState('');
    const [email_address, setEmailAddress] = useState('');
    const [physical_address, setphysical_address] = useState('');
    const [password, setpassword] = useState('');
    const [Cellphone, setCellphone] = useState('');
    const [id_copy, setid_copy] = useState(null);
    const [matric_certificate, setmatric_certificate] = useState(null);
    const [proof_of_income, setproof_of_income] = useState(null);

    const handleInputChange = (e, setInput) => {
        setInput(e.target.value);
    };

    const handleFileChange = (e, setFile) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('first_name', first_name);
        formData.append('last_name', last_name);
        formData.append('email_address', email_address);
        formData.append('physical_address', physical_address);
        formData.append('password', password);
        formData.append('Cellphone', Cellphone);
        formData.append('id_copy', id_copy);
        formData.append('matric_certificate', matric_certificate);
        formData.append('proof_of_income', proof_of_income);

        try {
            const response = await fetch('http://16.171.24.43:8000/api/learners/', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                console.log('Data sent successfully');
            } else {
                console.error('Error sending data');
            }
        } catch (error) {
            console.error('Error sending data', error);
        }
    };

    return (
        <div className="content-area">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="first_name" class="text-label">first name</label>
                    <input class="form-control" type="text" id="first_name" value={first_name} onChange={(e) => handleInputChange(e, setfirst_name)} />
                </div>

                <div>
                    <label htmlFor="last_name" class="text-label">last name</label>
                    <input class="form-control" type="text" id="last_name" value={last_name} onChange={(e) => handleInputChange(e, setlast_name)} />
                </div>
                <div>
                    <label htmlFor="email_address" class="text-label">email address</label>
                    <input class="form-control" type="text" id="email_address" value={email_address} onChange={(e) => handleInputChange(e, setEmailAddress)} />
                </div>
                <div>
                    <label htmlFor="physical_address" class="text-label">physical address</label>
                    <input class="form-control" type="text" id="physical_address" value={physical_address} onChange={(e) => handleInputChange(e, setphysical_address)} />
                </div>
                <div>
                    <label htmlFor="password" class="text-label">password</label>
                    <input class="form-control" type="text" id="password" value={password} onChange={(e) => handleInputChange(e, setpassword)} />
                </div>
                <div>
                    <label htmlFor="Cellphone" class="text-label">cell number</label>
                    <input class="form-control" type="text" id="Cellphone" value={Cellphone} onChange={(e) => handleInputChange(e, setCellphone)} />
                </div>

                <div class="input-group mb-3" id="id-input">
                    <label class="input-group-text" htmlFor="id_copy" id="id-label">ID copy</label>
                    <input type="file" id="id_copy" onChange={(e) => handleFileChange(e, setid_copy)} />
                </div>

                <div class="input-group mb-3">
                    <label htmlFor="matric_certificate" id="certificate-label">matric certificate</label>
                    <input type="file" id="matric_certificate" onChange={(e) => handleFileChange(e, setmatric_certificate)} />
                </div>
                <div class="input-group mb-3">
                    <label htmlFor="proof_of_income" id="income-label">proof of income</label>
                    <input type="file" id="proof_of_income" onChange={(e) => handleFileChange(e, setproof_of_income)} />
                </div>

                <Link to="/"><button type="submit" id="application-btn" class="btn btn-primary">Send application</button></Link>
            </form>
        </div>
    );
};

export default RegistrationForm3;
