import React, { Component } from 'react';
import '../../styles/app.sass';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="/images/logo.svg" className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <img src="https://m.popkey.co/287d1c/kve1Z_s-200x150.gif?c=popkey-web&p=popkey&i=dogs-animals&l=search&f=.gif" alt="pug"/>
        <img src="/images/user1.jpg" alt="pug2"/>
      </div>
    );
  }
}

export default App;
