import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from './assests/pic.jpg';
import img2 from './assests/bg2.jpg';
import './UserBillingHome.css';
import './BillingHeader.css';
import logo from './assests/logo3.jpg';
import './BillingFooter.css';
import img7 from './assests/meter.jpg';

function UserBillingHome() {
    return (
        

        <div>
            <div class="header">
            <nav class="navbar collapseOnSelect navbar-expand-lg bg-dark navbar-dark sticky-top">
                <a class="navbar-brand" href="#">
                    <img src={logo} alt="logo" style={{ width: "43px", borderRadius: "50%" }} />
                </a>
                <h3 style={{ color: "white" }}>EBS </h3>
                <ul class="navbar-nav">
                    <span class="sr-only">(current)</span>
                    <li class="nav-item">
                        <a class="nav-link" href="/CustomerApplication">HOME</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">ABOUT US</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">CONTACT US</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/">LOGOUT</a>
                    </li>
                </ul>
            </nav>
            </div> 
            <div style={{textAlign:"center",paddingBottom:"20px",paddingTop:"20px"}}><h1 style={{color:"black"}}><b>BILLING HOME PAGE</b></h1></div>
            <Carousel>
                <Carousel.Item>
                    <img
                        width={500}
                        height={500}
                        className="d-block w-100"
                        src={img7}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Connection</h3>
                        <p>Connecting lives and power</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        width={500}
                        height={500}
                        className="d-block w-100"
                        src={img1}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Electricity</h3>
                        <p> </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        width={500}
                         height={500}
                        className="d-block w-100"
                        src={img2}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Digital Billing</h3>
                        <p>Easy Bill Access </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel> 
           
            
        {/* <center><img
                    src={bg}
                    alt="First slide"
                    width="2000"
                    height="1000"
                /></center> */}
        {/* <div className="pattern-horizontal-lines-sm"> */}
        
              
        <div>
            <section style={{alignContent:"right",paddingBottom:"8%",paddingTop:"10px" }}>
                <div class="container" >
                    <div class="card">
                        <div class="face face1">
                            <div class="content">
                                {/* <p>View your Bill according to month</p> */}
                                <a href="/getByDate">View</a>
                            </div>
                        </div>
                        <div class="face face2">
                            <h3 style={{color:"black"}}><b>View Bill By Month</b></h3>
                        </div>
                    </div>
                    

                    <div class="card">
                        <div class="face face1">
                            <div class="content">
                                {/* <p>View previous bill by bill number</p> */}
                                <a href="/billGet">View</a>
                            </div>
                        </div>
                        <div class="face face2">
                            <h3 style={{color:"black"}}><b>View By Bill Number </b></h3>
                        </div>
                    </div>

                    <div class="card">
                        <div class="face face1">
                            <div class="content">
                                {/* <p>View all your bills</p> */}
                                <a href="/allByCustomerId">View All</a>
                            </div>
                        </div>
                        <div class="face face2">
                            <h3 style={{color:"black"}}><b>View All Your Bills</b></h3>
                        </div>
                    </div>

                </div>
            </section>
            </div>
            



      <div class="footer">
        <div class="social">
          <a href="#"><i class="fa fa-facebook"></i></a>
          <a href="#"><i class="fa fa-instagram"></i></a>
          <a href="#"><i class="fa fa-twitter"></i></a>
          <a href="#"><i class="fa fa-linkedin"></i></a>
          <a href="#"><i class="fa fa-youtube"></i></a>
        </div>

        <ul className= "list">
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
        <p className = "copyright">
          Electricity Billing System @ 2021
        </p>
      </div>
              
        </div>
              
               )
}
                  
              
 

export default UserBillingHome;