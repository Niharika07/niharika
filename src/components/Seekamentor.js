import React, { Component } from "react"

import mainSeekamentor from "../assets/Seekamentor/mainSeekamentor.png";
import { Container, Row, Col } from 'react-bootstrap';

import "./project.css"

class Seekamentor extends Component {
  render() {
    return (
      <div className="Seekamentor">
      
        <div className="project">
          <h2 className="projectTitle" Style="font-size:48px;font-weight:700;margin-top:20px;">Seekamentor</h2>
          <h5 className="projectTags">EdTech &middot; UX Design &middot; UX Research</h5>
          <h5 className="projectIntro">Helping students navigate their career by connecting them with field experts who provide them guidance and support.</h5>
          <Container className="projectContent" fluid>
            <Row>
              <Col>
                <h5> <strong> Roles and Responsibilties </strong></h5>
                <h6> <li>UX Research - Surveys, Competitive Analysis, Interviews, Affinity Mapping</li></h6>
                <h6> <li>UX Design - Wireframing, Prototyping, Usability Testing</li></h6>
              </Col>
              <Col>
                <h5> <strong> Project Context </strong></h5>
                <h6> <li>Apr 2021 - Aug 2021</li></h6>
                <h6><li>Client - EdTech Startup</li></h6>
              </Col>
              <Col>
                <h5><strong> Tools used </strong></h5>
                <h6><li>Figma</li></h6>
                <h6><li>Miro</li></h6>
              </Col>
            </Row>
          </Container>
         
          <h5 className="projectTopic">Background</h5>
          <p>During Summer’2020 while I was working with my client on Frontend automation strategies, a team from Internet banking reached out to me for redesigning an application that allowed employees of the bank to manage the means of access which the customers have with the bank. We will refer Means of access as Access Tools.</p>
          <p>Access Tools are ways through which a person can access their bank account and could be divided into 3 main categories:
            1. Physical Device : a debit card, credit card
            2. Accessing via mobile : PIN 5(the 5 digit pin that you provide in a mobile banking app)
            3. Accessing via web : Userid and password
            The bank’s vision was to give control and autonomy to its customers for managing their means of access. </p>


          <h5 className="projectTopic">Solution</h5>



          <h5 className="projectTopic">Research</h5>
          <p>I first reached out to the product owner to understand the existing application and then conducted user interviews with existing users. Some of the questions I asked were:</p>
          <p>To further understand the problem space, I organised meetings with IT operations team to study the incidents they received from the existing application. These meetings turned out to be insightful since I discovered a common frustration in them - <b>bad user experience</b>. </p>

        </div>
      </div>
    )
  }
}

export default Seekamentor
