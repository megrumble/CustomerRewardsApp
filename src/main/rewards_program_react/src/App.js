import React, { Component } from 'react';

import './App.css';
import {Route,Switch} from 'react-router-dom';
import Home from './components/Home';
import CustomerPoints from './components/CustomerPoints';
import CustomerTransactions from './components/CustomerTransactions';

class App extends Component {
    render() {
      return (
        <div className="App">
         <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/customerTransactions/:customerId" component={CustomerTransactions}/>
          <Route exact path="/customerPoints/:customerId" component={CustomerPoints}/>
         </Switch>
        </div>
      );
    }
  }

  export default App;