const initialState = {
    payments: [],
    payment : undefined,
    result : undefined
}

export default function paymentReducer(state = initialState, action) {

    if (action.type === 'FETCHALLSUCCESS') {

        return {
            ...state,
            payments: action.payload
        }

    }
    return state;

}
