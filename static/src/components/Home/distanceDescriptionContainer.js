import React from 'react';
import { connect } from 'react-redux';

import distanceDescription from './distanceDescription'

function mapStateToProps(state) {

    return {
        state: state.properties.distanceType
    };
}


export default connect(mapStateToProps)(distanceDescription);
