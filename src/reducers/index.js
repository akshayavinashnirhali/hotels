import { combineReducers } from 'redux';
import homeReducer from './home';
import resultReducer from './result';

export default combineReducers({
    home: homeReducer,
    result: resultReducer
});
