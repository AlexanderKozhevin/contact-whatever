import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Item from './Item';
import List from './List';
import Add from './Add';


class App extends Component {
  constructor(props){
    super(props);

  }



  render() {
    return (
      <div className="App">
        <Router>
          <div>

            <ul>
              <li><Link to="/">List</Link></li>
              <li><Link to="/add">Add</Link></li>
            </ul>

            <hr/>

            <Route exact path="/" component={List}/>
            <Route exact path="/add" component={Add}/>
            <Route path="/contact/:id" component={Item}/>

          </div>
        </Router>
      </div>
    );
  }
}

export default App;
