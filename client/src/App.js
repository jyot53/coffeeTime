import React from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Registration from './components/Registration';
import Signin from './components/Signin';
import Error from './components/Error';
import {Route,Switch} from 'react-router-dom';
import './App.css';
const App = () => {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/register">
          <Registration/>
        </Route>
        <Route path="/signin">
          <Signin/>
        </Route>
        <Route>
          <Error/>
        </Route>
      </Switch>
    </>
  )
}

export default App

