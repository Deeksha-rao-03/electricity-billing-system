import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';
import { Alert } from 'react-alert';
import logo from '../assests/logo3.jpg';
import './Customer.css';
import Footer from '../Footer/Footer';

class LoginCustomer extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            password: '',
            isValidUser: '',
            message: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        let loginPayload =
        {
            name: this.state.name,
            password: this.state.password
        }


        axios.post("http://localhost:8080/customer/login", loginPayload).then(resp => {
            console.log(resp);

            if (resp.status === 200) {
                let user = {
                    "customerId": resp.data.customerId,
                    "name": resp.data.name,
                    "address": resp.data.address,
                    "email": resp.data.email,
                    "password": resp.data.password,
                }
                localStorage.setItem("user", JSON.stringify(user));
                this.setState({
                    isValidUser: true
                })
                this.props.history.push('/CustomerAccount');
                window.location.reload();
            }

        }).catch(error => {
            console.log(error.response);

            if (error.response.status === 404) {
                this.setState({
                    isValidUser: false
                })
            }

        });

        event.preventDefault();
    }
    render() {
        return (
            <div>
                <section>
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
                                    <li class="nav-item">
                                        <a class="nav-link" href="../RegisterCustomer">REGISTER</a>
                                    </li>

                                    <li class="nav-item">
                                        <a class="nav-link" href="../AboutUs">ABOUT US</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/ContactUs">CONTACT US</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </header>
                </section>
                <section>
                    <div className="container-fluid" >
                        {
                            this.state.isValidUser === false && alert("Invalid Username And Password")
                        }
                        <div class="container-loginsection" style={{color:"cadetblue", textAlign:"center"}}>
                            <h2 style={{marginTop:"50%"}}>Welcome </h2><p></p>

                            <h4 style={{color:"cadetblue"}}>Sign in to</h4>
                            <h4 style={{color:"cadetblue"}}>Continue access....
                            </h4>



                        </div>
                        <div class="container-register">
                            <h2>LOGIN HERE</h2>
                            <div className="form-group">
                                <label htmlFor="name">Username</label>
                                <input type="text" name="name" value={this.state.name} onChange={this.handleChange} className="form-control" placeholder="Enter username" id="name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" value={this.state.password} onChange={this.handleChange} className="form-control" placeholder="Enter password" id="productPrice" />
                            </div>
                            <div>
                                <button onClick={this.handleSubmit} className="btn btn-primary">Login</button>

                            </div><p></p>
                            <h6>New User? <a href="../RegisterCustomer">Sign Up</a></h6>
                        </div>
                    </div>
                </section>
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

}

export default LoginCustomer;