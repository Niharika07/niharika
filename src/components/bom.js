import React, { Component } from "react"
import Image from 'react-bootstrap/Image'
import bom from "../assets/Bombardier/bom.png";
import { Container, Row, Col } from 'react-bootstrap';
import "./healthcare.css"
import stats from "../assets/Bombardier/stats.png";
import activities from "../assets/Bombardier/activities.png";

class Healthcare extends Component {
  render() {
    return (
      <div className="Healthcare">
        <Image src={bom} fluid />
        <div className="projectPadding">
          <h2 className="Title" Style="font-size:48px;font-weight:700;margin-top:20px;">Bombardier</h2>
          <h2 className="Tags mb-4" Style="color:grey;">Aviation &middot; UX Design &middot; UX Research</h2>
          <span className="Intro" Style="background-color:#F2D785;font-size:24px;">Supporting aircraft engineers in monitoring aircraft’s real-time health and visualize historic information.</span>
          <Container className="Content" fluid>
            <Row>
              <Col>
                <h4> <strong> Roles and Responsibilties </strong></h4>
                <h6> <li>UX Research - Surveys, Interviews, Persona Creation, Empathy Map, Journey Mapping</li></h6>
                <h6> <li>UX Design - Sketches, Wireframing, Prototyping, Usability Testing</li></h6>
              </Col>
              <Col>
                <h4> <strong> Project Context </strong></h4>
                <h6> <li>May 2022 - Present</li></h6>
                <h6><li>Domain : Digital Innovations Office</li></h6>
              </Col>
              <Col>
                <h4><strong> Tools used </strong></h4>
                <h6><li>Figma</li></h6>
                <h6><li>Figjam</li></h6>
                <h6><li>Miro</li></h6>
              </Col>
            </Row>
          </Container>


          <div Style="margin-bottom:4rem;">
          <h5 className="projectTopic">About the project</h5>
          <p>Bombardier is a Canadian based business jet manufacturer with its <strong>focus on business aviation</strong>. Started out as a UX Design Intern, I've been working with a <strong>cross-functional team under the Digital Innovations Office</strong> at Bombardier consisting of a Product owner, Front-end developers, Back-end developers, a Business analyst and a UX expert. 
          </p>
          <p>While I can't disclose the details of my project due to the NDA, feel free to contact me to learn more.</p>
          </div>
          

          <div Style="margin-bottom:4rem;">
          <h5 className="projectTopic">Responsibilties</h5>
          <p> I worked <strong>end-to-end</strong> from problem discovery, ideation, iterative design to running feedback interviews in the form of usability testing and finally witnessing my designs come to life. </p>
          <p>My crowning moment was <strong>introducing user feedback in the iterative design process</strong> by sharing clickable prototype with the target users. </p>
          </div>

          <div Style="margin-bottom:4rem;">
          <h5 className="projectTopic">Ways of Working</h5>
          <p>Throughout my internship I was involved in various design activities that were either held weekly or bi-weekly. </p>
          <Image src={activities} Style="padding-top:1rem;padding-bottom:1rem;" fluid />
          </div>


          <div Style="margin-bottom:4rem;">
          <h5 className="projectTopic">Achievements</h5>
          <Image src={stats} Style="padding-top:1rem;padding-bottom:1rem;" fluid />
          </div>


          <div Style="margin-bottom:4rem;">
          <h5 className="projectTopic" Style="margin-bottom:2rem;">Lessons Learned</h5>
          <p> <h4><strong>Embrace ambiguity</strong></h4> We are grown up learning that every question or problem has a right answer and a wrong one. But as designers, it is difficult to derive one solution that fits all since there will always be variyng user needs, business requirements and many other moving factors that fosters ambiguity at every stage in the design process. Thus, through this internship, I learnt how to embrace these ambiguities. </p>
          <p> <h4><strong>Take feedbacks</strong></h4> Through the wise words of my senior designer, I realized early on that designers can get unconsciously attached to their design decisions and possess the inability to take constructive criticism. However, from the very beginning of my intenship, I actively practiced asking feedback from my fellow peers to ensure constant learning and growth.</p>
          <p Style="margin-bottom:3rem;"><h4><strong>Be curious, ask questions.</strong></h4> In order to constantly grow and transform into a skilled designer, it is very essential to ask questions, a lot of them, at every step of the design process.</p>

          </div>
          

        </div>

      </div>
    )
  }
}

export default Healthcare
