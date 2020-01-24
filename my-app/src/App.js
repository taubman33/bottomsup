import React, { Component } from 'react';
import './App.css';
import {Switch, Route, Link} from 'react-router-dom'
import axios from 'axios'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

//url for Drink search
const cocktailURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

//url for Liquor info
const liquorURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka'


class App extends Component {
  constructor (props){
    super(props)
    this.state={

    }
    render () {
      return (
        <div className="App">
        <h1> React is working</h1>
        <Header />
        <Main />
        <Footer/>
        </div>
      );
    }
}

export default App;
