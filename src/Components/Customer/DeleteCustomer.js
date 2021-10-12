import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import logo from '/module 3/ReactJS/electricity-billing-system/src/assests/logo3.jpg';
import icon from '/module 3/ReactJS/electricity-billing-system/src/assests/icon.png';
import './DeleteCustomer.css'
function DeleteCustomer(props) {

    const [customer, setCustomer] = useState(undefined);
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8081/customer/getuserdetails/' + props.match.params.customerId)
            .then(resp => setCustomer(resp.data));
    }, []);

    const handleSubmit = (event) => {
        const user = JSON.parse(localStorage.getItem('user'));
        axios.delete("http://localhost:8081/customer/delete/" + user.customerId).then(resp => setSubmitted(true));

        console.log("Customer Deleted successfully :");
        event.preventDefault();
    }

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
            <div>
                {
                    submitted && <Redirect to="/" />}
                <div class="sidebar">
                    <img src={icon} alt="logo" style={{ width: "103px", borderRadius: "50%" }} />
                    <h1 >Welcome Name</h1>

                    <a href="#home" >Account</a>
                    <a href="#news">Applications</a>
                    <a class="active" href="#contact">Delete Account</a>
                    <a href="#about">Back</a>
                    <a href="#about">Logout</a>
                </div>
                <div class="delete">
                    <h2>
                        ARE YOU SURE YOU WANT TO DELETE THIS ACCOUNT?
                    </h2>
                    <button onClick={handleSubmit} className="btn btn-primary">Delete</button>
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


            )
}
            export default DeleteCustomer;
