import axios from 'axios';

export function fetchAllConnections() {

    return (dispatch) => {

        return axios.get('http://localhost:8080/connection/all')
            .then(resp => {
                dispatch(fetchAllConnectionsSuccess(resp.data))
            })
            .catch(error => {
                throw (error);
            });
    }
}

export function fetchAllConnectionsSuccess(data) {
    return {
        type: "FETCHALLSUCCESS",
        payload: data
    }
}

export function addConnection(connection) {

    return (dispatch) => {

        return axios.post('http://localhost:8080/connection/save',connection)
            .then(resp => {
                dispatch(addConnectionSuccess(resp.data))
            })
            .catch(error => {
                throw (error);
            });
    }
}

export function addConnectionSuccess(data) {
    return {
        type : "ADDCONNECTIONSUCCESS",
        payload : data
    }
}
