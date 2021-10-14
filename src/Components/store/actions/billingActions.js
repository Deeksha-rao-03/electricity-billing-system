import axios from 'axios';

export function fetchAllBills() {

    return (dispatch) => {

        return axios.get('http://localhost:8080/bill/all')
        .then(resp => {
            dispatch(fetchAllBillsSuccess(resp.data));
        })
        .catch(error => {
            throw (error);
        });
    }
}

export function fetchAllBillsSuccess(data) {
    return {
        type: "FETCHALLSUCCESS",
        payload: data
    }
}


export function fetchBillByNo(billNo) {

    return (dispatch) => {
        
            return axios.get('http://localhost:8080/bill/get/' + billNo)
            .then(resp => {
                dispatch(fetchBillByNoSuccess(resp.data))
            })
            .catch(error => {
                throw (error);
            });
    }
}

export function fetchBillByNoSuccess(data) {
    return {
        type: "FETCHBILLBYNOSUCCESS",
        payload : data
    }
}