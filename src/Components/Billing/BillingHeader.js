import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import logo from './assests/logo3.jpg';
import coro1 from './assests/Coro-img1.jpg';
import coro2 from './assests/Coro-img2.jpg';
import coro3 from './assests/Coro-img4.jpg';
import './BillingHeader.css';
function BillingHeader() {
    return (
        <div class="header">
            <nav class="navbar collapseOnSelect navbar-expand-lg bg-dark navbar-dark sticky-top">
                <a class="navbar-brand" href="#">
                    <img src={logo} alt="logo" style={{ width: "43px", borderRadius: "50%" }} />
                </a>
                <h3 style={{ color: "white" }}>EBS </h3>
                <ul class="navbar-nav">
                    <span class="sr-only">(current)</span>
                    <li class="nav-item">
                        <a class="nav-link" href="/admin">HOME</a>
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
                
                <a  href="adminBilling">Billing Home </a>
                <a  href="all">View All Saved Bills </a>
                <a  href="all">Update Bills </a>
                <a  href="all">Delete Bills </a>
                <a  href="/saveBill">Add New Bill </a>
                <a href="/payment/all">Payment list</a>
                <a href="/">Logout</a>
            </div>
        </div>

    );
}
export default BillingHeader;