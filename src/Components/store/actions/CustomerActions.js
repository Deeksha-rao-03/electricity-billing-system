import axios from 'axios';

export function fetchCustomerById(customerId) {

    return async (dispatch) => {

        try {
            const resp = await axios.get('http://localhost:8080/customer/getuserdetails/' + customerId);
            dispatch(fetchCustomerByIdSuccess(resp.data));
        } catch (error) {
            throw (error);
        }
    }
}

export function fetchCustomerByIdSuccess(data) {
    return {
        type: "FETCHBYIDSUCCESS",
        payload : data
    }
}