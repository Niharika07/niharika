import React, { Component } from "react"
import Image from 'react-bootstrap/Image'
import engroup from "../assets/Engroup/engroup.png";
import insights from "../assets/Engroup/insights.png";
import problem from "../assets/Engroup/problem.png";
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
          <span className="Intro" Style="background-color:#ffbdb8;font-size:24px;">Designing a community service mobile application to foster an inclusive experience for students who want to volunteer and help their local community.</span>
          <Container className="Content" fluid>
            <Row>
              <Col>
                <h4> <strong> Roles and Responsibilties </strong></h4>
                <h6> <li>UX Research - Literature Review, Persona Creation, Empathy Map</li></h6>
                <h6> <li>UX Design - Sketches, Wireframing, Prototyping, Usability Testing</li></h6>
              </Col>
              <Col>
                <h4> <strong> Project Context </strong></h4>
                <h6> <li>20 Oct 2021 - 10 Nov 2021</li></h6>
                <h6><li>Client - Amazon and Adobe</li></h6>
                <h6><li>Team: Shalette and Niharika</li></h6>
              </Col>
              <Col>
                <h4><strong> Tools used </strong></h4>
                <h6><li>Adobe XD</li></h6>
                <h6><li>Mural</li></h6>
                <h6><li>Notion</li></h6>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="project" Style="margin-bottom:4rem;">
          <h5 className="projectTopic">Background</h5>
          <p>Shalette and I participated in Adobe’s Creative Jam event where  participants work on design challenges and present the solutions to industry experts. Amazon challenged us to design an inclusive experience for high school students looking for opportunities to volunteer and help their local community in a span of 3 weeks.
          </p>

          <h5 className="projectTopic">Research</h5>
           <p>Since we were on a time crunch of 2 weeks to complete the project, we started out with secondary research by reading every possible article and publication related to the topic. We created an affinity diagram and discovered that students face a lot of struggles when volunteering.</p>
          <p>We observed the following insights through our research:
          </p>
          <Image src={insights} Style="padding-top:1rem;padding-bottom:3rem;" fluid />
          <h5 className="projectTopic">Problem</h5>
          <p>These pain-points and frustrations helped us define the problem statement: </p>
          <Image src={problem} Style="padding-top:1rem;padding-bottom:3rem;" fluid />

        </div>
      </div>
    )
  }
}

export default Healthcare
