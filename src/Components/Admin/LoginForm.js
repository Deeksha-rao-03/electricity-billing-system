import React, { useState } from 'react';
import axios from 'axios';
import Footer from '../Footer/Footer';
import logo from '../assests/logo3.jpg';

class LoginForm extends React.Component {
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
            adminName: this.state.name,
            password: this.state.password
        }


        axios.post("http://localhost:8080/admin/login", loginPayload).then(resp => {
            console.log(resp);

            if (resp.status === 200) {
                let user = {
                    "adminId": resp.data.adminId,
                    "adminName": resp.data.adminName,
                    "adminEmail": resp.data.adminEmail,
                    "password": resp.data.password,
                }
                localStorage.setItem("user", JSON.stringify(user));
                this.setState({
                    isValidUser: true
                })
                this.props.history.push('/admin');
                window.location.reload();
            }

        }).catch(error => {
            console.log(error.response);
            if (error.response.status === 500) {
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
                                <a class="nav-link" href="#">ABOUT US</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">CONTACT US</a>
                            </li>
                        </ul>
                    </nav>

                </div>
                <div className="container-fluid" >
                    {
                        this.state.isValidUser === false && <h3 style={{ textAlign: "center" , color:"red"}}>Invalid username or password</h3>
                    }
                    <div class="about-section">
                        <h2 style={{ color: "cadetblue", textAlign: "center", padding: "0" }}>WELCOME ADMIN</h2>
                    </div>
                    <div class="container-register" style={{ paddingTop: "5%" }}>

                        <div className="form-group">
                            <label htmlFor="adminName">adminName</label>
                            <input autoComplete="off" type="text" name="name" value={this.state.name} onChange={this.handleChange} className="form-control" placeholder="Enter username" id="name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input autoComplete="off" type="password" name="password" value={this.state.password} onChange={this.handleChange} className="form-control" placeholder="Enter password" id="productPrice" />
                        </div>
                        <div>
                            <button onClick={this.handleSubmit} className="btn btn-primary">Login</button>

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
        )


    }

}
export default LoginForm;