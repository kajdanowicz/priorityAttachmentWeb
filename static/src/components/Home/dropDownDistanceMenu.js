import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

export default class DropDownDistanceMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: 2};
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
        <DropDownMenu openImmediately={false} value={this.state.value} onChange={this.handleChange}>
            <MenuItem value={1} primaryText="random distance" />
            <MenuItem value={2} primaryText="degree distance" />
            <MenuItem value={3} primaryText="betweenness distance" />
            <MenuItem value={4} primaryText="closeness distance" />
            <MenuItem value={5} primaryText="page rank distance" />
            <MenuItem value={6} primaryText="euclidean 1-D distance" />
            <MenuItem value={7} primaryText="euclidean 2-D distance" />
            <MenuItem value={8} primaryText="cosine distance" />
            <MenuItem value={9} primaryText="aggregate distance" />
            <MenuItem value={10} primaryText="linear regression distance" />
            <MenuItem value={11} primaryText="naive bayes classifier distance" />
        </DropDownMenu>
    );
  }
}
