import React, { Component } from "react"
import { Card, CardGroup } from 'react-bootstrap';
import one from "../assets/one.png";
import two from "../assets/two.png";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h1 className="introtext">An emerging <span Style="color:#ff3366"> Product Designer</span> and experienced <span Style="color:#ff3366">Frontend Developer</span>.</h1>
        <h4 className="subtext">Previously helped build user-centred experiences for FinTech and EdTech applications.</h4>
       
        <h3 Style="border-bottom: 1px solid rgb(236, 232, 232);color:grey;font-weight:600;margin-top:3rem;padding-bottom:1rem;">My Work</h3>
        <CardGroup>
          <Card>
            <Card.Link href="/ams"><Card.Img variant="top" src={one} /></Card.Link>
            <Card.Body>
              <Card.Title>Access Management System</Card.Title>
              <Card.Text>
                <span Style="font-size:24px;color:grey;">FinTech &middot; UX Design &middot; Frontend development</span>
              </Card.Text>
              <Card.Text>
                <span Style="font-size:20px;">How to manage means of access a person has with the bank?</span><br />
                Redesigning an application feature for an undisclosed European banking client with their Internet banking team to help over 1 million customers of the bank manage their means of access.
              </Card.Text>
            </Card.Body>

          </Card>

          <Card>
            <Card.Link href="/seekamentor"><Card.Img variant="top" src={two} /></Card.Link>
            <Card.Body>
              <Card.Title>Seekamentor</Card.Title>
              <Card.Text>
                <span Style="font-size:24px;color:grey;">EdTech &middot; UX Research &middot; UX Design</span>
              </Card.Text>
              <Card.Text>
                <span Style="font-size:20px;"> How might we create an accessible platform for mentorship?</span><br />
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This card has even longer content than the first to
                show that equal height action.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    )
  }
}

export default Home