import React, { Component } from "react"
import { Navbar, Container, Nav } from 'react-bootstrap';


class Header extends Component {
  render() {
    return (
      <div className="Header">
        <Navbar className="navbar">
          <Container fluid>
            <Navbar.Brand><h3 Style="font-weight:600"><a href="/" Style="text-decoration:none;"><span Style="color:#ff3366;">Niharika </span><span Style="color:#212529;">Sharma</span></a></h3></Navbar.Brand>
            <Nav className="ml-auto">
              <Nav.Link href="/">Work</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="https://drive.google.com/file/d/1OaLClqBKUITJ2cFPqb9IcU8QqnazCp6a/view?usp=share_link" target="_blank" rel="noopener noreferrer">Resume</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    )
  }
}

export default Header
