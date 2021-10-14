import React from "react";
import axios from "axios";
import { Redirect } from 'react-router-dom';
import Header from './Header';
import Footer from "./Footer";
import './ConsumptionStyle.css';

class SaveConsumption extends React.Component {
    constructor() {
        super();
        this.state = {
           currentReading : '',
           currentdate : '',
           previousReading : '',
           previousdate : '',
           unitsConsumed : '',
           connectionId : '',
           isSave : '',
           formErrors:{}
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleFormValidation(){
        let formErrors = {};
        let formIsValid = true;

        if(!this.state.connectionId){
            formIsValid = false;
            formErrors["idErr"] = "Connection Id is required";
        }
        if(!this.state.currentReading){
            formIsValid = false;
            formErrors["CurrentReadingErr"] = "Current reading is required";
        }
        if(!this.state.previousReading){
            formIsValid = false;
            formErrors["PreviousReadingErr"] = "Previous reading is required";
        }
        if(!this.state.previousdate){
            formIsValid = false;
            formErrors["CurrentDateErr"] = "Current Date is required";
        }
        if(!this.state.previousdate){
            formIsValid = false;
            formErrors["PreviousDateErr"] = "Previous Date is required";
        }
        this.setState({
            formErrors:formErrors
        })
        return formIsValid;
    }

    handleSubmit = (event) => {
       
        let consumption = {
            "connectionConnectionId" : this.state.connectionId,
            "currentReading" : this.state.currentReading,
            "currentdate" : this.state.currentdate,
            "previousReading" : this.state.previousReading,
            "previousdate" : this.state.previousdate,
            "unitsConsumed" : this.state.unitsConsumed
        }
        if(this.handleFormValidation()){
        axios.post("http://localhost:8080/consumption/save/"+this.state.connectionId, consumption).then(resp=>{
            console.log(resp);
            if(resp.status === 201){
                this.setState({
                    consumption: resp.data,
                    isSave:true
                })
                alert("Consumption saved successfully!");
            }
        }).catch(error =>{
            console.log(error.response);
            if(error.response.status === 404){
                this.setState({
                   
                })
            }
        });
    }
        event.preventDefault();
    }

    render() {
        if(this.state.isSave) {
            return <Redirect to={"/ConsumptionHome"}/>
        }
        return (
            <div>
            <Header/>
            <div className="container-fluid" style={{paddingBottom:"10%", overflowX:"auto"}}>
                <h2 style={{textAlign:"center"}}>Add Consumption</h2>
                <div className="form-group">
                    <label htmlFor="connectionId">connection Id</label>
                    <input type="number" name="connectionId" value={this.state.connectionId} onChange={this.handleChange} className="form-control" placeholder="Enter connection Id" id="connectionConnectionId" />
                    {
                        this.state.formErrors.idErr && <div style={{ color: "red", paddingBottom: 10 }}>{  this.state.formErrors.idErr}</div>
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="currentReading">Current Reading</label>
                    <input type="number" name="currentReading" value={this.state.currentReading} onChange={this.handleChange} className="form-control" placeholder="Enter current reading" id="currentReading" />
                    {
                      this.state.formErrors.CurrentReadingErr && <div style={{ color: "red", paddingBottom: 10 }}>{  this.state.formErrors.CurrentReadingErr}</div>
                    }
                </div>
                <div className="form-group">
                    <label for="currentdate">Current Date</label>
                    <input type="date" name="currentdate" value={this.state.currentdate} onChange={this.handleChange} className="form-control" placeholder="Enter current date" id="currentdate" />
                    {
                      this.state.formErrors.CurrentDateErr && <div style={{ color: "red", paddingBottom: 10 }}>{  this.state.formErrors.CurrentDateErr}</div>
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="previousReading">Previous Reading</label>
                    <input type="number" name="previousReading" value={this.state.previousReading} onChange={this.handleChange} className="form-control" placeholder="Enter previous reading" id="previousReading" />
                    {
                      this.state.formErrors.PreviousReadingErr && <div style={{ color: "red", paddingBottom: 10 }}>{  this.state.formErrors.PreviousReadingErr}</div>
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="previousdate">Previous Date</label>
                    <input type="date" name="previousdate" value={this.state.previousdate} onChange={this.handleChange} className="form-control" placeholder="Enter previous date" id="previousdate" />
                    {
                      this.state.formErrors.PreviousDateErr && <div style={{ color: "red", paddingBottom: 10 }}>{  this.state.formErrors.PreviousDateErr}</div>
                    }
                </div>
                <div style={{paddingLeft:"250px"}}>
                    <button onClick={this.handleSubmit} className="button">Add</button>
                </div>
            </div>
            <Footer/>
            </div>
        )
    }
 
}

export default SaveConsumption;