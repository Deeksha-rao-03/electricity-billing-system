import React from 'react';
import axios from'axios';
import { Redirect } from 'react-router-dom';
import BillingHeader from './BillingHeader';
import BillingFooter from './BillingFooter';


class SaveBill extends React.Component {
    constructor() {
        super();
        this.state = {
            dueDate:'', 
	        issueDate:'',
            consumptionId:'',
            isAdded:undefined
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
       
        let bill = {
            "dueDate" : this.state.dueDate,
            "issueDate" : this.state.issueDate
            
        }
        
        axios.post('http://localhost:8080/bill/save/'+this.state.consumptionId,bill)
        .then(response => {
            console.log(response);
            if(response.status===201){
                alert("Bill Added Successfully")
            this.setState({
                isAdded :true
            })  
        }

        }).catch(error=>{
            console.log(error.response);
            if (error.response.status === 500) {
                alert("Enter Valid Data");
                this.setState({
                    isAdded: false
                })
                
            }
        });
        event.preventDefault();
    }
    render() {
        if(this.state.isAdded=== true) {
            
            return <Redirect to={"/all"}/>
        }
        return (
            <div>
                <BillingHeader/>
                <BillingFooter/>
                <div class="container"style={{overflowX:"auto"}}>
            <div className="container-fluid" style={{alignItems:"center", paddingRight:"0%"}}>
                <h2 style={{textAlign:"center", color:"black"}}>Add Bill</h2>
               
                <div class="form-group"style={{ textAlign: "left" }}>
                    <label for="consumptionId">Consumption Id</label>
                    <input type="number" name="consumptionId" value={this.state.consumptionId} onChange={this.handleChange} class="form-control" placeholder="Enter consumption Id" id="consumptionId" required />
                </div>
                <div class="form-group"style={{ textAlign: "left" }}>
                    <label for="issueDate">Issue Date</label>
                    <input type="date" name="issueDate" value={this.state.issueDate} onChange={this.handleChange} class="form-control" placeholder="Enter Issue Datee" id="issueDate" required/>
                </div>
                <div class="form-group"style={{ textAlign: "left" }}>
                    <label for="issueDate">Due Date</label>
                    <input type="date" name="dueDate" value={this.state.dueDate} onChange={this.handleChange} class="form-control" placeholder="Enter Due Date" id="dueDate" required />
                </div>
                    <button className="button"  onClick={this.handleSubmit}>Add</button>
                    
            </div>
            </div>
            </div>
           
        )
    }

}

export default SaveBill;