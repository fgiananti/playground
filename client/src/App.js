import React, { Component } from 'react';

//components
import ButtonGwd from './components/ButtonGwd';
import Header from './components/Header';

//modules
import styles from './App.module.css';


class App extends Component {
  render() {
    return (
      <div>
        <ButtonGwd color="blue">Get in Touch!</ButtonGwd>
        <ButtonGwd color="orange" size="large">Get Started Today</ButtonGwd>
      </div>
    );
  }
}

export default App;
