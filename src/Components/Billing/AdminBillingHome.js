import React from 'react';
import img8 from './assests/bg8.png';
import './BillingHeader.css';
import './BillingFooter.css';
import logo from './assests/logo3.jpg';
function AdminBillingHome() {
    return (
        <div class="main">
            <div class="header">
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
                            <a class="nav-link" href="#">ABOUT US</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">CONTACT US</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">LOGOUT</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="container" style={{ paddingBottom: "30px", paddingTop: "30px"}} >
                <h1 style={{color:"black"}}>BILLING HOME PAGE</h1>
            </div>

            <section style={{ paddingBottom: "20px" }}>

                <div class="container">
                    <div class="card">
                        <div class="face face1">
                            <div class="content">
                                <img src={img8} style={{ height: "100%", width: "100%", objectFit: "contain" }}></img>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="face face1">
                            <div class="content">
                                <p>View All Bills</p>
                                <a href="all">View All</a>
                            </div>
                        </div>
                        <div class="face face2">
                            <h3 style={{color:"black"}}><b>View All Saved Bills</b></h3>
                        </div>
                    </div>
                    <div class="card">
                        <div class="face face1">
                            <div class="content">
                                <img src={img8} style={{ height: "100%", width: "100%", objectFit: "contain" }}></img>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ paddingBottom: "10%" }}>

                <div class="container" style={{color:"black"}}>
                    <div class="card">
                        <div class="face face1">
                            <div class="content">
                                <p >Save A Bill</p>
                                <a href="/saveBill">Save</a>
                            </div>
                        </div>
                        <div class="face face2">
                            <h3 style={{color:"black"}}><b> Add New Bill</b></h3>
                        </div>
                    </div>
                    <div class="card">
                        <div class="face face1">
                            <div class="content">
                                <p>Update Bill</p>
                                <a href="all">Update</a>
                            </div>
                        </div>
                        <div class="face face2">
                            <h3 style={{color:"black"}}><b> Update Bill</b></h3>
                        </div>
                    </div>
                    <div class="card">
                        <div class="face face1">
                            <div class="content">
                                <p>Delete Bill</p>
                                <a href="all">Delete</a>
                            </div>
                        </div>
                        <div class="face face2">
                            <h3 style={{color:"black"}}><b>Delete any Bill</b></h3>
                        </div>
                    </div>
                </div>
            </section>

            <div class="footer">
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
            </div>
        </div>


    )
}

export default AdminBillingHome;