import React, { Component } from "react"
import Image from 'react-bootstrap/Image'
import engroup from "../assets/Engroup/engroup.png";
import insights from "../assets/Engroup/insights.png";
import problem from "../assets/Engroup/problem.png";
import persona from "../assets/Engroup/persona.png";
import empathy from "../assets/Engroup/empathy.png";
import ideation from "../assets/Engroup/ideation.png";
import one from "../assets/Engroup/one.png";
import two from "../assets/Engroup/two.png";
import three from "../assets/Engroup/three.png";
import four from "../assets/Engroup/four.png";
import { Container, Row, Col, Carousel } from 'react-bootstrap';
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

          <h5 className="projectTopic">Meet Harry (he/him), the high school student</h5>
          <p>Through Harry, we were able to better understand the common motivations, frustrations and behaviours of our target user group and represent them.</p>


          <Carousel variant="dark" Style="padding-top:1rem;padding-bottom:3rem;">
            <Carousel.Item>
              <img
                alt="persona"
                className="d-block w-100"
                src={persona}
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                alt="empathy map"
                className="d-block w-100"
                src={empathy}
              />

              <Carousel.Caption>
                <h3>Empathy Map</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <h5 className="projectTopic">Ideation</h5> <p>Now, we began <strong>envisioning potential solutions to help Harry get the support he needs while volunteering.</strong> We began sketching ideas and clustering them together. We voted and prioritized the ideas based on impact and feasibility. </p>
          <Container Style="display: flex;justify-content: center;padding-bottom:5rem;">
            <Row>
              <Col><Image src={ideation} fluid /></Col>
            </Row>
          </Container>
          <h5 className="projectTopic">Iterative Design</h5> <p>We used Crazy 8's techinique to get higher level design ideas out quickly without worrying much about the design patterns. Then we refined our sketches in Adobe XD.</p>
          <Row Style="margin-bottom:5rem;">
            <h4><strong>Onboarding</strong></h4>
            <p> <ul>
            <li>Implemented sign-up flow with single-sign-on options as well.</li>
              <li>Designed onboarding form to gather user's interests and provide custom recommendations of centres.</li>
            </ul></p>
            <Image src={one} fluid />
          </Row>
          <Row Style="margin-bottom:5rem;">
            <h4><strong>Search and Filter centres</strong></h4>
            <p> <ul>
              <li>Provided a map view and a list of centres along with a search bar.</li>
              <li>Added a feature to search and filter centres based on distance, type and activities.</li>
            </ul></p>
            <Image src={two} fluid />
          </Row>
          <Row Style="margin-bottom:5rem;">
            <h4><strong>Request to Volunteer</strong></h4>
            <p> <ul>
            <li>Designed a feature to help students register to volunteer at the centre of their choice.</li>
              <li>Integrated the functionality to get parental approval in the registration process.</li>
            </ul></p>
            <Image src={three} fluid />
          </Row>
          <Row Style="margin-bottom:5rem;">
            <h4><strong>Invite friends</strong></h4>
            <p> <ul>
              <li>Implemented a feature for the students to invite their friends to volunteer.</li>
            </ul></p>
            <Image src={four} fluid />
          </Row>

          <h5 className="projectTopic">Next Steps</h5> <p>We connected with a mentor from Adobe, Guo Chong, who gave us valuable feedbacks on our designs. Based on the feedback we are considering the following steps to take in future:</p>
          <p> <h4><strong>1. Usability testing</strong></h4> We intend to test our designs on our target user groups in order to validate our ideas and further iterate on our designs. </p>
          <p> <h4><strong>2. Unhappy flows</strong></h4>Due to the time crunch, we were only able to consider the happy flows. But with more time, we need to integrate all possible alternate routes that the user takes and implement error handling.</p>

          <h5 className="projectTopic">Learnings</h5>
          <p> <h4><strong>1. Accessibility</strong></h4>Being a person who is extremely passionate about community learning, this project gave me an opportunity to learn about the challenges students face in accessing the experience </p>
          <p> <h4><strong>2. Coming up with a plan</strong></h4>As we were given a strict timeline of 2 weeks, Shalette and I set our goals and deadlines at the very beginning. We met reguarly to brainstorm ideas and collaboratively work despite the crazy schedules we had. </p>
        </div>
      </div>
    )
  }
}

export default Healthcare
