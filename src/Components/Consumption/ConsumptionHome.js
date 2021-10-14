import React, { useState } from 'react';
import './FooterStyles.css';
import './HeaderStyles.css';
import { Link } from 'react-router-dom';
import logo from '../assests/logo3.jpg';
import Footer from './Footer';
function Home() {
    const [consumptionId, setData] = useState(null);
    function getData(val) {

        setData(val.target.value)
        console.warn(val.target.value)
    }
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
            <div class="container">
                <div class="card">
                    <div class="face face1">
                        <div class="content">
                            <p>Consumption for addition for each connection is so easy.</p>
                            <Link to={"/saveConsumption/"} class="nav-link" >Know More</Link>
                        </div>
                    </div>
                    <div class="face face2">
                        <h4>Add Consumption</h4>
                    </div>
                </div>
                <div class="card">
                    <div class="face face1">
                        <div class="content">
                            <p>Getting all Consumptions is super easy</p>
                            <Link to={"/allConsumption"} class="nav-link" >View</Link>
                        </div>
                    </div>
                    <div class="face face2">
                        <h4>GetAll Consumptions</h4>
                    </div>
                </div>
                <div class="card">
                    <div class="face face1">
                        <div class="content">
                            <div class="form-group" style={{align:"center"}}>
                                <input type="number" id="consumptionId" onChange={getData} placeholder="Enter consumption Id" />
                            </div>
                            <Link to={"/updateConsumption/"+consumptionId} class="nav-link" >Update</Link>
                        </div>
                    </div>
                    <div class="face face2">
                        <h4>Update Consumption</h4>
                    </div>
                </div>
                <div class="card">
                    <div class="face face1">
                        <div class="content">
                            <form>
                                <div class="form-group">
                                    <input type="number" id="consumptionId" onChange={getData} placeholder="Enter consumption Id" />
                                </div>
                                <Link to={"/getConsumption/" + consumptionId}>View </Link>
                            </form>
                        </div>
                    </div>
                    <div class="face face2">
                        <h4>Fetch By Id</h4>
                    </div>
                </div>
                <div class="card">
                    <div class="face face1">
                        <div class="content">
                            <form>
                                <div class="form-group">
                                    <input type="number" id="consumptionId" onChange={getData} placeholder="Enter consumption Id" />
                                </div>
                                <Link to={"/deleteConsumption/" + consumptionId}> Delete </Link>
                            </form>
                        </div>
                    </div>
                    <div class="face face2">
                        <h4>Delete Consumption</h4>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Home;