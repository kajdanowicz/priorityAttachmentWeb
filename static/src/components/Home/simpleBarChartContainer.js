import React from 'react';
import { connect } from 'react-redux';

import simpleBarChart from './simpleBarChartComponent'

function mapStateToProps(state) {

    return {
        data: state.properties.chartData
    };
}


export default connect(mapStateToProps)(simpleBarChart);
