import axios from 'axios';
import actionTypes from '../constants/actionTypes';
import orientalImage from '../assets/images/oriental.jpg';
import hayatImage from '../assets/images/hayat.jpg';
import taajImage from '../assets/images/taaj.jpg';

axios.defaults.baseURL = 'https://public-be.oski.io/';
axios.defaults.headers.common['oski-tenantId'] = 'Demo';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const dummyData = [
    { name: 'Oriental Hotel', location: 'Pune', price: '350', rating: 4, image: orientalImage },
    { name: 'Hyat Hotel', location: 'Mumbai', price: '750', rating: 3, image: hayatImage },
    { name: 'Taaj Hotel', location: 'Pune', price: '800', rating: 5, image: taajImage },
];

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
            'Content-Type': 'application/json'
        }
    }   
    axios.post('hotel/v1.0/search/results', data, config)
        .then((response) => dispatch(getHotelResultsSuccess(response)))
        .catch((error) => {
            dispatch(getHotelResultsSuccess(dummyData));
            // dispatch(getHotelResultsError(error)) TODO: remove this comment after final API call success
        });
};

export default {
    getHotelResults
};
