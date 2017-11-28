import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions/properties';

import customSlider from './customSlider';

function mapStateToProps(state) {
    return {
        size: state.properties.size

    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(customSlider);
