import React from 'react';
import { connect } from 'react-redux';

import { fetchCustomerById } from '../store/actions/CustomerActions';

class FetchCustomerDetails extends React.Component {
   
    componentDidMount() {
       this.props.fetchById(this.props.match.params.id);
    }

    render() {
        return (
            <div>
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>CustomerId</th>
                                <th>Customer Name</th>
                                <th>Address</th>
                                <th>Email</th>
                                <th>Password</th>                              
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.customer !== undefined ?

                                    <tr>
                                        <td>{this.props.customer.customerId}</td>
                                        <td>{this.props.customer.name}</td>
                                        <td>{this.props.customer.address}</td>
                                        <td>{this.props.customer.email}</td>
                                        <td>{this.props.customer.password}</td>                                        
                                    </tr>
                                    : <p>Loading....</p>
                                }
                        </tbody>
                    </table>
                </div>
               
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        customer : state.customerReducer.customer,        
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchById : (customerId) => dispatch(fetchCustomerById(customerId))
       
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(FetchCustomerDetails);