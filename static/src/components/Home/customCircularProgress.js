import React, {Component} from 'react';
import CircularProgress from 'material-ui/CircularProgress';

const min = 1;
const max = 5;


export default class CustomCircularProgress extends Component {

    handleSlider(event, value) {
        this.props.updateCircularProgress(value)
    };

    render() {
        if (this.props.visible == true) {
            return (
                <div>
                    <CircularProgress mode="indeterminate" size = {30} thickness = {4} />
                </div>);
        } else {
            return (
                <span></span>
            );
        }
    }
}

CustomCircularProgress.propTypes = {
    updateCircularProgress: React.PropTypes.func,
    visible: React.PropTypes.bool.isRequired,
};
