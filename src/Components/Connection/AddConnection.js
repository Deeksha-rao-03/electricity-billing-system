import React, { useState } from 'react';
import './ConnectionStyles.css'
import Header from './Header'
import Footer from './Footer'
import axios from 'axios';
import { Redirect } from 'react-router';

class AddConnection extends React.Component {
    constructor() {
        super();
        this.state = {
            customerId: '',
            tariffId: '',
            isAdded: undefined
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {

        let connection = {
            "customerId": this.state.customerId,
            "tariffId": this.state.tariffId

        }

        axios.post('http://localhost:8080/connection/save', connection)
            .then(response => {
                console.log(response);
                if (response.status === 201) {
                    alert("Connection Added Successfully")
                    this.setState({
                        isAdded: true
                    })
                }

            }).catch(error => {
                console.log(error.response);
                if (error.response.status === 404) {
                    alert("Enter Valid Data");
                    this.setState({
                        isAdded: false
                    })

                }
            });
        event.preventDefault();
    }
    render() {
        if (this.state.isAdded === true) {

            return <Redirect to={"/allConnection"} />
        }
        return (

            <><><Header />
                <div className="container-fluid">
                    <h2 style={{textAlign:"center"}}>Add Connection</h2>
                    <form action="" onSubmit={this.handleSubmit} role="form">
                        <div class="form-group">
                            <label for="customerId">Customer Id</label>
                            <input type="number" min="1" name="customerId" value={this.state.customerId} onChange={this.handleChange} class="form-control" placeholder="Enter customer id" id="customerId" required />
                        </div>

                        <div class="form-group">
                            <label for="tariffId">Tariff Id</label>
                            <input ttype="number" min="1" name="tariffId" value={this.state.tariffId} onChange={this.handleChange} class="form-control" placeholder="Enter tariff id" id="tariffId" required />
                        </div>

                        <div style={{alignItems:"center" , paddingLeft:"250px"}}>
                            <button onclick={this.handleSubmit} className="button" >Add</button>
                        </div>
                    </form>
                </div>


            </><Footer /></>

        )
    }

}

export default AddConnection;