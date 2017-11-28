import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions/properties';

import dropDownDistanceMenu from './dropDownDistanceMenu'

function mapStateToProps(state) {
    return {
        state: state.properties.distanceType
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(dropDownDistanceMenu);
