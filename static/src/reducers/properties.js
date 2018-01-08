import jwtDecode from 'jwt-decode';

import { createReducer } from '../utils/misc';
import {DISTANCE_TYPE_UPDATE, GENERATE_NETWORK_REQUEST, UPDATE_SLIDER_VALUE, UPDATE_K_SLIDER_VALUE, GENERATE_NETWORK_SUCCESS, GENERATE_NETWORK_FAILURE} from '../constants/index';

const initialState = {
    distanceType: "random",
    size: 50,
    k: 2,
    network:{},
    loading: false,
    failed: true,
    degree: {},
    paths: {},
    chartData: {clustering:[], degree:[], paths:[]}
};

export default createReducer(initialState, {
    [DISTANCE_TYPE_UPDATE]: (state,payload) =>
        Object.assign({}, state, {
            distanceType: payload,
        }),
    [GENERATE_NETWORK_REQUEST]: (state, payload) =>{
        return Object.assign({}, state, {
          loading: true,
         network:{}
        })
    },
    [GENERATE_NETWORK_SUCCESS]: (state, payload) =>{
        return Object.assign({}, state, {
            network: payload.network.network,
            chartData: {
                degree: payload.network.degree,
                paths: payload.network.paths,
                clustering: payload.network.clustering
            },
            loading: false,
            failed: false
        })
    },
    [GENERATE_NETWORK_FAILURE]: (state, payload) =>{
        return Object.assign({}, state, {
            network: {},
            loading: false,
            failed: true
        })
    },
    [UPDATE_SLIDER_VALUE]: (state, payload) =>
        Object.assign({}, state, {
            size: payload,
        }),
    [UPDATE_K_SLIDER_VALUE]: (state, payload) =>
        Object.assign({}, state, {
            k: payload,
        }),
});
