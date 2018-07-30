import React, { Component } from 'react';
import classnames from 'classnames';
import styles from './BoilingCalc.module.css';

class BoilingCalc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: ''
    };
  }

  handleChange = e => {
    this.setState({ temperature: e.target.value })
  }

  render() {
    const temperature = this.state.temperature;
    return (
      <fieldset>
        <legend>Enter temperature in Celsius:</legend>
        <input
          value={temperature}
          onChange={this.handleChange} />
        <BoilingVerdict
          celsius={parseFloat(temperature)}
          />
      </fieldset>
    )
  }

}

const BoilingVerdict = ({ celsius }) => {
  if (celsius >= 100) {
    return (<p>The water would boil.</p>);
  }
  return (<p>The water would NOT boil.</p>);
}

export default BoilingCalc;
