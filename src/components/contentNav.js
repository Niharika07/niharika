import React, { Component } from "react"
import "./contentNav.css";
import {Link} from 'react-scroll';
 
class ContentNav extends Component {
  render() {
    return (
      <nav className="nav" id="navbar">

        <div class="nav-content">
         
          <ul className="nav-items">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="background"
                spy={true}
                smooth={true}
              >Background</Link></li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="solution"
                spy={true}
                smooth={true}
               
              >Solution</Link></li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="research"
                spy={true}
                smooth={true}
              >Research</Link></li>
          </ul>
        </div>

      </nav>
    )
  }
}

export default ContentNav

