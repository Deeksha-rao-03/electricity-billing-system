import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BillingHeader from './BillingHeader';
import BillingFooter from './BillingFooter';
function FetchAllBills() {
    
    const [bills,setBills]=useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/bill/all')
        .then(resp => setBills(resp.data));
    },[]);

  
        return (
            <div>
                
                <BillingHeader/>
                <BillingFooter/>
            <div className="container" style={{paddingTop:"20px",paddingBottom:"20px", paddingLeft:"5%"}}><h1 style={{color:"black"}}> All Saved Bills</h1></div>
            <div className="container" style={{paddingLeft:"5%", overflowX:"auto"}}>
                <table className="table table-bordered"style={{whiteSpace:"nowrap", paddingTop:"20px",paddingBottom:"20%"}}>
                    <thead>
                        <tr>
                            <th>Bill No.</th>
                            <th>Customer ID</th>
                            <th>Consumption ID</th>
                            <th>Issue Date</th>
                            <th>Due Date</th>
                            <th>Units Consumed</th>
                            <th>Rate Per Unit</th>
                            <th><b>Bill Amount</b></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                            {
                                bills.length > 0 ?
                                bills.map(bill =>

                                    <tr>
                                    <td>{bill.billNo} </td>
                                    <td>{bill.customerId}</td>
                                    <td>{bill.consumptionId}</td>
                                    <td>{bill.issueDate}</td>
                                    <td>{bill.dueDate}</td>
                                    <td>{bill.unitsConsumed}</td>
                                    <td>{bill.rateperUnit}</td>
                                    <td>{bill.billAmount}</td>
                                    <td><Link to={"/getBill/" + bill.billNo}>View </Link></td>
                                    <td><Link to={"/alterBill/" + bill.billNo}>Update</Link></td>
                                    <td><Link to={"/deleteBill/" + bill.billNo}>Delete</Link></td>
                                </tr>
                                )
                                    : <p>Loading...</p>
                            }
                        </tbody>
                    </table>
                </div>
                <div className="container" style={{ paddingTop:"20px",paddingBottom:"10%", paddingLeft:"7%"}}>
                    <Link to="/saveBill"><button className="button">Add New Bill</button></Link>
                </div>
            </div>
            
        )
    }



export default FetchAllBills;