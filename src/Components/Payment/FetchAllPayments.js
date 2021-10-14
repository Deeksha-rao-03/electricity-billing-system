import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './Landing/Paymentstyles.css';
import Header from './Landing/Header';
import Footer from './Landing/Footer';

function FetchAllPayment() {

    const [payments, setPayments] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/payment/all')
            .then(resp => setPayments(resp.data));
    }, []);

    return (
        <><><Header />
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
            </div></><Footer /></>

    )
}

export default FetchAllPayment;