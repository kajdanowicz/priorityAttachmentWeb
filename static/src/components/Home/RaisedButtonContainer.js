import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions/properties';

import raisedButton from './RaisedButtonComponent';

function mapStateToProps(state) {
    return {
        distance: state.properties.distanceType,
        size: state.properties.size,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(raisedButton);
