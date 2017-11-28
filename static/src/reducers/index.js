import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import auth from './auth';
import data from './data';
import properties from './properties';

const rootReducer = combineReducers({
    routing: routerReducer,
    /* your reducers */
    auth,
    data,
    properties
});

export default rootReducer;
