import React from "react";
import { Link } from 'react-router-dom';
import './ConnBodyStyles.css';
import Footer from "./Footer";
import Header from "./Header";

function ConnectionBody() {
    return (

            <><><Header/>
            <div class="center">
                <section>
                    <div class="container">
                        <div class="card">
                            <div class="face face1">
                                <div class="content">
                                    <p>Add New Connection</p>
                                    <Link to={"/saveConnection"} class="btn bg-light">ADD</Link>
                                </div>
                            </div>
                            <div class="face face2">
                                <h4>Add New Connection</h4>
                            </div>
                        </div>
                        <div class="card">
                            <div class="face face1">
                                <div class="content">
                                    <p>View and Delete Connection</p>
                                    <Link to={"/allConnection"} class="btn bg-light">VIEW</Link>
                                </div>
                            </div>
                            <div class="face face2">
                                <h4>View All Connections</h4>
                            </div>
                        </div>
                        <div class="card">
                            <div class="face face1">
                                <div class="content">
                                    <p>Search By Connection Id</p>
                                    <Link to={"/searchConnection"} class="btn bg-light">SEARCH</Link>
                                </div>
                            </div>
                            <div class="face face2">
                                <h4>Search Connection</h4>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            </><Footer/></>
        
    )
}

export default ConnectionBody;