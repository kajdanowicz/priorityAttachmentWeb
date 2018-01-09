import React from 'react';
import { connect } from 'react-redux';

import customGraph from './customGraph'

function mapStateToProps(state) {

    return {
        network: state.properties.network
    };
}


export default connect(mapStateToProps)(customGraph);
