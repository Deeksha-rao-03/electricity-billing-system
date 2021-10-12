import React from "react";
import logo from '/module 3/ReactJS/electricity-billing-system/src/assests/logo3.jpg';

import './AboutUsStyles.css'
function AboutUs() {
    return (
        <div>
        <header>
            <div>
            <nav class="navbar collapseOnSelect navbar-expand-lg bg-dark navbar-dark sticky-top">
                <a class="navbar-brand" href="#">
                    <img src={logo} alt="logo" style={{ width: "43px" , borderRadius: "50%" }} />
                </a>
                <h3 style={{ color: "white" }}>EBS </h3>
                <ul class="navbar-nav">
                    <span class="sr-only">(current)</span>
                    <li class="nav-item">
                        <a class="nav-link" href="#">HOME</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../RegisterCustomer">REGISTER</a>
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
        <div class="about-section">
  <h1>About Us Page</h1>
  

 
</div>

  
    
      
      <div class="container-aboutus">
      <p>ELECTRICITY BILLING SYSTEM is a modern version of the traditional electricity billing system.</p>
  <p>This is a computerized electricity billing system to make it more seamless, accessible, and efficient. The software calculates the units consumed within a specified time duration and accordingly calculates the amount of money to be paid for those units.</p>
        <p> Features a high-performance speed along with accuracy.
Allows for seamless data sharing between the electricity office and customers.</p>
<p>Protected by high-security measures and controls.
Includes the necessary provisions for debugging.</p>
        <p><button class="button-aboutus">Contact</button></p>
      
    
 
</div>




        <footer>
        <div>
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
        </div>
    </footer>
</div>




        )
    }
    export default AboutUs;