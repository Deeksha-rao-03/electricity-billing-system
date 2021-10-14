import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BillingHeader from './BillingHeader';
import BillingFooter from './BillingFooter';
function FetchByBillNo (props){
    const [bill,getBill]=useState(undefined)

    useEffect(() => {
        axios.get('http://localhost:8080/bill/get/'+ props.match.params.id)
        .then(resp => getBill(resp.data));
    },[props.match.params.id]);

        return(
            <div >
                <BillingHeader/>
                <BillingFooter/>
                 <div className="container"><h2>Bill Details</h2></div>
                {
                    bill !== undefined ?
                    <div className="container" style={{overflowX:"auto", paddingTop:"20px",paddingBottom:"20%",paddingLeft:"20%"}}>
                            <table class="table table-bordered"style={{whiteSpace:"nowrap"}}>
                                <tr>
                                    <td>Bill No</td>
                                    <td>{bill.billNo}</td>
                                </tr>
                                <tr>
                                    <td>Customer ID</td>
                                    <td> {bill.customerId}</td>
                                </tr>
                                <tr>
                                    <td>Consumption ID</td>
                                    <td> {bill.consumptionId}</td>
                                </tr>
                                <tr>
                                    <td>Issue Date</td>
                                    <td>{bill.issueDate}</td>
                                </tr>
                                <tr>
                                    <td>Due Date</td>
                                    <td> {bill.dueDate}</td>
                                </tr>
                                <tr>
                                    <td>Units Consumed</td>
                                    <td>{bill.unitsConsumed}</td>
                                </tr>
                                <tr>
                                    <td>Rate Per Unit</td>
                                    <td>{bill.rateperUnit}</td>
                                </tr>
                                <tr>
                                    <td>Bill Amount</td>
                                    <td> {bill.billAmount}</td>
                                </tr>
                                <tr>
                                    <td colSpan="2"><Link to={"/alterBill/" + bill.billNo}>Update</Link></td>
                                </tr>
                                <tr>
                                    <td colSpan="2"><Link to={"/deleteBill/" + bill.billNo}>Delete</Link></td>
                                </tr>
                             </table>

                        </div>
                        : <p> Loading..</p>
                }
            </div>
        )
    }


export default FetchByBillNo;