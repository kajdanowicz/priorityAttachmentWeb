import React from 'react';
import { connect } from 'react-redux';

import customCircularProgress from './customCircularProgress'

function mapStateToProps(state) {

    return {
        visible: state.properties.loading
    };
}

export default connect(mapStateToProps)(customCircularProgress);
