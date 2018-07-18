import React, { Component } from 'react';

//components
import Button from './components/Button';

//modules
import styles from './App.module.css';


class App extends Component {
  render() {
    return (
      <div>
        <Button buttonType="primary"/>
        <Button buttonType="secondary"/>
        <Button buttonType="danger"/>
      </div>
    );
  }
}

export default App;
