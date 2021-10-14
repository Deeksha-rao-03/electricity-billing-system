import React from 'react';
import axios from 'axios';
import Header from './Landing/Header';
import Footer from './Landing/Footer';
import './Landing/Paymentstyles.css';
class SearchPaymentById extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            paymentId: '',
            payment: undefined,
            isSubmitted: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {

        axios.get("http://localhost:8080/payment/getPaymentId/" + this.state.paymentId).then(resp => {
            console.log(resp);

            if (resp.status === 200) {
                this.setState({
                    payment: resp.data
                })

            }
        }).catch(error => {
            console.log(error.response);
            if (error.response.status === 404) {
                this.setState({
                    isSubmitted: false
                })
                alert("Payment Not Exisiting");
            }

        });
        event.preventDefault();
    }
    render() {
        return (
            <><><Header />
                <div id="fetchvalues2">

                    <div className="container-fluid">
                        <h2 style={{textAlign:"center"}}>Search Payment </h2>
                        <div class="form-group">
                            <label for="paymentId"></label>
                            <input type="text" name="paymentId" value={this.state.paymentId} onChange={this.handleChange} class="form-control" placeholder="Enter payment Id " />
                        </div>
                        <div id="button1"  style={{paddingLeft:"210px"}}>
                            <button onClick={this.handleSubmit} className="button">Search</button>
                        </div>
                        <div>
                            {
                                this.state.payment !== undefined ?
                                    <div>
                                        <table className="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th>PaymentId</th>
                                                    <th>paymentMode</th>
                                                    <th>AmountToBePayed</th>
                                                    <th>status</th>
                                                    <th>Date Of payment</th>
                                                    <th>bill no</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>{this.state.payment.paymentId}</td>
                                                    <td>{this.state.payment.paymentMode}</td>
                                                    <td>{this.state.payment.billAmountToBePayed}</td>
                                                    <td>{this.state.payment.status}</td>
                                                    <td>{this.state.payment.payedAmount}</td>
                                                    <td>{this.state.payment.bill.billNo}</td>

                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    : <p></p>
                            }
                        </div>
                    </div>
                </div></><Footer /></>
        )
    }
}

export default SearchPaymentById;