import React, { Component } from "react"
import { Card, CardGroup } from 'react-bootstrap';
import ams from "../assets/ams1.png";
import bom from "../assets/bom.png";
import seekamentor from "../assets/seekamen.png";
import health from "../assets/health.png";
import engroup from "../assets/engroup.png";
import "./project.css"

class Home extends Component {
  render() {
    return (
      <div>
        <div className="Home">
          <h1 className="introtext">A curious <span Style="color:#ff3366"> Designer</span> and  <span Style="color:#ff3366"> Developer</span>.</h1>
          <h4 className="subtext">Focused on studying the subtle dynamics of human interactions and <strong className="highlightIntro">addressing complex task flows</strong>. Passionate about <strong className="highlightIntro">designing meaningful experiences</strong> that <strong className="highlightIntro">shape how we interact with technology</strong>.</h4>

          <h3 Style="border-bottom: 1px solid rgb(236, 232, 232);color:grey;font-weight:600;margin-top:3rem;padding-bottom:1rem;">My Work</h3>
          <CardGroup>
            <Card>
              <Card.Link href="/health"><Card.Img variant="top" src={health} /></Card.Link>
              <Card.Body>
                <Card.Title>UHealth+</Card.Title>
                <Card.Text>
                  <span Style="font-size:24px;color:grey;">Healthcare &middot; UX Design &middot; UX Research</span>
                </Card.Text>
                <Card.Text>
                  <span Style="font-size:20px;">How can international students receive the healthcare they need without feeling lost?</span><br />
                  Designing a mobile application for international students to find relevant information about their coverage without having to access multiple resources.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card>
              <Card.Link href="/bom"><Card.Img variant="top" src={bom} /></Card.Link>
              <Card.Body>
                <Card.Title>Bombardier</Card.Title>
                <Card.Text>
                  <span Style="font-size:24px;color:grey;">Aviation &middot; UX Design &middot; UX Research</span>
                </Card.Text>
                <Card.Text>
                  <span Style="font-size:20px;"> How might we reduce operational disruptions and make better decisions regarding real-time fleet health?</span><br />
                  Designed features to support users in monitoring aircraft’s real-time health and visualize historic information.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
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
              <Card.Link href="/engroup"><Card.Img variant="top" src={engroup} /></Card.Link>
              <Card.Body>
                <Card.Title>Engroup</Card.Title>
                <Card.Text>
                  <span Style="font-size:24px;color:grey;">Community Service &middot; UX Design &middot; Prototyping</span>
                </Card.Text>
                <Card.Text>
                  <span Style="font-size:20px;">How might we connect high school students with the community and make them feel involved?</span><br />
                  Designing a community service mobile application to foster an inclusive experience for students who want to volunteer and help their local community.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>


          <CardGroup>
            <Card>
              <Card.Link href="/seekamentor"><Card.Img variant="top" src={seekamentor} /></Card.Link>
              <Card.Body>
                <Card.Title>Seekamentor</Card.Title>
                <Card.Text>
                  <span Style="font-size:24px;color:grey;">Education &middot; UX Design &middot; UX Research</span>
                </Card.Text>
                <Card.Text>
                  <span Style="font-size:20px;"> How do we bring back the lost practices of mentorship?</span><br />
                  Helping students navigate their career by connecting them with field experts to provide them guidance and support.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </div>

       

      </div>

    )
  }
}

export default Home