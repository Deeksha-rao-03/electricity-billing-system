import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import Header from './Header'
import Footer from './Footer'

import { fetchAllConnections } from '../store/actions/ConnectionActions';

function FetchAllConnections() {

    const connections = useSelector(state => state.connectionReducer.connections);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllConnections());
    }, []);

    return (
        <div>
            <Header />
            <div id="middle">
                <h1 style={{color:"black"}}>Connection List</h1>
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Connection Id</th>
                                <th>Created Date</th>
                                <th>Status</th>
                                {/* <th>Customer Id</th> */}
                                <th>Tariff Id</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                connections.length > 0 ?
                                    connections.map(connection =>

                                        <tr>
                                            <td>{connection.connectionId}</td>
                                            <td>{connection.createdDate}</td>
                                            <td>{connection.status}</td>
                                            {/* <td>{connection.customerId}</td> */}
                                            <td>{connection.tariff.tariffId}</td>

                                            <td><Link to={"/deleteConnection/" + connection.connectionId}>Delete</Link></td>
                                        </tr>
                                    )

                                    : <div>Loading....</div>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default FetchAllConnections;