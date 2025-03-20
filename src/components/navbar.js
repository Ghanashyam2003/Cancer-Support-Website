import React, { useState } from 'react';
import "../assets/styles/Navbar.css";

const Navbar = () => {
    const [dropdown, setDropdown] = useState({});

    const toggleDropdown = (menu) => {
        setDropdown((prev) => ({ ...prev, [menu]: !prev[menu] }));
    };

    return (
        <nav className="navbar">
            <div className="logo">BraveHearts</div>
            <ul className="nav-links">
                <li onMouseEnter={() => toggleDropdown("home")} onMouseLeave={() => toggleDropdown("home")}>
                    <a href="/Home">Home </a>
                    {dropdown.home && (
                        <ul className="dropdown">
                            <li><a href="/home-option1">Home Style 1</a></li>
                            <li><a href="/home-option2">Home Style 2</a></li>
                        </ul>
                    )}
                </li>

                <li onMouseEnter={() => toggleDropdown("causes")} onMouseLeave={() => toggleDropdown("causes")}>
                    <a href="/causes">Causes </a>
                    {dropdown.causes && (
                        <ul className="dropdown">
                            <li><a href="/causes-grid1">Causes-Grid Style 1</a></li>
                            <li><a href="/causes-grid2">Causes-Grid Style 2</a></li>
                            <li><a href="/causes-detail">Causes-Detail Style</a></li>
                            <li><a href="/causes-detail">Donor-dashboard</a></li>
                        </ul>
                    )}
                </li>

                <li onMouseEnter={() => toggleDropdown("pages")} onMouseLeave={() => toggleDropdown("pages")}>
                    <a href="/pages">Pages </a>
                    {dropdown.pages && (
                        <ul className="dropdown">
                            <li><a href="/faq">FAQ</a></li>
                            <li><a href="/events">Events</a></li>
                        </ul>
                    )}
                </li>

                <li onMouseEnter={() => toggleDropdown("about")} onMouseLeave={() => toggleDropdown("about")}>
                    <a href="/about">About </a>
                    {dropdown.about && (
                        <ul className="dropdown">
                            <li><a href="/team">Our Team</a></li>
                            <li><a href="/mission">Our Mission</a></li>
                        </ul>
                    )}
                </li>

                <li onMouseEnter={() => toggleDropdown("contact")} onMouseLeave={() => toggleDropdown("contact")}>
                    <a href="/contact">Contact </a>
                    {dropdown.contact && (
                        <ul className="dropdown">
                            <li><a href="/support">Support</a></li>
                            <li><a href="/inquiries">Inquiries</a></li>
                        </ul>
                    )}
                </li>
            </ul>

            <div className="navbar-right">
                <span className="icon">🔍</span>
                <button className="donate-btn">Donate</button>
            </div>
        </nav>
    );
};

export default Navbar;
