import actionTypes from '../constants/actionTypes';

const updateSearchInputs = (searchInputs = {}) => ({
    type: actionTypes.UPDATE_SEARCH_INPUTS,
    payload: {
        ...searchInputs
    }
});

export default {
    updateSearchInputs
};
