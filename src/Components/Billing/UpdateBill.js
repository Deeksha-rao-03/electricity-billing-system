import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import BillingHeader from './BillingHeader';
import BillingFooter from './BillingFooter';


class UpdateBill extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            bill: undefined,
            dueDate: '',
            issueDate: '',
            billNo: '',
            billAmount: '',
            unitsConsumed: '',
            ratePerUnit: '',
            customerId: '',
            consumptionId: '',
            isUpdate: false
        }
    }


    componentDidMount() {
        axios.get('http://localhost:8080/bill/get/' + this.props.match.params.id)
            .then(resp => this.setState({
                bill: resp.data

            })).then(p => this.setState({
                "billNo": this.state.bill.billNo,
                "issueDate": this.state.bill.issueDate,
                "dueDate": this.state.bill.dueDate,
                "billAmount": this.state.bill.billAmount,
                "unitsConsumed": this.state.bill.unitsConsumed,
                "ratePerUnit": this.state.bill.rateperUnit,
                "customerId": this.state.bill.customerId,
                "consumptionId": this.state.bill.consumptionId

            }));
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        let bill = {
            "billNo": this.state.billNo,
            "dueDate": this.state.dueDate,
            "issueDate": this.state.issueDate,
            "billAmount": this.state.billAmount,
            "unitsConsumed": this.state.unitsConsumed,
            "ratePerUnit": this.state.rateperUnit,
            "customerId": this.state.customerId,
            "consumptionId": this.state.consumptionId,
        }

        axios.put("http://localhost:8080/bill/alter/" + bill.billNo, bill).then(this.setState({
            isUpdate: true
        }));
        alert("Bill updated");

        event.preventDefault();
    }

    render() {

        if (this.state.isUpdate) {
            return <Redirect to={"/all"} />
        }

        return (
            <div>
                <BillingHeader/>
                <BillingFooter/>
            
            
                <div class="container"style={{paddingBottom:"10%"}}>
            <div className="container-fluid" style={{overflowX:"auto"}}>
                 <div class="form-group"style={{ textAlign: "left" }}>
                    <label for="billNo">Bill No</label>
                    <input type="text" name="productId" value={this.state.billNo} onChange={this.handleChange} class="form-control" disabled />
                </div>
                <div class="form-group"style={{ textAlign: "left" }}>
                <label for="customerId">Customer Id</label>
                    <input type="text" name="customerId" value={this.state.customerId} onChange={this.handleChange} class="form-control" disabled />
                </div>
                <div class="form-group"style={{ textAlign: "left" }}>
                <label for="consumptionId">Consumption Id</label>
                    <input type="text" name="consumptionId" value={this.state.consumptionId} onChange={this.handleChange} class="form-control" disabled />
                </div>
                <div>
                <div class="form-group"style={{ textAlign: "left" }}>
                <label for="unitsConsumed">Units Consumed</label>
                    <input type="text" name="unitsConsumed" value={this.state.unitsConsumed} onChange={this.handleChange} class="form-control" disabled />
                </div>
                <div class="form-group"style={{ textAlign: "left" }}>
                <label for="ratePerUnit">Rate Per Unit</label>
                    <input type="text" name="ratePerUnit" value={this.state.ratePerUnit} onChange={this.handleChange} class="form-control" disabled />
                </div>
                <div class="form-group"style={{ textAlign: "left" }}>
                <label for="billAmount">Bill Amount</label>
                    <input type="text" name="billAmount" value={this.state.billAmount} onChange={this.handleChange} class="form-control" disabled />
                </div>
                <div class="form-group"style={{ textAlign: "left" }}>
                    <label for="issueDate">Issue Date</label>
                    <input type="date" name="issueDate" value={this.state.issueDate} onChange={this.handleChange} class="form-control" />
                </div>
                <div class="form-group"style={{ textAlign: "left" }}>
                    <label for="dueDate">Due Date</label>
                    <input type="date" name="dueDate" value={this.state.dueDate} onChange={this.handleChange} class="form-control" />
                </div>
                    <button onClick={this.handleSubmit}>Update</button>
                </div>
            </div>
            </div>
            </div>
        )
    }

}

export default UpdateBill;