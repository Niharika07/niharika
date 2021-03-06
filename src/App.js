import React, { Component } from "react"
import "./App.css"
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import AMS from './components/AMS'
import Seekamentor from './components/Seekamentor'
import Health from './components/healthcare'
import Engroup from './components/Engroup'
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
          </Switch>
        </Router>
        
      </div>
    )
  }
}

export default App
