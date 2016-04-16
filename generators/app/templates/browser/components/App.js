import React from 'react';
import HelloWorld from './HelloWorld';
import { connect } from 'react-redux';

let App = () => (
  <div className="wrapper">
    <HelloWorld />
  </div>
);

App = connect()(App);

export default App;
