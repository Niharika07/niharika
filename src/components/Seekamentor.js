import React, { Component } from "react"
import Image from 'react-bootstrap/Image'
import mainSeekamentor from "../assets/Seekamentor/mainSeekamentor.png";
import { Container, Row, Col, Figure } from 'react-bootstrap';
import quant from "../assets/Seekamentor/quant.png";
import quant111 from "../assets/Seekamentor/quant111.png";
import mentees from "../assets/Seekamentor/Mentees.jpg"
import mentor from "../assets/Seekamentor/Mentor.jpg"
import mock from "../assets/Seekamentor/mock.mov"
import landing from "../assets/Seekamentor/landing.mov"
import browsingMentor from "../assets/Seekamentor/browsingMentor.mov"
import bookingMentor from "../assets/Seekamentor/bookingMentor.mov"
import quote from "../assets/Seekamentor/quote.png";
import "./seek.css"
import icon from "../assets/AMS/icon.png"

class Seekamentor extends Component {
  render() {
    return (
      <div className="Seekamentor">
        <Image src={mainSeekamentor} fluid />
        <div className="projectPadding">
          <h2 className="seekTitle" Style="font-size:48px;font-weight:700;margin-top:20px;">Seekamentor</h2>
          <h2 className="seekTags mb-4" Style="color:grey;">Education &middot; UX Design &middot; UX Research</h2>
          <span className="seekIntro" Style="background-color:#d1edf0;font-size:24px;">Helping students navigate their career by connecting them with field experts to provide them guidance and support.</span>
          <Container className="seekContent" fluid>
            <Row>
              <Col>
                <h5> <strong> Roles and Responsibilties </strong></h5>
                <h6> <li>UX Research - Surveys, Competitive Analysis, Interviews, Affinity Mapping</li></h6>
                <h6> <li>UX Design - Wireframing, Prototyping, Usability Testing</li></h6>
              </Col>
              <Col>
                <h5> <strong> Project Context </strong></h5>
                <h6> <li>Summer 2021</li></h6>
                <h6><li>Client - EdTech Startup</li></h6>
              </Col>
              <Col>
                <h5><strong> Tools used </strong></h5>
                <h6><li>Figma</li></h6>
                <h6><li>Miro</li></h6>
              </Col>
            </Row>
          </Container>
        </div>

        <div Style="background-color:#cae3e6;">
          <div className="projectPadding">
            <h5 className="seekTopic">Let's talk about Mentorship in India!</h5>
            <p>India is a country with a <strong>population of 1.38 billion</strong> and a <strong>literacy rate of 74.4%</strong>, however, only <strong>37% of students have access to mentorship</strong>.
              One major reason is that only the top tier colleges, which are ~1% of the total colleges in India, have access to quality mentorship from industry leaders and experts; leaving a majority of students to resort to platforms like LinkedIn, which are not even primarily focused on mentorship.</p>
            <p Style="color:#5A5A6C">The concept of mentorship is <strong>not new to India</strong> - from mythology to history, every major figure had a mentor to guide them down the path of excellence.</p>
            <h5 className="seekProblem mt-5">The Problem</h5>
            <div class="d-flex justify-content-center"><Image src={quote} rounded fluid Style="margin-bottom:8rem;margin-top:2rem;" /></div>
          </div></div>


        <div className="projectPadding">
          <h5 className="seekSolution">Solution</h5>
          <p>Introducing an easy and accessible web application for students to easily <strong>find, book and meet mentors</strong> to receive <strong>personalized guidance </strong>and support. </p>
          <video controls autoPlay loop muted class="d-flex justify-content-center">
            <source src={mock} type="video/mp4"></source>
          </video>
        </div>

        <div Style="background-color:#e6e8e8;">
          <div className="seekData" Style="padding-top:7rem;">
            <Container fluid>

              <h5>Tackling the problem</h5> <p>The ecosystem of mentorship primarily consists of mentors and mentees. We began our process with <strong>Secondary Research</strong> where we understood the <strong>context of the problem</strong> we were solving.</p>
              <p>This was followed by <strong>Primary Research </strong>phase where we conducted <strong>a survey and 30 semi-structured user interviews</strong>.</p>

              <Image src={quant} rounded fluid />


              <h5 Style="padding-top:3rem;">Research Synthesis</h5>
              <p> Our process was focused to <strong>understand the pain points and motivations</strong> faced by the mentors as well as the mentees to identify key insights. I <strong>conducted semi-structured interviews with 15 mentors and 15 mentees</strong> who were interested in the mentorship platform. Then I created an <strong>affinity map to cluster similar themes</strong> together and <strong>identify user needs</strong>.  </p>
              <h5 Style="padding-top:3rem;">Journey map of a Mentee</h5>
              <Image Style="padding-bottom:4rem; padding-top:1rem;" src={mentees} fluid />
              <h5 Style="padding-top:3rem;">Journey map of a Mentor</h5>
              <Image Style="padding-bottom:6rem; padding-top:1rem;" src={mentor} fluid />
              <h5 Style="padding-top:3rem;">Themes Observed</h5>
              <Image Style="padding-bottom:4rem; padding-top:4rem;" src={quant111} fluid />
            </Container>
          </div>
          <div className="projectPadding" Style="padding-bottom:5rem;">
            <h5 Style="padding-top:2rem;">Narrowing our scope</h5>
            <p><strong>Following agile principles</strong> of software development, we decided to narrow down our user goals that we wanted to <strong>focus for MVP1 which are-</strong> </p>
            <ul Style="font-size:18.5px;">
              <li>Understanding and fufilling mentee's expectations.</li>
              <li>Connecting with a mentor who has taken the same journey.</li>
              <li>Building prolonged relations.</li>
            </ul>
          </div>
        </div>


        <div Style="padding: 0 150px">
          <h5 className="seekScreens">Turning User Goals Into Design Ideas</h5>


          <Row Style="margin-bottom:8rem;">
            <Col xs={12} md={4} className="d-flex align-items-center">  <p><strong className="highlight">Show value and build trust on the platform </strong><br></br>
              <ul>
                <li>The landing page aims to make the <strong>services discoverable</strong> and focus the content around users and their needs. </li>
                <li>The first sight of the user would be of the mentors and their roles.</li>
                <li> To cater to their needs, sections 'Why should you choose us?' and 'What do we have in store for you?' focuses on what they will receive from the platform. </li>
                <li>Lastly, we have a dedicated section for recommendations from other mentees who have used the platform.
                </li>
              </ul></p></Col>
            <Col xs={12} md={8}>  <video controls autoPlay loop muted>
              <source src={landing} type="video/mp4"></source>
            </video></Col>
          </Row>

          <Row Style="margin-bottom:8rem;">
            <Col xs={12} md={8}>  <video controls autoPlay loop muted>
              <source src={browsingMentor} type="video/mp4"></source>
            </video></Col>

            <Col xs={12} md={4} className="d-flex align-items-center"> <p><strong className="highlight">Facilitate right mapping of mentors and mentees</strong><br></br>
              <ul>
                <li>This is the browsing mentors feature. </li>
                <li>Mentees will be able to scroll through multiple mentor cards and select the one that they like.</li>
                <li>The cards give a brief bio about the mentor as well as the services that the mentor offers. It also shows the ratings of the mentors. </li>
                <li>Lastly, clear CTAs are located to the right for mentees to either schedule a 1:1 call and then apply for the the mentorship program.
                </li>
              </ul>
            </p></Col>
          </Row>


          <Row Style="margin-bottom:8rem;">
            <Col xs={12} md={4} className="d-flex align-items-center">  <p><strong className="highlight">Understand and fulfill a mentee’s expectations.</strong><br></br>
              <ul>
                <li>To understand the goals of mentees while they are <strong>booking a Mentor</strong> .</li>
                <li>Here mentees select the <strong>services they need</strong> from a pool of options being provided by the mentor. </li>
                <li> Following which, they are directed to <strong>flexible scheduling</strong> of the meeting. </li>
                <li>Lastly, they <strong>state their goals and aspirations</strong> and book their mentor.
                </li>
              </ul></p></Col>
            <Col xs={12} md={8}>  <video controls autoPlay loop muted>
              <source src={bookingMentor} type="video/mp4"></source>
            </video></Col>
          </Row>
        </div>


        <div Style="background-color:#cae3e6;">
          <div className="projectPadding" Style="padding-bottom:5rem;">
            <h5 className="seekLearnings">Learnings and Takeaways</h5>
            <div class="d-md-flex justify-content-between">
              <Figure>
              <div Style="display: flex; align-items: center;">
                  <Figure.Image
                    width={80}
                    alt="171x180"
                    src={icon}
                  /> <h4>Measuring success</h4></div>
                <Figure.Caption>
                  <p className="iconText">Achieved our biggest goal which was securing a meeting with a mentor within 5 minutes of logging in.</p>

                </Figure.Caption>
              </Figure>
              <Figure>
                <div Style="display: flex; align-items: center;">
                  <Figure.Image
                    width={80}
                    alt="171x180"
                    src={icon}
                  /> <h4>A humbling opportunity</h4></div>
                <Figure.Caption>
                  <p className="iconText">Being an advocate of equity in education, designing for such a cause was a humbling opportunity for me.</p>

                </Figure.Caption>
              </Figure>
            </div>
          </div></div>

      </div>
    )
  }
}

export default Seekamentor
