import React, {Component} from 'react';
import Slider from 'material-ui/Slider';

const min = 10;
const max = 1000;


export default class CustomSlider extends Component {

  state = {
    slider: 50,
  };

  handleSlider = (event, value) => {
    this.setState({slider: value});
  };

  render() {
    return (
      <div>
        <span>{this.state.slider}</span>
        <Slider
          min={min}
          max={max}
          step={max / 100}
          value={this.state.slider}
          defaultValue={50}
          onChange={this.handleSlider}
          style={{margin: 0}}
        />
      </div>
    );
  }
}
