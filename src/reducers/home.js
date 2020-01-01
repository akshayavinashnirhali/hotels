import actionTypes from '../constants/actionTypes';

const initialState = {
    activeGuestId: '',
    location: '',
    checkIn: '',
    checkOut: '',
};

const home = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.UPDATE_SEARCH_INPUTS:
            return Object.assign({}, state, {
                ...action.payload
            });
        default:
            return state;
    }
}

export default home;
