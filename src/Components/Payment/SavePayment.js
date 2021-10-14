import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';
import Header from './Landing/Header';
import Footer from './Landing/Footer';
import { Link } from 'react-router-dom';
import './Landing/Paymentstyles.css';
function SavePayment(props) {


    const [paymentId, setPaymentId] = useState('');
    const [paymentMode, setPaymentMode] = useState('');
    const [customerId, setCustomerId] = useState('');
    const [billNo, setBillNo] = useState('');
    const [dateOfPayment, setdateOfPayment] = useState('');
    const [billAmountToBePayed, setBillAmountToBePayed] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event) => {

        let payload = {
            paymentId: paymentId,
            paymentMode: paymentMode,
            dateOfPayment: dateOfPayment,
            billAmountToBePayed: billAmountToBePayed,
            customerId: customerId,
            billNo: billNo
        }

        console.log(payload);
        axios.post("http://localhost:8080/payment/savePayment/" + customerId + "/" + billNo, payload).then(resp => setSubmitted(true));

        alert("payment done with " + paymentId);
        console.log("payment saved :" + payload.paymentId);
        event.preventDefault();
    }

    return (
        <div>

            <div><Header /></div>
            <div>
                <div id="fetchvalues2">
                    <div className="container-fluid"  >
                        {submitted && <Redirect to="/payment/all" />}
                        <h2 style={{textAlign:"center"}}>Make Payment</h2>
             

                        <div className="form-group">
                            <label class="fomr2" htmlFor="customerId">Customer Id</label>
                            <input type="text" name="customerid" value={customerId} onChange={(e) => setCustomerId(e.target.value)} className="form-control" placeholder="Enter customer Id " id="customerId" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="billNo">Bill No </label>
                            <input type="text" name="billNo" value={billNo} onChange={(e) => setBillNo(e.target.value)} className="form-control" placeholder="Enter billNo " required id="billNo" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="paymentMode">Payment Mode</label>
                            {/* <input type="text" name="paymentMode" value={paymentMode} onChange={(e) => setPaymentMode(e.target.value)} className="form-control" placeholder="Enter paymentMode " id="paymentMode" required/> */}

                            <select id="paymentMode" name="paymentMode" value={paymentMode} onChange={(e) => setPaymentMode(e.target.value)} className="form-control" placeholder="Enter paymentMode " id="paymentMode" required >
                                <option value=" Google Pay"> GooglePay </option>
                                <option value=" Phone Pay"> Phone Pay  </option>
                                <option value=" Amazon  Pay"> Amazon  Pay </option>
                                <option value=" Debit card"> Debit card </option>
                            </select>
                            </div>
                           

                            {/* </div>
                        <div className="form-group">
                            <label htmlFor="billAmountToBePayed">billAmountToBePayed</label>
                            <input type="text" name="billAmountToBePayed" value={billAmountToBePayed} onChange={(e) => setBillAmountToBePayed(e.target.value)} className="form-control" placeholder="Enter bill Amount " id="billAmountToBePayed" required />

                        </div>

                        <div className="form-group">
                            <label htmlFor="dateOfPayment">Date Of Payment</label>
                            <input type="date" name="dateOfPayment" value={dateOfPayment} onChange={(e) => setdateOfPayment(e.target.value)} className="form-control" placeholder="Enter dateOfPayment " id="dateOfPayment" disabled />
                        </div> */}

                            <div style={{paddingLeft:"210px"}}>
                                <button  onClick={handleSubmit} className="button">Make Payment</button>

                            </div>

                        </div>
                    </div>
                    <div>  <Footer /></div>
                </div>
            </div>
   
        
    )
}

export default SavePayment;