const initialState = {
    bills: [],
    bill : undefined
}

export default function billingReducer(state = initialState, action) {

    if (action.type === 'FETCHALLSUCCESS') {

        return {
            ...state,
            bills: action.payload
        }

    }
    if (action.type === 'FETCHBILLBYNOSUCCESS') {

        return {
            ...state,
            bill: action.payload
        }
    }

    return state;

}
