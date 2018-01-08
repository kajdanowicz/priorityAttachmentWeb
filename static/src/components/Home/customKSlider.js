import React, {Component} from 'react';
import Slider from 'material-ui/Slider';

const min = 1;
const max = 5;


export default class CustomKSlider extends Component {

  handleSlider(event, value){
    this.props.updateKSlider(value)
  };

  render() {
    return (
      <div>
        <span>Number of edges each vertex creates: {this.props.k}</span>
        <Slider
          min={min}
          max={max}
          step={1}
          value={this.props.k}
          defaultValue={2}
          onChange={this.handleSlider.bind(this)}
          style={{margin: 0}}
        />
      </div>
    );
  }
}

CustomKSlider.propTypes = {
    updateKSlider: React.PropTypes.func,
    k: React.PropTypes.number.isRequired,
};
