import {
    DISTANCE_TYPE_UPDATE,
    GENERATE_NETWORK_REQUEST,
    GENERATE_NETWORK_SUCCESS,
    GENERATE_NETWORK_FAILURE,
    UPDATE_SLIDER_VALUE,
    UPDATE_K_SLIDER_VALUE
} from '../constants/index';
import {parseJSON} from "../utils/misc";
import {generate_network} from "../utils/http_functions";

export function updateDistanceType(type) {
    return {
        type: DISTANCE_TYPE_UPDATE,
        payload: type,
    };
}

export function generateNetworkRequest(size, distance, k) {
    return (dispatch) => {
        dispatch(generateNetworkRequestState(size, distance, k));
        return generate_network(size, distance, k)
            .then(parseJSON)
            .then(response => {
                    try {
                        dispatch(generateNetworkSuccess(response));
                    } catch (e) {
                        alert(e);
                        dispatch(generateNetworkFailure({
                            response: {
                                status: 403,
                                statusText: 'Problem during network generation.',
                            },
                        }));
                    }
                }
            )
            .catch(error => {
                console.log(error)
                dispatch(serverUnreachable({
                    response: {
                        status: 403,
                        statusText: 'Server unreachable.',
                    },
                }));
            });
    }
}

export function serverUnreachable(error) {
    return {
        type: GENERATE_NETWORK_FAILURE,
        payload: {
            status: error.response.status,
            statusText: error.response.statusText,
        }
    };
}

export function generateNetworkRequestState(size, distance, k) {
    return {
        type: GENERATE_NETWORK_REQUEST,
        payload: {
            size: size,
            distance: distance,
            k: k,
        }
    };
}

export function generateNetworkSuccess(network) {
    localStorage.setItem('network', network);
    return {
        type: GENERATE_NETWORK_SUCCESS,
        payload: {
            network,
        },
    };
}


export function generateNetworkFailure(error) {
    localStorage.removeItem('network');
    return {
        type: GENERATE_NETWORK_FAILURE,
        payload: {
            status: error.response.status,
            statusText: error.response.statusText,
        },
    };
}

export function updateSlider(size) {
    return {
        type: UPDATE_SLIDER_VALUE,
        payload: size,
    };
}

export function updateKSlider(k) {
    return {
        type: UPDATE_K_SLIDER_VALUE,
        payload: k,
    };
}
