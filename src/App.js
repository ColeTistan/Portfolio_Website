import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './css/style.css';
import Navbar from './Components/navbar.js';
import Home from './Components/home.js';
import Links from './Components/links.js';
import Contact from './Components/contact.js';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <BrowserRouter>
    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
     rel="stylesheet"
     integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
     crossorigin="anonymous">
     </link>
      <div className="App">
        <Navbar title="Cole Tistan"/>
        <Route exact path="/" render={() => <Home title="Cole Tistan" />} />
        <Route path="/links" component={Links} />
        <Route path="/contact" component={Contact} />
      </div>
    </BrowserRouter>
  );
}

export default App;
