import React, { useState } from 'react';
import "../assets/styles/Navbar.css";
import Donate from './Donate'; // Import the Donate component

const Navbar = () => {
    const [dropdown, setDropdown] = useState({});
    const [showDonate, setShowDonate] = useState(false); // Controls donate modal
    const [searchOpen, setSearchOpen] = useState(false); // Controls search box
    const [searchQuery, setSearchQuery] = useState(""); // Search input

    const toggleDropdown = (menu) => {
        setDropdown((prev) => ({ ...prev, [menu]: !prev[menu] }));
    };

    const handleSearch = (e) => {
        if (e.key === "Enter") {
            alert(`Searching for: ${searchQuery}`); // Replace with actual search logic
            setSearchQuery(""); // Clear input after search
            setSearchOpen(false); // Hide search box
        }
    };

    return (
        <>
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
                                <li><a href="https://www.cancercenter.com/stage-one-cancer">Stage 1 Cancer</a></li>
                                <li><a href="https://www.cancercenter.com/stage-two-cancer">Stage 2 Cancer</a></li>
                                <li><a href="https://www.cancercenter.com/stage-three-cancer">Stage 3 Cancer</a></li>
                                <li><a href="https://www.cancercenter.com/stage-four-cancer">Stage 4 Cancer</a></li>
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
                    <span className="icon" onClick={() => setSearchOpen(true)}>🔍</span>

                    {searchOpen && (
                        <div className="search-container">
                            <input
                                type="text"
                                className="search-input"
                                placeholder="Search..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onKeyDown={handleSearch}
                                autoFocus
                            />
                            <button className="close-search" onClick={() => setSearchOpen(false)}>❌</button>
                        </div>
                    )}

                    <button className="donate-btn" onClick={() => setShowDonate(true)}>Donate</button>
                </div>
            </nav>

            {showDonate && <Donate onClose={() => setShowDonate(false)} />}
        </>
    );
};

export default Navbar;
