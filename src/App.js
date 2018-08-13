import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './sqpaymentform.css';
import PaymentForm from './PaymentForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Sqaure Payment Form</h1>
        </header>
       <PaymentForm />
      </div>
    );
  }
}

export default App;
