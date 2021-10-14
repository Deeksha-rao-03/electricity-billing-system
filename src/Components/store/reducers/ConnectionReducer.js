const initialState = {
    connections: [],
    connection : undefined,
    result : undefined
}

export default function connectionReducer(state = initialState, action) {

    if (action.type === 'FETCHALLSUCCESS') {

        return {
            ...state,
            connections: action.payload
        }

    }

    if (action.type === 'ADDCONNECTIONSUCCESS') {

        return {
            ...state,
            result: action.payload
        }
    }

    return state;
}