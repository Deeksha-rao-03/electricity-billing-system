import React, { useState } from 'react';
import logo from '/module 3/ReactJS/electricity-billing-system/src/assests/logo3.jpg';
import icon from '/module 3/ReactJS/electricity-billing-system/src/assests/icon.png';
import './CustomerApplicationStyles.css'
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
                            <a class="nav-link" href="#">HOME</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">REGISTER</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                                LOGIN
                            </a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="#">ADMIN</a>
                                <a class="dropdown-item" href="#">CUSTOMER</a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">ABOUT US</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">CONTACT US</a>
                        </li>
                    </ul>
                </nav>
            </header>
            <div class="sidebar">
                <img src={icon} alt="logo" style={{ width: "103px", borderRadius: "50%" }} />
                <h1 >Welcome Name</h1>

                <a href="#home" >Account</a>
                <a class="active" href="#news">Applications</a>
                <a href="#contact">Delete Account</a>
                <a href="#about">Back</a>
                <a href="#about">Logout</a>
            </div>



            <section>
                <div class="container">
                    <div class="card">
                        <div class="face face1">
                            <div class="content">
                                <p>Get a new connection with no delay</p>
                                <a href="#">Know More</a>
                            </div>
                        </div>
                        <div class="face face2">
                            <h4>Need a Connection?</h4>
                        </div>
                    </div>
                    <div class="card">
                        <div class="face face1">
                            <div class="content">
                                <p>Get alls for all your connection in one place</p>
                                <a href="#">Know More</a>
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
                                <a href="#">Know More</a>
                            </div>
                        </div>
                        <div class="face face2">
                            <h4>Payment</h4>
                        </div>
                    </div>
                    <div class="card">
                        <div class="face face1">
                            <div class="content">
                                <p>One point for all your confusions and doubts</p>
                                <a href="#">Know More</a>
                            </div>
                        </div>
                        <div class="face face2">
                            <h4>Still Confused?</h4>
                        </div>
                    </div>
                </div>
            </section>


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