import React from "react";
// import Carousel from 'react-bootstrap/Carousel';
import logo from '../assests/logo3.jpg';

import './HeaderStyles.css';

function Header() {
    return (
        <div>
            <nav class="navbar collapseOnSelect navbar-expand-lg bg-dark navbar-dark sticky-top">
                <a class="navbar-brand" href="#">
                    <img src={logo} alt="logo" style={{ width: "43px", borderRadius: "50%" }} />
                </a>
                <h3 style={{ color: "white" }}>EBS </h3>
                <ul class="navbar-nav">
                    <span class="sr-only">(current)</span>
                    <li class="nav-item">
                        <a class="nav-link" href="/">HOME</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="/AboutUs">ABOUT US</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/contactus">CONTACT US</a>
                    </li>

                </ul>
            </nav>
            {/* side bar */}
            <div class="sidebar">
                <a class="active" href="http://localhost:3000/PaymentHome">Home</a>


                <a href="http://localhost:3000/savePayment/">Pay</a>
                <a href="http://localhost:3000/getPaymentId/">view payment</a>
                <a href="http://localhost:3000/payment/all">All payment List</a>
                <a href="/LogoutCustomer">Logout</a>
            </div>

        </div>
    );
}

export default Header;
