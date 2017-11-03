import React, {Component} from 'react';
import Slider from 'material-ui/Slider';

const min = 0;
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
        <Slider
          min={min}
          max={max}
          step={max / 100}
          value={this.state.slider}
          onChange={this.handleSlider}
        />
        <p>
          <span>{'The value of this slider is: '}</span>
          <span>{this.state.slider}</span>
        </p>
      </div>
    );
  }
}
