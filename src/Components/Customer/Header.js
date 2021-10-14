import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import logo from '../assests/logo3.jpg';
import coro1 from '../assests/Coro-img1.jpg';
import coro2 from '../assests/Coro-img2.jpg';
import coro3 from '../assests/Coro-img4.jpg';
import './HeaderStyles.css';
function Header() {
    return (
        <div>
            <nav class="navbar collapseOnSelect navbar-expand-lg bg-dark navbar-dark sticky-top">
                <a class="navbar-brand" href="#">
                    <img src={logo} alt="logo" style={{ width: "43px" , borderRadius: "50%" }} />
                </a>
                <h3 style={{ color: "white" }}>EBS </h3>
                <ul class="navbar-nav">
                    <span class="sr-only">(current)</span>
                    <li class="nav-item">
                        <a class="nav-link" href="/">HOME</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/RegisterCustomer">REGISTER</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" id="navbardrop" data-toggle="dropdown">
                            LOGIN
                        </a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="/admin/login">ADMIN</a>
                            <a class="dropdown-item" href="/LoginCustomer">CUSTOMER</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/AboutUs">ABOUT US</a>
                    </li>
                    <li class="nav-item">
                    <Link to={"/ContactUs"} class="nav-link" >CONTACT US</Link>
                    </li>
                </ul>
            </nav>

            <Carousel>
                <Carousel.Item>
                    <img
                        width={900}
                        height={500}
                        className="d-block w-100"
                        src={coro1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Connection</h3>
                        <p>Connecting lives and power</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        width={900}
                        height={500}
                        className="d-block w-100"
                        src={coro2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Traiff</h3>
                        <p>Reasonable and affordable rate </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        width={900}
                        height={500}
                        className="d-block w-100"
                        src={coro3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Consumption</h3>
                        <p>Enlighting minds and energy </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <section>
                <div class="container">
                    
                    <div class="card">
                        <div class="face face1">
                            <div class="content">
                                <p>Get alls for all your connection in one place</p>
                                <a href="/ConnectionHome">Know More</a>
                            </div>
                        </div>
                        <div class="face face2">
                            <h4>View bills?</h4>
                        </div>
                    </div>
                    <div class="card">
                        <div class="face face1">
                            <div class="content">
                                <p>Pay all your bill without visiting any center just by phone or laptop</p>
                                <a href="#">Know More</a>
                            </div>
                        </div>
                        <div class="face face2">
                            <h4>Payment</h4>
                        </div>
                    </div>
                    <div class="card">
                        <div class="face face1">
                            <div class="content">
                                <p>Do you know types of tariff? </p>
                                <a href="FetchAllTariff">Know More</a>
                            </div>
                        </div>
                        <div class="face face2">
                            <h4>Want Tariffs?</h4>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
}
export default Header;