import React from 'react';
import payimage from '../assests/payimage.jpg';
import logo from '../assests/logo3.jpg';
import './HeaderStyles.css';
function Paymentlanding() {
    return (
        <div class="container1">
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
                        <li class="nav-item">
                            <a class="nav-link" href="/">LOGOUT</a>
                        </li>
                    </ul>
                </nav>

            </div>

            <div id="container2">

                <font size="15" color='#00004d' align='center' > Welcome To Payment Page</font>

                <br /></div>


            <img src={payimage} alt="image" style={{ width: "100%", height: "100%" }} class="center" />

            <section>
                <div class="container" style={{paddingBottom:"10%"}}>
                    <div class="card">
                        <div class="face face1">
                            <div class="content">
                                <p>Make quick payments </p>
                                <a href="http://localhost:3000/savePayment/">Know More</a>
                            </div>
                        </div>
                        <div class="face face2">
                            <h4>want to make payment?</h4>
                        </div>
                    </div>


                    <div class="card">
                        <div class="face face1">
                            <div class="content">
                                <p>view payments history of all customers </p>
                                <a href="http://localhost:3000/payment/all">Know More</a>
                            </div>
                        </div>
                        <div class="face face2">
                            <h4>Payment List</h4>
                        </div>
                    </div>
                    <div class="card">
                        <div class="face face1">
                            <div class="content">
                                <p>search payment by customer id</p>
                                <a href="http://localhost:3000/getPaymentId/">Know More</a>
                            </div>
                        </div>
                        <div class="face face2">
                            <h4>Search payment </h4>
                        </div>
                    </div>
                </div>
            </section>

        </div>




    );
}

export default Paymentlanding;