import React from 'react';
import { Link } from "react-router-dom";
import "../styles/Navigation.css";
import ScholrFundlLogo from "../images/ScholrFundLogo.png";


function Navigation() {
    return (
        <div className="navigation">
            <Link to="/"><img className="scholfund-logo" src={ScholrFundlLogo} alt="scholfund-logo" /></Link>

            <div>
                <ul className="navigation-links">
                    <Link to="/apply" className="link">apply</Link>
                    <Link to="/apply" className="link">my profile</Link>
                    <Link to="/" className="link">logout</Link>
                </ul>
            </div>

        </div>
    )
}

export default Navigation;