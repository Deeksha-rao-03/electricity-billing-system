import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { Redirect } from 'react-router';


function FetchByConsumptionId(props) {

    const [consumption, setConsumption] = useState([]);
    useEffect(() => {
        axios.get(' http://localhost:8080/consumption/get/' + props.match.params.id)
            .then(resp => setConsumption(resp.data));
    }, []);
    
    return (
        <div>
            <Header/>
            <div id="fetchvalue">
                
                <div className="float-middle"></div>
                <h2>Consumption Information </h2>
                {consumption !== undefined ?
                <container>
                    <p>Consumption ID: {consumption.consumptionId}</p>
                    <p>Current Reading: {consumption.currentReading}</p>
                    <p>Current Date: {consumption.currentdate}</p>
                    <p>Previous Reading: {consumption.previousReading}</p>
                    <p>Previous Date: {consumption.previousdate}</p>
                    <p>Units Consumed: {consumption.unitsConsumed}</p>
                </container>
                : <div> Consumption Not Found</div>}

            </div>
            <div>
                <Link to={"/update/"}><button className="btn btn-primary">Update</button></Link>
            </div>   
            <Footer/>
        </div>
    );
}

export default FetchByConsumptionId;