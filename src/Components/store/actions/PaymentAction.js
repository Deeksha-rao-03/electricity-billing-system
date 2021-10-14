import axios from 'axios';

export function fetchAllPayments() {

    return (dispatch) => {

        return axios.get('http://localhost:8080/payment/all')
            .then(resp => {
                dispatch(fetchAllPaymentsSuccess(resp.data))
            })
            .catch(error => {
                throw (error);
            });
    }
}

export function fetchAllPaymentsSuccess(data) {
    return {
        type: "FETCHALLSUCCESS",
        payload: data
    }
}



