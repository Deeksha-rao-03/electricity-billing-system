import React from 'react';
import axios from 'axios';

import BillingFooter from './BillingFooter';
import { Link } from 'react-router-dom';
import UserBillingHeader from './UserBillingHeader';

class ViewByDate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bill: undefined,
            issueDate: '',
            isUpdate: false,
            consumptionId: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        let bill = {
            "consumptionId": this.state.consumptionId,
            "issueDate": this.state.issueDate
        };

        axios.get("http://localhost:8080/bill/getbyDate/" + bill.consumptionId + "/" + bill.issueDate)

            .then(response => {
                console.log(response);
                if(response.status===200){
                this.setState({
                    isUpdate: true,
                    bill: response.data
                });
            }
            
        }).catch(error=>{
            console.log(error.response);
            if (error.response.status === 404) {
                this.setState({
                    isUpdated: false
                })
                alert("Bill with this bill number does not exist");
            }
        });

    }

  

    render() {
        return (
            <div>
                 <UserBillingHeader/>
                
                <div class="container" >
                    <div className="container-fluid">
                        <h2 style={{textAlign:"center"}}>Enter Details</h2>
                        <div class="form-group" style={{ textAlign: "left" }}>
                            <label for="consumptionId" >Consumption Id</label>
                            <input type="text" name="consumptionId" class="form-control" onChange={this.handleChange} placeholder="Enter consumption Id" id="consumptionId" />
                        </div>
                        <div class="form-group" style={{ textAlign: "left" }}>
                            <label for="issueDate">Issue Date</label>
                            <input type="date" name="issueDate" class="form-control" onChange={this.handleChange} placeholder="Enter Issue Datee" id="issueDate" />
                        </div>

                        <button style={{alignItems:"center"}} onClick={this.handleSubmit} className="button">Submit</button>
                    </div>
                </div>

                {
                    this.state.bill !== undefined ?
                        <div class="container"style={{overflowX:"auto" ,paddingTop:"20px",paddingBottom:"20px"}}>
                                <table class="table table-bordered" style={{whiteSpace:"nowrap"}}>
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
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{this.state.bill.billNo}</td>
                                            <td> {this.state.bill.customerId}</td>
                                            <td> {this.state.bill.consumptionId}</td>
                                            <td>{this.state.bill.issueDate}</td>
                                            <td> {this.state.bill.dueDate}</td>
                                            <td>{this.state.bill.unitsConsumed}</td>
                                            <td>{this.state.bill.rateperUnit}</td>
                                            <td> {this.state.bill.billAmount}</td>
                                            <td><Link to={"/savePayment/"}>Make Payment</Link></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        : <div> Bill Does Not Exist </div>

                }
            <BillingFooter/>
            </div>

        );
    }
}
export default ViewByDate;

