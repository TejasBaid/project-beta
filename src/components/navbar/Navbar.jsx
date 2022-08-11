import React, { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

export const Navbar = () => {
    const [active, setActive] = useState("");
    const openLinks = () => {
        active === "" ? setActive("active") : setActive("");
    }
    return (
        <div className="navbar">
            <img src="assets/dpsrkp-logo.png" alt="DPS RKP logo"/>
            <div className={"links " + active}>
                <Link to="/">Home</Link>
                <Link to="/analytics">Analytics</Link>
                <Link to="/about">About</Link>
            </div>
            <div className={"hamburger " + active} onClick={() => openLinks()}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </div>
    );
}