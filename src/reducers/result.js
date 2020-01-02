import actionTypes from '../constants/actionTypes';

const initialState = {
    results: [],
    isFetch: false,
    error: null
};

const result = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.GET_HOTEL_RESULTS_REQUEST:
            return Object.assign({}, state, {
                results: [],
                isFetch: true,
                error: null
            });
        case actionTypes.GET_HOTEL_RESULTS_ERROR:
            return Object.assign({}, state, {
                isFetch: false,
                error: action.payload.error
            });
        case actionTypes.GET_HOTEL_RESULTS_SUCCESS:
            return Object.assign({}, state, {
                results: action.payload.results,
                isFetch: false,
                error: null
            });
        default:
            return state;
    }
}

export default result;
