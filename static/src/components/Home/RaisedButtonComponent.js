import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import {RaisedButton} from "material-ui";

class RaisedButtonComponent extends React.Component {

    updateState(event) {
        this.props.generateNetworkRequest(this.props.size, this.props.distance)
    }

    render() {
        return (
            <RaisedButton label="Generate graph" primary={true} onClick={this.updateState.bind(this)}/>
        );
    }
}

RaisedButtonComponent.propTypes = {
    generateNetworkRequest: React.PropTypes.func,
    distance: React.PropTypes.string,
    size: React.PropTypes.number,
};

export default RaisedButtonComponent;
