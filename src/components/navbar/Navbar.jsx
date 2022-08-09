import React, { useState } from "react";
import "./Navbar.scss";

export const Navbar = () => {
    const [active, setActive] = useState("");
    const openLinks = () => {
        active === "" ? setActive("active") : setActive("");
    }
    return (
        <div className="navbar">
            <img src="assets/dpsrkp-logo.png" alt="DPS RKP logo"/>
            <div className={"links " + active}>
                <a href="./">Home</a>
                <a href="./">About</a>
            </div>
            <div className={"hamburger " + active} onClick={() => openLinks()}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </div>
    );
}