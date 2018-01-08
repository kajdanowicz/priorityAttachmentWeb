import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import {RaisedButton} from "material-ui";

class RaisedButtonComponent extends React.Component {

    componentDidMount() {
        this.updateState()
    }

    updateState() {
        this.props.generateNetworkRequest(this.props.size, this.props.distance, this.props.k)
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
    k: React.PropTypes.number,
};

export default RaisedButtonComponent;
