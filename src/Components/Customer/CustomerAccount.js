import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';
import { Alert } from 'react-alert';
import logo from '../assests/logo3.jpg';
import icon from '../assests/icon.png';
import './Customer.css';

import { Link } from 'react-router-dom';
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
            .then(resp => { setCustomerId(resp.data.customerId); setName(resp.data.name); setAddress(resp.data.address); setEmail(resp.data.email); setPassword(resp.data.password); });
    }, []);

    const handleSubmit = (event) => {

        let payload = {
            customerId: customerId,
            name: name,
            address: address,
            email: email,
            password: password
        }

        console.log(payload);

        axios.put("http://localhost:8080/customer/update", payload).then(resp => setSubmitted(true));

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
                            <a class="nav-link" href="/">HOME</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="../LogoutCustomer">LOGOUT</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="../AboutUs">ABOUT US</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/ContactUs">CONTACT US</a>
                        </li>
                    </ul>
                </nav>
            </header>
            <div class="sidebar">

                <img src={icon} alt="logo" style={{ width: "103px", borderRadius: "50%" }} />
                <h3>Welcome  </h3>
                <a class="active" href="../CustomerAccount" >Account</a>
                <a href="../CustomerApplication">Applications</a>
                <a href="../DeleteCustomer">Delete Account</a>
                <a href="../LogoutCustomer">Logout</a>
            </div>

            <div className="container-fluid" style={{height:"50%", paddingBottom:"15%", overflowX:"auto"}}>
                {
                    submitted && alert("Customer updated successfully")}
                <div class="container-update">
                    <h2 style={{textAlign:"center"}}>Account Settings</h2>
                    <div className="form-group">
                        <label htmlFor="customerId">CustomerId</label>
                        <input type="text" name="customerId" value={customerId} onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Enter customerId" id="customerId" disabled />
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
                    <div class="btn">
                        <button onClick={handleSubmit} style={{ align:"center", background: "#007bff", width: "133px", height: "30px", margin: '3px' }}>Update</button>
                        <button href='../CustomerAccount' style={{align:"center", background: "#007bff", width: "133px", height: "30px" }} >Cancel</button>
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