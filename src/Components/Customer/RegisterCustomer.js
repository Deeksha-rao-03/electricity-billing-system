import React, { useState } from 'react';
import axios from 'axios';
import { Alert } from 'react-alert';
import { Redirect } from 'react-router';
import { useForm } from "react-hook-form";
import logo from '../assests/logo3.jpg';
import './Customer.css';

function RegisterCustomer() {

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [submitted, setSubmitted] = useState(false);
   
    const handleSubmit = (event) => {

        let payload = {
            name: name,
            address: address,
            email: email,
            password: password
        }

        console.log(payload);

        axios.post("http://localhost:8080/customer/register", payload).then(resp => setSubmitted(true));

        alert("Customer Registered :" + payload.name);
        event.preventDefault();
    }
    return (

        <div>
            <header>
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
                            
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                                    LOGIN
                                </a>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="#">ADMIN</a>
                                    <a class="dropdown-item" href="../LoginCustomer">CUSTOMER</a>
                                </div>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="../AboutUs">ABOUT US</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">CONTACT US</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <div className="container-fluid">
                {
                    submitted && <Redirect to="/LoginCustomer" />}
                <div class="container-loginsection" style={{color:"cadetblue", textAlign:"center"}}>
                   <p></p>
                    <h6 style={{marginTop:"50%"}}>Be With This App</h6>
                    <h6>That Gives your Stress</h6>
                    <h6>    Wings And Let It Fly</h6>
                    <h6>    Away…</h6>

                    <h6>    Contactless payments</h6>

                    <h6>Bills on One touch</h6>    

                    
                </div>
                <div class="container-register">
                    <h4>REGISTER</h4>
                    <div className="form-group">
                        <label htmlFor="name">Customer Name</label>
                        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Enter customer name" id="name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Customer Address</label>
                        <input type="text" name="address" value={address} onChange={(e) => setAddress(e.target.value)} className="form-control" placeholder="Enter address" id="address" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Enter your email" id="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Enter password" id="password" />
                    </div>
                    <div>
                        <button onClick={handleSubmit} className="btn btn-primary">Register</button>
                        
                    </div>
                    <p></p>
                    <h6>Already have an account? <a href="../LoginCustomer">Sign In</a></h6>
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

export default RegisterCustomer;