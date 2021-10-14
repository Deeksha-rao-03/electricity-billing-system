import React from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';

class SearchConnectionById extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            connectionId: '',
            connection: undefined
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });

    }

    handleSubmit = (event) => {
        axios.get('http://localhost:8080/connection/get/' + this.state.connectionId)
            .then(resp => {
                console.log(resp);

                if (resp.status === 200) {
                    this.setState({
                        connection: resp.data
                    })

                }

            }).catch(error => {
                console.log(error.response);
                if (error.response.status === 404) {
                    this.setState({
                        isSubmitted: false
                    })
                    alert("Connection Id not exisiting");
                }

            });

        event.preventDefault();
    }

    render() {
        return (
            <><><Header />

                <div className="container-fluid" id="middle">
                    <h2>Search Connection</h2>
                    <form action="" onSubmit={this.handleSubmit} role="form">
                        <div class="form-group">
                            <label for="connectionId">Connection Id  </label>
                            <input type="number" min="1" name="connectionId" value={this.state.connectionId} onChange={this.handleChange} class="form-control" placeholder="Enter connection id" required />
                        </div>
                        <div>
                            <button onclick={this.handleSubmit} className="btn btn-primary" >Search</button>
                        </div>
                    </form>
                    <br></br>
                    <div>{
                        this.state.connection !== undefined ?
                            <div className="table-responsive">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Connection Id</th>
                                            <th>Created Date</th>
                                            <th>Status</th>
                                            <th>Tariff Id</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr>
                                            <td>{this.state.connection.connectionId}</td>
                                            <td>{this.state.connection.createdDate}</td>
                                            <td>{this.state.connection.status}</td>
                                            <td>{this.state.connection.tariff.tariffId}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            : <p>Loading...</p>
                    }
                    </div>

                </div></><Footer /></>
        )
    }

}

export default SearchConnectionById;