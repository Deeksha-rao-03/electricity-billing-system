import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from '../assests/logo3.jpg';
import Footer from './Landing/Footer';


function AdminViewPayment() {


    const [payments, setPayments] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/payment/all')
            .then(resp => setPayments(resp.data));
    }, []);

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
                            <a class="nav-link" href="/admin">HOME</a>
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
                <div class="sidebar">
                    <a href="/admin">Home </a>
                    <a href="/">Logout</a>
                </div>
            </div>
            <div id="fetchvalues">
                <div className="table-responsive">
                    <table className="table table-bordered" >

                        <thead>
                            <tr>
                                <th>payment Id</th>
                                <th>Bill No</th>
                                <th>Payment Mode</th>
                                <th>Date Of Payment</th>
                                <th>Payed Amount</th>
                                <th>status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {payments.length > 0 ?
                                payments.map(payment => <tr>
                                    <td>{payment.paymentId}</td>
                                    <td>{payment.bill !== null && payment.bill.billNo}</td>
                                    <td>{payment.paymentMode}</td>
                                    <td>{payment.dateOfPayment}</td>
                                    <td>{payment.payedAmount}</td>

                                    <td>{payment.status}</td>

                                </tr>
                                )
                                : <p>Loading...</p>}
                        </tbody>
                    </table>
                </div>
            </div><Footer />
        </div>

    )
}

export default AdminViewPayment;