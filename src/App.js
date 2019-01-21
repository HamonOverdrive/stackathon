import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {NavbarContainer} from './containers'
import Routes from './routes'

const App = () => {
  return (
    <div>
      <NavbarContainer />
      <Routes />
    </div>
  )
}

export default App;
