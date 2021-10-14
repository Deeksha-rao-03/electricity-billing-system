import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Landing/Paymentstyles.css';
import Header from './Landing/Header';
import Footer from './Landing/Footer';

function FetchPaymentById(props) {

    const [payment, setPayment] = useState([]);


    useEffect(() => {
        axios.get(' http://localhost:8080/payment/getPaymentId/' + props.match.params.id)
            .then(resp => setPayment(resp.data));
    }, []);

    return (
        <><><Header/>
            <div id="fetchvalues2">
                <h1>Payment Information </h1>
                <div className="float-midle">
                    {payment !== undefined ?
                        <div>

                            <p>payment id:{payment.paymentId}</p>

                            <p>payment mode:{payment.paymentMode}</p>
                            <p>Date of payment:{payment.dateOfPayment}</p>
                            <p>Payed Amount:{payment.billAmountToBePayed}</p>
                            <p>payment status{payment.status}</p>



                        </div>
                        : <div>Payment Not existing</div>}
                </div>
            </div></><Footer /></>
    )
}

export default FetchPaymentById;