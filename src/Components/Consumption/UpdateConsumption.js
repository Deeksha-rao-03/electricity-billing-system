import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

class UpdateConsumption extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            consumption: undefined,
            consumptionId: '',
            currentReading: '',
            currentdate: '',
            previousReading: '',
            previousdate: '',
            unitsConsumed: '',
            connectionConnectionId: '',
            isUpdate: false
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/consumption/get/' + this.props.match.params.id)
            .then(resp => this.setState({
                consumption: resp.data

            })).then(p => this.setState({
                "consumptionId": this.state.consumption.consumptionId,
                "currentReading": this.state.consumption.currentReading,
                "currentdate": this.state.consumption.currentdate,
                "previousReading": this.state.consumption.previousReading,
                "previousdate": this.state.consumption.previousdate,
                "unitsConsumed": this.state.consumption.unitsConsumed,
                "connectionConnectionId": this.state.consumption.connectionConnectionId
            }));
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {

        let consumption = {
            "consumptionId": this.state.consumptionId,
            "currentReading": this.state.currentReading,
            "currentdate": this.state.currentdate,
            "previousReading": this.state.previousReading,
            "previousdate": this.state.previousdate,
            "unitsConsumed": this.state.unitsConsumed,
            "connectionConnectionId": this.state.connectionConnectionId
        }
        axios.put("http://localhost:8080/consumption/update/" + consumption.consumptionId, consumption).then(this.setState({
            isUpdate: true
        }));
        alert("Consumption updated");

        event.preventDefault();
    }

    render() {

        if (this.state.isUpdate) {
            return <Redirect to={"/ConsumptionHome"} />
        }

        return (
            <div>
                <Header />
                <div id="fetchvalue">
                    <div className="container-fluid">
                        <h2>Update Consumption</h2>
                        <div class="form-group">
                            <label htmlFor="consumptionId">consumption Id</label>
                            <input type="number" name="consumptionId" value={this.state.consumptionId} onChange={this.handleChange} class="form-control" placeholder="Enter consumption Id" id="consumptionId" disabled />
                        </div>
                        <div class="form-group">
                            <label htmlFor="currentReading">Current Reading</label>
                            <input type="number" name="currentReading" value={this.state.currentReading} onChange={this.handleChange} class="form-control" placeholder="Enter current reading" id="currentReading" />
                        </div>
                        <div class="form-group">
                            <label htmlFor="currentdate">Current Date</label>
                            <input type="date" name="currentdate" value={this.state.currentdate} onChange={this.handleChange} class="form-control" placeholder="Enter current date" id="currentdate" />
                        </div>
                        <div class="form-group">
                            <label htmlFor="previousReading">Previous Reading</label>
                            <input type="number" name="previousReading" value={this.state.previousReading} onChange={this.handleChange} class="form-control" placeholder="Enter previous reading" id="previousReading" />
                        </div>
                        <div class="form-group">
                            <label htmlFor="previousdate">Previous Date</label>
                            <input type="date" name="previousdate" value={this.state.previousdate} onChange={this.handleChange} class="form-control" placeholder="Enter previous date" id="previousdate" />
                        </div>
                        <div class="form-group">
                            <label htmlFor="unitsConsumed">Units Consumed</label>
                            <input type="number" name="unitsConsumed" value={this.state.unitsConsumed} onChange={this.handleChange} class="form-control" placeholder="Enter units consumed" id="unitsConsumed" />
                        </div>
                        <div class="form-group">
                            <label htmlFor="connectionConnectionId">connection Id</label>
                            <input type="number" name="connectionConnectionId" value={this.state.connectionConnectionId} onChange={this.handleChange} class="form-control" placeholder="Enter connection Id" id="connectionConnectionId" />
                        </div>
                        <div>
                            <button onClick={this.handleSubmit} className="button">Update</button>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }

}

export default UpdateConsumption;