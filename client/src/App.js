import React, { Component } from 'react';

//components
import ButtonGwd from './components/ButtonGwd';
import Header from './components/Header';
import Feature from './components/Feature';
import Column from './components/Column';
import Row from './components/Row';

//modules
import styles from './App.module.css';


class App extends Component {
  render() {
    return (
      <div>
        <Row>
          <Column type="col1of2">
            <ButtonGwd color="blue">Get in Touch!</ButtonGwd>
            <ButtonGwd color="orange" size="large">Get Started Today</ButtonGwd>
          </Column>
        </Row>


        <Row>
          <Column type="col1of2">
            <Feature>
              Download our app and we’ll send you a notice if it’s about to rain in the next 20 minutes around your current location. A good rain can be refreshing, but sometimes you just want to stay dry.
              Download our app and we’ll send you a notice if it’s about to rain in the next 20 minutes around your current location. A good rain can be refreshing, but sometimes you just want to stay dry.
            </Feature>
          </Column>
          <Column type="col1of2">
            <Feature>
              Download our app and we’ll send you a notice if it’s about to rain in the next 20 minutes around your current location. A good rain can be refreshing, but sometimes you just want to stay dry.
            </Feature>
          </Column>
        </Row>

      </div>
    );
  }
}

export default App;
