import '@babel/polyfill';
import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './redux/store'
import Main from './components/Main.jsx' ;
import './App.css'


class App extends Component {
  
  render() {
    return (
    <Provider store={store}>
     <Router>   
          <Main />    
     </Router>
    </Provider>
    );
  }
}

export default App;