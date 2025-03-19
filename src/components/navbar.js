// src/components/Navbar.js

import React from 'react';
import "../assets/styles/Navbar.css";


const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">BraveHearts</div>
            <ul className="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/causes">Causes</a></li>
                <li><a href="/pages">Pages</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
            <div className="navbar-right">
                <span className="icon">🔍</span>
                <button className="donate-btn">Donate</button>
            </div>
        </nav>
    );
};

export default Navbar;
