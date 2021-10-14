const initialState = {
    
    customer : undefined,
    rseult : undefined
}

export default function customerReducer(state = initialState, action) {

    
    if (action.type === 'FETCHBYIDSUCCESS') {

        return {
            ...state,
            customer: action.payload
        }
    }
    if (action.type === 'CREATECUSTOMERSUCCESS') {

        return {
            ...state,
            result: action.payload
        }
    }

    return state;

}

