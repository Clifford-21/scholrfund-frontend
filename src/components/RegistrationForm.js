import React, { useState } from 'react';
import { Link, Navigate } from "react-router-dom";
import "../styles/RegistrationForm.css";

function RegistrationForm() {
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [email_address, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
    const [cell_number, setCellNumber] = useState("");
    const [physical_address, setPhysicalAddress] = useState("");
    const [id_copy, setIDCopy] = useState("");
    const [matric_certificate, setMatricCertificate] = useState("");
    const [proof_of_income, setPOI] = useState("");
    const [isPending, setIsPending] = useState(false);

    let url = "http://127.0.0.1:8000/api/learners/";
    let data = { first_name, last_name, email_address, password, cell_number, physical_address, id_copy, matric_certificate, proof_of_income };
    let options = { method: "POST", body: JSON.stringify(data), headers: { "Content-Type": "application/json" } }


    function handleSubmit(e) {
        e.preventDefault();
        fetch(url, options)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                Navigate("/");
            })
    }



    return (
        <div className="content-area">
            <form id="login-form" onSubmit={handleSubmit}>
                <input class="form-control" type="text" placeholder="First name" aria-label="default input example" onChange={(e) => setFirstName(e.target.value)} />
                <input class="form-control" type="text" placeholder="Last name" aria-label="default input example" onChange={(e) => setLastName(e.target.value)} />
                <input class="form-control" type="text" placeholder="Email address" aria-label="default input example" onChange={(e) => setEmailAddress(e.target.value)} />
                <input type="password" id="inputPassword5" class="form-control" placeholder="password" aria-labelledby="passwordHelpBlock" onChange={(e) => setPassword(e.target.value)} />
                <input class="form-control" type="text" placeholder="Cellphone number" aria-label="default input example" onChange={(e) => setCellNumber(e.target.value)} />
                <input class="form-control" type="text" placeholder="Block number, Street, Postal Code, City" aria-label="default input example" onChange={(e) => setPhysicalAddress(e.target.value)} />
                <input class="form-control" type="text" placeholder="ID number" aria-label="default input example" onChange={(e) => setIDCopy(e.target.value)} />
                <input class="form-control" type="text" placeholder="Matric Certificate" aria-label="default input example" onChange={(e) => setMatricCertificate(e.target.value)} />
                <input class="form-control" type="text" placeholder="Proof of income" aria-label="default input example" onChange={(e) => setPOI(e.target.value)} />


                {!isPending && <Link to="/"><button type="submit" id="application-btn" class="btn btn-primary">Send application</button></Link>}
            </form>
        </div>
    )
}

export default RegistrationForm;