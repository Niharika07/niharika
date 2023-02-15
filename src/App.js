import React, { Component } from "react"
import "./App.css"
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import AMS from './components/AMS'
import Seekamentor from './components/Seekamentor'
import Health from './components/healthcare'
import Engroup from './components/Engroup'
import bom from './components/bom'
import password from './components/password'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/ams' component={AMS} />
            <Route path='/seekamentor' component={Seekamentor} />
            <Route path='/health' component={Health} />
            <Route path='/engroup' component={Engroup} />
            <Route path='/bom' component={bom} />
            <Route path='/password' component={password} />
          </Switch>
        </Router>
        <Footer />
      </div>
    )
  }
}

export default App
