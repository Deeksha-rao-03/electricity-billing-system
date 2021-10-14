import React, { useEffect } from 'react';
import { Redirect } from 'react-router';
import logo from '../assests/logo3.jpg';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';

class adminwork extends React.Component {
    constructor(props){
        super(props);
        this.state = {value: ''}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }
    handleSubmit(event){
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
                                <a class="nav-link" href="/admin/login">LOG-OUT</a>
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
                <br />
                <h2 style={{ textAlign: "center" }}>WELCOME ADMIN</h2>
                <section >
                    <div class="container">

                        <div class="card">
                            <div class="face face1">
                                <div class="content">
                                    <form onSubmit={this.handleSubmit} style={{width:"10px"}}>
                                        <div class="form-group">
                                            <input type="number" id="customerId" value = {this.state.value} onChange={this.handleChange} placeholder="Enter customerId" />
                                        </div>
                                        <Link to={"/FetchCustomerById/" + this.state.value}>View </Link>
                                    </form>
                                </div>
                            </div>
                            <div class="face face2">
                                <h4>USERS</h4>
                            </div>
                        </div>
                        <div class="card">
                            <div class="face face1">
                                <div class="content">
                                    <a href="/adminBilling">Billing functions</a>

                                </div>
                            </div>
                            <div class="face face2">
                                <h4>BILLS</h4>
                            </div>
                        </div>
                        <div class="card">
                            <div class="face face1">
                                <div class="content">

                                    <a href="/AdminViewPayment">Show Payments</a>
                                </div>
                            </div>
                            <div class="face face2">
                                <h4>PAYMENT</h4>
                            </div>
                        </div>
                    </div>
                </section>
                <section style={{ paddingBottom: "10%" }}>
                    <div class="container">
                        <div class="card">
                            <div class="face face1">
                                <div class="content">
                                    <a href="/ConnectionHome">Know all about Connections</a>
                                </div>
                            </div>
                            <div class="face face2">
                                <h4>CONNECTIONS</h4>
                            </div>
                        </div>
                        <div class="card">
                            <div class="face face1">
                                <div class="content">
                                    <a href="/TariffHome">Know all about Tariff</a>
                                </div>
                            </div>
                            <div class="face face2">
                                <h4>TARIFFS</h4>
                            </div>
                        </div>
                        <div class="card">
                            <div class="face face1">
                                <div class="content">
                                    <a href="/ConsumptionHome">Consumption</a>
                                </div>
                            </div>
                            <div class="face face2">
                                <h4>CONSUMPTIONS</h4>
                            </div>
                        </div>

                    </div>
                </section>
                <div>
                    <Footer />
                </div>
            </div>

        )
    }

}

export default adminwork;