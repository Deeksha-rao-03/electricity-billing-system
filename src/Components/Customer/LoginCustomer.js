import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';
import logo from '/module 3/ReactJS/electricity-billing-system/src/assests/logo3.jpg';
import './DeleteCustomer.css'

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
                <div className="container-fluid">
                    {
                        this.state.isValidUser === false && <h3>Invalid username or password</h3>
                        }
                    <div class="about-section">
                        <h1>Welcome </h1>
                        <p>Sign in to</p>
                        <p>Continue access....
                        </p>



                    </div>
                    <div class="container-register">
                        <h2>LOGIN HERE</h2>
                        <div className="form-group">
                            <label htmlFor="name">Username</label>
                            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} className="form-control" placeholder="Enter username" id="name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="text" name="password" value={this.state.password} onChange={this.handleChange} className="form-control" placeholder="Enter password" id="productPrice" />
                        </div>
                        <div>
                            <button onClick={this.handleSubmit} className="btn btn-primary">Login</button>
                            
                        </div><p></p>
                        <h6>New User? <a href="../RegisterCustomer">Sign Up</a></h6>
                    </div>
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

}

export default LoginCustomer;