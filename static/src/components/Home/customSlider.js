import React, {Component} from 'react';
import Slider from 'material-ui/Slider';

const min = 10;
const max = 500;


export default class CustomSlider extends Component {

  handleSlider(event, value){
    this.props.updateSlider(value)
  };

  render() {
    return (
      <div>
        <span>Network size: {this.props.size}</span>
        <Slider
          min={min}
          max={max}
          step={max / 100}
          value={this.props.size}
          defaultValue={50}
          onChange={this.handleSlider.bind(this)}
          style={{margin: 0}}
        />
      </div>
    );
  }
}

CustomSlider.propTypes = {
    updateSlider: React.PropTypes.func,
    size: React.PropTypes.number.isRequired,
};
