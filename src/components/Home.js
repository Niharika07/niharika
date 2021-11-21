import React, { Component } from "react"
import { Card, CardGroup } from 'react-bootstrap';
import ams from "../assets/ams1.png";
import seekamentor from "../assets/seekamen.png";
import health from "../assets/health.png";
import "./project.css"

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h1 className="introtext">An emerging <span Style="color:#ff3366"> UX Designer</span> and experienced <span Style="color:#ff3366">Frontend Developer</span>.</h1>
        <h4 className="subtext">Focused on studying the subtle dynamics of human interactions and <strong className="highlightIntro">addressing complex task flows</strong>. Passionate about <strong className="highlightIntro">designing meaningful experiences</strong> that <strong className="highlightIntro">shape how we interact with technology</strong>.</h4>
       
        <h3 Style="border-bottom: 1px solid rgb(236, 232, 232);color:grey;font-weight:600;margin-top:3rem;padding-bottom:1rem;">My Work</h3>
        <CardGroup>
        <Card>
            <Card.Link href="/ams"><Card.Img variant="top" src={ams} /></Card.Link>
            <Card.Body>
              <Card.Title>Access Management System</Card.Title>
              <Card.Text>
                <span Style="font-size:24px;color:grey;">Banking &middot; UX Design &middot; Frontend development</span>
              </Card.Text>
              <Card.Text>
                <span Style="font-size:20px;">How to manage means of access a person has with the bank?</span><br />
                Redesigning an application feature for an undisclosed European banking client with their Internet banking team to help the customers of the bank manage their means of access.
              </Card.Text>
            </Card.Body>

          </Card>

          <Card>
            <Card.Link href="/seekamentor"><Card.Img variant="top" src={seekamentor} /></Card.Link>
            <Card.Body>
              <Card.Title>Seekamentor</Card.Title>
              <Card.Text>
                <span Style="font-size:24px;color:grey;">Education &middot; UX Design &middot; UX Research</span>
              </Card.Text>
              <Card.Text>
                <span Style="font-size:20px;"> How do we bring back the lost practices of mentorship?</span><br />
                Helping students navigate their career by connecting them with field experts who provide them guidance and support.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
        <Card>
            <Card.Link><Card.Img variant="top" src={health} /></Card.Link>
            <Card.Body>
              <Card.Title>Quicker Fixer Upper (In progress)</Card.Title>
              <Card.Text>
                <span Style="font-size:24px;color:grey;">Healthcare &middot; UX Design &middot; UX Research</span>
              </Card.Text>
              <Card.Text>
                <span Style="font-size:20px;">How to make information around healthcare plans accessible to international students?</span><br />
                Designing a mobile application for international students to find relevant information regarding their coverage without having to access multiple resources.
              </Card.Text>
            </Card.Body>

          </Card>
        
      </div>
    )
  }
}

export default Home