import React from 'react';
import axios from 'axios';

import BillingFooter from './BillingFooter';
import { Link } from 'react-router-dom';
import UserBillingHeader from './UserBillingHeader';

class FetchByCustomerId extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bills: [],
            isUpdate: false,
            customerId: ''
        }
    }


    componentDidMount() {
        const user = JSON.parse(localStorage.getItem('user'));
        axios.get('http://localhost:8080/bill/getbyCusId/' + user.customerId)
            .then(resp => this.setState({
                bills: resp.data
            }));
    } 

    
    render() {

        return (
            <div>
                 <UserBillingHeader/>
                
                <div class="container" style={{ paddingTop:"20px",paddingBottom:"20px",paddingLeft:"10%"}}><h1 style={{color:"black"}}><b> All Your Bills</b></h1></div>
                    <div class="container" style={{ overflowX: "auto", paddingTop:"20px",paddingBottom:"20px",paddingLeft:"10%"}}>
                       
                    <table class="table table-bordered" style={{ whiteSpace: "nowrap" ,paddingTop:"20px",paddingBottom:"20px"}}>
                        <thead>
                            <tr>
                                <th>Bill No</th>
                                <th>Customer ID</th>
                                <th>Consumption ID</th>
                                <th>Issue Date</th>
                                <th>Due Date</th>
                                <th>Units Consumed</th>
                                <th>Rate Per Unit</th>
                                <th>Bill Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.bills.length > 0 ?
                                    this.state.bills.map(bill =>
                                        <tr>
                                            <td>{bill.billNo}</td>
                                            <td> {bill.customerId}</td>
                                            <td> {bill.consumptionId}</td>
                                            <td>{bill.issueDate}</td>
                                            <td> {bill.dueDate}</td>
                                            <td>{bill.unitsConsumed}</td>
                                            <td>{bill.rateperUnit}</td>
                                            <td> {bill.billAmount}</td>
                                            
                                            
                                        </tr>
                                    )
                                    : <div>Loading </div>
                            }
                        </tbody>
                    </table>
                </div>


                <BillingFooter/>
            </div>

        )
    }
}


export default FetchByCustomerId;
