import React, { Component } from "react"
import Image from 'react-bootstrap/Image'
import engroup from "../assets/Engroup/engroup.png";
import { Container, Row, Col } from 'react-bootstrap';
import "./project.css"


class Healthcare extends Component {
  render() {
    return (
      <div className="Healthcare">
        <Image src={engroup} fluid />
        <div className="projectPadding">
          <h2 className="Title" Style="font-size:48px;font-weight:700;margin-top:20px;">Engroup</h2>
          <h2 className="Tags mb-4" Style="color:grey;">Community Service &middot; UX Design &middot; UX Research</h2>
          <span className="Intro" Style="background-color:#F2D785;font-size:24px;">Designing a community service mobile application to foster an inclusive experience for students who want to volunteer and help their local community.</span>
          <Container className="Content" fluid>
            <Row>
              <Col>
                <h4> <strong> Roles and Responsibilties </strong></h4>
                <h6> <li>UX Research - Surveys, Interviews, Persona Creation, Empathy Map, Journey Mapping</li></h6>
                <h6> <li>UX Design - Sketches, Wireframing, Prototyping, Usability Testing</li></h6>
              </Col>
              <Col>
                <h4> <strong> Project Context </strong></h4>
                <h6> <li>Fall 2021</li></h6>
                <h6><li>Collaboration with - Innovation Hub</li></h6>
                <h6><li>Team: Samantha, Eleen, Austin, Shalette and Jamal</li></h6>
              </Col>
              <Col>
                <h4><strong> Tools used </strong></h4>
                <h6><li>Figma</li></h6>
                <h6><li>Mural</li></h6>
                <h6><li>Notion</li></h6>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="project" Style="margin-bottom:4rem;">
          
        <h5 Style="padding-top:2rem;">IN PROGRESS</h5>
        </div>
      </div>
    )
  }
}

export default Healthcare
