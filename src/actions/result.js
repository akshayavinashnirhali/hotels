import axios from 'axios';
import actionTypes from '../constants/actionTypes';

const getHotelResultsRequest = () => ({
    type: actionTypes.GET_HOTEL_RESULTS_REQUEST
});

const getHotelResultsSuccess = (results) => ({
    type: actionTypes.GET_HOTEL_RESULTS_SUCCESS,
    payload: {
        results
    }
});

const getHotelResultsError = (error) => ({
    type: actionTypes.GET_HOTEL_RESULTS_ERROR,
    payload: {
        error
    }
});

const getHotelResults = (searchInputs = {}) => (dispatch) => {
    dispatch(getHotelResultsRequest());
    const data = {
        "sessionId": "8aeb7343-874e-4a04-8bca-533a000cd316",
        "paging": {
           "pageNo": 1,
           "pageSize": 5,
           "orderBy": "price asc, rating desc"
        },
        "optionalDataPrefs": [
           "All"
        ],
        "currency": "USD",
        "contentPrefs": [
           "Basic",
           "Activities",
           "Amenities",
           "Policies",
           "AreaAttractions",
           "Descriptions",
           "Images",
           "CheckinCheckoutPolicy",
           "All"
        ],
        "filters": {
           "minHotelPrice": 1,
           "maxHotelPrice": 10000,
           "minHotelRating": 1,
           "maxHotelRating": 5,
           "hotelChains": [
              "Novotel",
              "Marriott",
              "Hilton",
              "Accor"
           ],
           "allowedCountry": "FR"
        }
    };
    const config = {
        headers: {
            'oski-tenantId': 'Demo',
            'Access-Control-Allow-Origin': '*',
            'X-PINGOTHER': 'pingpong',
            'Content-Type': 'application/xml'
        }
    }   
    axios.post('https://public-be.oski.io/hotel/v1.0/search/results', data, config)
    .then((response) => dispatch(getHotelResultsSuccess(response)))
    .catch((error) => dispatch(getHotelResultsError(error)));
};

export default {
    getHotelResults
};
