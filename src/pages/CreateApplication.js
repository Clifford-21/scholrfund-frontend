import React, { useState } from 'react';
import "../styles/CreateApplication.css";
import { Navigate, Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import register_image from "../images/register_image.jpg";

function CreateApplication() {
    const [applicationType, setApplicationType] = useState("");
    const [bootcampType, setBootcampType] = useState("");
    const [firstChoiceSponsor, setFirstChoiceSponsor] = useState("");
    const [secondChoiceSponsor, setSecondChoiceSponsor] = useState("");


    let url = "http://localhost:8000/api/applications";
    let data = { applicationType, bootcampType, firstChoiceSponsor, secondChoiceSponsor };
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
        <div>
            <Navigation />
            <h1 className="heading">You are taking your first step. Apply to a sponsor.</h1>
            <div className="content-section">
                <div className="picture-section">
                    <img id="customersimg" src={register_image} alt="students graduation" />
                </div>
                <div className="form-section">
                    <form className="customer-form" onSubmit={handleSubmit}>
                        <div class="dropdown">
                            <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" onSelect={(e) => setApplicationType(e.target.value)}>
                                <option selected>Application type</option>
                                <option value="1">Software Engineering</option>
                                <option value="2">Web Developement</option>
                                <option value="3">Data Science</option>
                            </select>
                        </div>

                        <div class="dropdown">
                            <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" onSelect={(e) => setBootcampType(e.target.value)}>
                                <option selected>Bootcamp type</option>
                                <option value="1">Immersive learning</option>
                                <option value="2">On-site bootcamp</option>
                                <option value="3">Online bootcamp</option>
                            </select>
                        </div>

                        <div class="dropdown">
                            <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" onSelect={(e) => setFirstChoiceSponsor(e.target.value)}>
                                <option selected>First choice of sponsor</option>
                                <option value="1">Investec</option>
                                <option value="2">EY</option>
                                <option value="3">FNB</option>
                                <option value="3">Discovery</option>
                                <option value="3">Standard Bank</option>
                            </select>
                        </div>

                        <div class="dropdown">
                            <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" onSelect={(e) => setSecondChoiceSponsor(e.target.value)}>
                                <option selected>Second choice of sponsor</option>
                                <option value="1">Investec</option>
                                <option value="2">EY</option>
                                <option value="3">FNB</option>
                                <option value="3">Discovery</option>
                                <option value="3">Standard Bank</option>
                            </select>
                        </div>

                        <Link to="/"><button type="button" class="btn btn-success">Submit</button></Link>
                    </form>
                </div>
            </div>


        </div >
    )
}

export default CreateApplication;