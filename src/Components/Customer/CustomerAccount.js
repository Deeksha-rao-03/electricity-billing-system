import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';
import logo from '/module 3/ReactJS/electricity-billing-system/src/assests/logo3.jpg';
import icon from '/module 3/ReactJS/electricity-billing-system/src/assests/icon.png';
import './CustomerAccountStyles.css'

import {Link} from 'react-router-dom';
function CustomerAccount(props) {

    const [customerId, setCustomerId] = useState(undefined);
    const [name, setName] = useState(undefined);
    const [address, setAddress] = useState(undefined);
    const [email, setEmail] = useState(undefined);
    const [password, setPassword] = useState(undefined);

    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        axios.get('http://localhost:8080/customer/getuserdetails/' + user.customerId)
            .then(resp => {setCustomerId(resp.data.customerId); setName(resp.data.name); setAddress(resp.data.address); setEmail(resp.data.email); setPassword(resp.data.password);});
    }, []);

    const handleSubmit = (event) => {

        let payload = {
          customerId: customerId,
          name: name,
          address: address,
          email:email,
          password:password
        }
    
        console.log(payload);
    
        axios.put("http://localhost:8080/customer/update", payload).then(resp => setSubmitted(true));
    
        console.log("customer updated successfully :");
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
            <div class="sidebar">
                
                <img src={icon} alt="logo" style={{ width: "103px", borderRadius: "50%" }} />
                <h4>Welcome  </h4>
                <a class="active" href="#home" >Account</a>
                <a href="#news">Applications</a>
                <a href="#contact">Delete Account</a>
                <a href="#about">Logout</a>
            </div>

            <div className="container-fluid">
                {
                    submitted && <Redirect to="/CustomerApplication" />}
                <div class="container-register">
                    <h2>Account Settings</h2>
                    <div className="form-group">
                        <label htmlFor="customerId">CustomerId</label>
                        <input type="text" name="customerId" value={customerId} onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Enter customerId" id="customerId" disabled/>
                    </div>
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
                        <button onClick={handleSubmit} className="btn btn-primary">Update</button>
                        <button onClick={handleSubmit} className="btn btn-primary">Cancel</button>
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
export default CustomerAccount;