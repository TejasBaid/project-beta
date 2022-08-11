import React, { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

export const Navbar = () => {
    const [active, setActive] = useState("");
    const openLinks = () => {
        active === "" ? setActive("active") : setActive("");
    }
    const deActivate = () => {
        setActive("");
    }
    return (
        <div className="navbar">
            <div className="left">
                <img src="assets/dpsrkp-logo.png" alt="DPS RKP logo"/>
                <h1>DPS RK PURAM</h1>
            </div>
            <div className="right">
                <div className={"links " + active}>
                    <Link to="/" onClick={() => deActivate()}>Home</Link>
                    <Link to="/testimonials" onClick={() => deActivate()}>Testimonials</Link>
                    <Link to="/analytics" onClick={() => deActivate()}>Analytics</Link>
                    <Link to="/about" onClick={() => deActivate()}>About Us</Link>
                </div>
                <div className={"hamburger " + active} onClick={() => openLinks()}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </div>
    );
}