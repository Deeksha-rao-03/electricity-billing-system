import React from 'react';
import axios from 'axios';
import UserBillingHeader from './UserBillingHeader';
import BillingFooter from './BillingFooter';
import { Link } from 'react-router-dom';


class UserFetchByBillNo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bill: undefined,
            billNo: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        let bill = {
            "billNo": this.state.billNo
        };

        axios.get("http://localhost:8080/bill/get/" + bill.billNo)
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
                
                <div class="container" style={{paddingTop:"20px",paddingBottom:"20px", paddingLeft:"10%"}}>
                    <div className="container-fluid">
                        <h2 style={{ textAlign: "center" }}>Enter Bill No</h2>
                        <div class="form-group"style={{ textAlign: "left" }}>
                            <label for="billNo">Bill Number</label>
                            <input type="number" name="billNo" class="form-control" onChange={this.handleChange} placeholder="Enter bill number" id="billNo" required/>
                        </div>
                        <button className="button" style={{ alignItems: "center" }} onClick={this.handleSubmit}>Submit</button>
                    </div>
                    
                </div>

                {
                    this.state.bill !== undefined ?
                        <div class="container" >
                                <table class="table table-bordered"style={{whiteSpace:"nowrap"}}>
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
                                            <td>{this.state.bill.dueDate}</td>
                                            <td>{this.state.bill.unitsConsumed}</td>
                                            <td>{this.state.bill.rateperUnit}</td>
                                            <td>{this.state.bill.billAmount}</td>
                                            
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

export default UserFetchByBillNo;

