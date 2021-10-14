import React from "react";
import logo from '../assests/logo3.jpg';
import './ConsumptionStyle.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div class="header">
            <nav class="navbar collapseOnSelect navbar-expand-lg bg-dark navbar-dark sticky-top">
                <a class="navbar-brand" href="#">
                    <img src={logo} alt="logo" style={{ width: "43px" , borderRadius: "50%" }} />
                </a>
                <h3 style={{ color: "white" }}>EBS </h3>
                <ul class="navbar-nav">
                    <span class="sr-only">(current)</span>
                    <li class="nav-item">
                        <a class="nav-link" href="/Home">HOME</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/AboutUs">ABOUT US</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/contactus">CONTACT US</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/">LOGOUT</a>
                    </li>
                </ul>
            </nav>
            <div class="sidebar">
                <a class="active" href="/ConsumptionHome">Home</a>
                <Link to={"/saveConsumption/"}> Add Consumption</Link>
                <Link to={"/allConsumption"}> View all consumption</Link>
                <a href="/">Logout</a>
            </div>
        </div>

    );
}
export default Header;