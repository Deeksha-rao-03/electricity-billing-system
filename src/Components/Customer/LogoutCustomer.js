import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import logo from '/module 3/ReactJS/electricity-billing-system/src/assests/logo3.jpg';
import icon from '/module 3/ReactJS/electricity-billing-system/src/assests/icon.png';
import './DeleteCustomer.css'
class LogoutCustomer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLogout : false
        }
    }

    logout = () => {
        localStorage.removeItem("user");
        alert("logout success");
        this.setState({
            isLogout :true
        })
        //this.props.history.push("/");
        //return <Redirect to="/"/>
    }
    render() {
        const user = JSON.parse(localStorage.getItem('user'));
        if(this.state.isLogout) {
            return <Redirect to="/"/>
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
                <h1 >Welcome Name</h1>

                <a href="#home" >Account</a>
                <a  href="#news">Applications</a>
                <a  href="#contact">Delete Account</a>
                <a href="#about">Back</a>
                <a class="active" href="#about">Logout</a>
            </div>
            <div class="delete">
                <h2>
                    ARE YOU SURE YOU WANT TO LOGOUT?
                </h2>
                
            <div><button onClick={this.logout} style={{ background: "#b3ecff" ,width: "133px",height:"50px" }}>Logout</button></div>
        
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
}

export default LogoutCustomer;


