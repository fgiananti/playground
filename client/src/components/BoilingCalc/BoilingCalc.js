import React, { Component } from 'react';
import classnames from 'classnames';
import styles from './BoilingCalc.module.css';

class BoilingCalc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scale: 'c',
      temperature: ''
    };
  }

  handleCelsiusChange = temperature => {
    this.setState({ scale: 'c', temperature });
  }

  handleFahrenheitChange = temperature => {
    this.setState({ scale: 'f', temperature });
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature ;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature ;

    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange} />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange} />

        <BoilingVerdict
          celsius={parseFloat(celsius)} />
      </div>
    )
  }
}

class TemperatureInput extends React.Component {

  handleTemperatureChange = e => {
    this.props.onTemperatureChange(e.target.value)
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;

    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature}
               onChange={this.handleTemperatureChange} />
      </fieldset>
    );
  }
}

const BoilingVerdict = ({ celsius }) => {
  if (celsius >= 100) {
    return (<p>The water would boil.</p>);
  }
  return (<p>The water would NOT boil.</p>);
}

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

export default BoilingCalc;
