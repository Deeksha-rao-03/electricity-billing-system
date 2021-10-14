import React from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import { Redirect } from 'react-router-dom';

class DeleteConnection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            connection: undefined,
            connectionId: '',
            createdDate: '',
            status: '',
            tariffId: '',
            isDelete: false
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/connection/get/' + this.props.match.params.id)
            .then(resp => this.setState({
                connection: resp.data

            })).then(p => this.setState({
                "connectionId": this.state.connection.connectionId,
                "createdDate": this.state.connection.createdDate,
                "status": this.state.connection.status,
                "tariffId": this.state.connection.tariff.tariffId
            }));
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {

        let connection = {
            "connectionId": this.state.connectionId,
            "createdDate": this.state.createdDate,
            "status": this.state.status,
            "tariffId": this.state.tariffId

        }
        axios.delete("http://localhost:8080/connection/delete/" + connection.connectionId, connection).then(this.setState({
            isDelete: true
        }));
        alert("Connection deleted");

        event.preventDefault();
    }

    render() {

        if (this.state.isDelete) {
            return <Redirect to={"/ConnectionHome"} />
        }

        return (
            <><><Header />
                <div>
                    <div className="container-fluid">
                        <h2 style={{color:"black", paddingBottom:"10%"}}>Delete Connection</h2>
                        <div class="form-group">
                            <label htmlFor="connectionId">connection Id</label>
                            <input type="number" name="connectionId" value={this.state.connectionId} onChange={this.handleChange} class="form-control" placeholder="Enter connection Id" id="connectionId" disabled />
                        </div>
                        <div class="form-group">
                            <label htmlFor="createdDate">Created Date</label>
                            <input type="date" name="createdDate" value={this.state.createdDate} onChange={this.handleChange} class="form-control" placeholder="Enter created Date" id="createdDate" disabled />
                        </div>
                        <div class="form-group">
                            <label htmlFor="status">Status</label>
                            <input type="text" name="status" value={this.state.status} onChange={this.handleChange} class="form-control" placeholder="Enter Status" id="status" disabled />
                        </div>
                        <div class="form-group">
                            <label htmlFor="tariffId">Tariff Id</label>
                            <input type="number" name="tariffId" value={this.state.tariffId} onChange={this.handleChange} class="form-control" placeholder="Enter Tariff Id" id="tariffId" disabled />
                        </div>

                        <div style={{paddingLeft:"650px"}}>
                            <button onClick={this.handleSubmit} className="btn btn-primary">Delete Connection</button>
                        </div>
                    </div><br></br>
                    <div>
                        <section class="footer" style={{ position: 'sticky' }}>
                            <div class="social">
                                <a href="#"><i class="fa fa-facebook"></i></a>
                                <a href="#"><i class="fa fa-instagram"></i></a>
                                <a href="#"><i class="fa fa-twitter"></i></a>
                                <a href="#"><i class="fa fa-linkedin"></i></a>
                                <a href="#"><i class="fa fa-youtube"></i></a>
                            </div>

                            <ul className="list">
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="#">About</a>
                                </li>
                                <li>
                                    <a href="#">Help</a>
                                </li>
                                <li>
                                    <a href="#">Contact Us</a>
                                </li>
                                <li>
                                    <a href="#">Privacy Policy</a>
                                </li>
                            </ul>
                            <p className="copyright">
                                Electricity Billing System @ 2021
                            </p>
                        </section>
                    </div></div>
            </></>

        )
    }

}

export default DeleteConnection;