import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

 class DropDownDistanceMenu extends React.Component {

    updateState(event,data, value){
        this.props.updateDistanceType(value)
    }

  render() {
    return (
        <DropDownMenu openImmediately={false} value={this.props.state} onChange={this.updateState.bind(this)}>
            <MenuItem value={"random"} primaryText="random distance" />
            <MenuItem value={"degree"} primaryText="degree distance" />
            <MenuItem value={"betweenness"} primaryText="betweenness distance" />
            <MenuItem value={"closeness"} primaryText="closeness distance" />
            <MenuItem value={"page_rank"} primaryText="page rank distance" />
            <MenuItem value={"euclidean_1"} primaryText="euclidean 1-D distance" />
            <MenuItem value={"euclidean_2"} primaryText="euclidean 2-D distance" />
            <MenuItem value={"cosine"} primaryText="cosine distance" />
            <MenuItem value={"aggregate"} primaryText="aggregate distance" />
        </DropDownMenu>
    );
  }
}
DropDownDistanceMenu.propTypes = {
    updateDistanceType: React.PropTypes.func,
    state: React.PropTypes.string,
};

export default DropDownDistanceMenu;
