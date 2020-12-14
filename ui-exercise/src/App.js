import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header.js'
import Home from './components/Home.js'
import TacoList from './components/TacoList.js'



function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/taco-places/:cityInfo' component={TacoList}/>
      </Switch>
    </div>
  );
}

export default App;
