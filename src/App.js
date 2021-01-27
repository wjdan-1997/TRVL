import React from 'react'
import './App.css';

import Navbar from './components/NavBar';
import Home from './components/pages/Home';
import {BrowserRouter as Router, Switch, Route}from 'react-router-dom'
import Products from './components/pages/Products';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
      
      <Route path='/' exact component= {Home}/>
      <Route path='/Products' exact component={Products}/>
      <Route path='/SignUp' exact component={SignUp}/>
      <Route path='/Services' exact component ={Services}/>
     
      </Switch>
    </Router>
   
   </>
  );
}

export default App;
