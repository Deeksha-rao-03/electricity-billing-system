import React, { useState } from 'react';
import logo from '../assests/logo3.jpg';
import icon from '../assests/icon.png';
import './Customer.css';
import Footer from '../Footer/Footer';
function CustomerApplication() {
    return (
        <div>
            <header>
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
                            <a class="nav-link" href="../LogoutCustomer">LOGOUT</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="../AboutUs">ABOUT US</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">CONTACT US</a>
                        </li>
                    </ul>
                </nav>
            </header>

            <div class="sidebar">
                <img src={icon} alt="logo" style={{ width: "103px", borderRadius: "50%" }} />
                <h3>Welcome  </h3>

                <a href="../CustomerAccount" >Account</a>
                <a class="active" href="../CustomerApplication">Applications</a>
                <a href="../DeleteCustomer">Delete Account</a>
                <a href="../LogoutCustomer">Logout</a>
            </div>

            <div class="container-account">
                <div class="card">
                    <div class="face face1">
                        <div class="content">
                            <p>Get alls for all your connection in one place</p>
                            <a href="/userBilling">Know More</a>
                        </div>
                    </div>
                    <div class="face face2">
                        <h4>View bills?</h4>
                    </div>
                </div>
                <div class="card">
                    <div class="face face1">
                        <div class="content">
                            <p>Pay all your bill without visiting any center just by phone or laptop</p>
                            <a href="/PaymentHome">Know More</a>
                        </div>
                    </div>
                    <div class="face face2">
                        <h4>Payment</h4>
                    </div>
                </div>
            </div>
            <footer>

                <section class="footer">
                    <div class="social">
                        <a href="#"><i class="fa fa-facebook"></i></a>
                        <a href="#"><i class="fa fa-instagram"></i></a>
                        <a href="#"><i class="fa fa-twitter"></i></a>
                        <a href="#"><i class="fa fa-linkedin"></i></a>
                        <a href="#"><i class="fa fa-youtube"></i></a>
                    </div>

                    <ul className="list">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Help</a>
                        </li>
                        <li>
                            <a href="#">Contact Us</a>
                        </li>
                        <li>
                            <a href="#">Privacy Policy</a>
                        </li>
                    </ul>
                    <p className="copyright">
                        Electricity Billing System @ 2021
                    </p>
                </section>

            </footer>
        </div>


    );
}
export default CustomerApplication;