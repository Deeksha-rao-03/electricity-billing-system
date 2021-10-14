import React, { useState, useEffect } from 'react'; 
import {Link} from 'react-router-dom';
import axios from 'axios'; 
import Header from './Header';
import Footer from './Footer';
import Table from 'react-bootstrap/Table'

function FetchAllConsumptions() {
    
        const [consumptions, setConsumptions] = useState([]); 
        useEffect(() => { 
    
            axios.get('http://localhost:8080/consumption/all') 
    
            .then(resp => setConsumptions(resp.data)); 
    
        },[]); 
    
        return (
            
            <div>
                <Header/>
                <div id="fetch">
                <h1></h1>
                <div className="table-responsive" style={{paddingBottom:"15%"}}>
                    <Table responsive="sm">
                        <thead>
                            <tr>
                                <th>Consumption ID</th>
                                <th>Current Reading</th>
                                <th>Current Date</th>
                                <th>Previous Reading</th>
                                <th>Previous Date</th>
                                <th>Units Consumed</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                consumptions.length > 0 ? 
                                consumptions.map(consumption => 
                                    <tr>
                                        <td>{consumption.consumptionId}</td>
                                        <td>{consumption.currentReading}</td>
                                        <td>{consumption.currentdate}</td>
                                        <td>{consumption.previousReading}</td>
                                        <td>{consumption.previousdate}</td>
                                        <td>{consumption.unitsConsumed}</td>
                                        <td><Link to={"/getConsumption/"+consumption.consumptionId}>View </Link></td>
                                        <td><Link to={"/updateConsumption/"+consumption.consumptionId}>Update</Link></td>
                                        <td><Link to={"/deleteConsumption/"+consumption.consumptionId} style={{color:"red"}}>Delete</Link></td>
                                    </tr>
                                )
                                : <p>Loading...</p> 
                            }
                        </tbody>
                    </Table>
                </div>
                <div>
                    <Link to={"/saveConsumption/"}><button className="btn btn-primary">Add New Consumption</button></Link>
                </div>
                </div>
                <Footer/>
            
            </div>
        )
    }

export default FetchAllConsumptions; 