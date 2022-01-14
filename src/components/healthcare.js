import React, { Component } from "react"
import Image from 'react-bootstrap/Image'
import health from "../assets/Healthcare/health.png";
import persona from "../assets/Healthcare/Persona.png";
import ideas from "../assets/Healthcare/ideas.png";
import problem from "../assets/Healthcare/problem.png";
import solution from "../assets/Healthcare/solution.png";
import p1 from "../assets/Healthcare/p1.png";
import p2 from "../assets/Healthcare/p2.png";
import p3 from "../assets/Healthcare/p3.png";
import features from "../assets/Healthcare/features.png";
import team2 from "../assets/Healthcare/team2.jpg";
import issues from "../assets/Healthcare/issues.png";
import results from "../assets/Healthcare/results.png";
import journey from "../assets/Healthcare/journey.png";
import next1 from "../assets/Healthcare/next1.png";
import goals from "../assets/Healthcare/goals.png";
import eval1 from "../assets/Healthcare/eval1.jpg";
import eval2 from "../assets/Healthcare/eval2.jpg";
import eval3 from "../assets/Healthcare/eval3.jpg";
import eval4 from "../assets/Healthcare/eval4.jpg";
import flow1 from "../assets/Healthcare/flow1.mov"
import flow2 from "../assets/Healthcare/flow2.mov"
import flow3 from "../assets/Healthcare/flow3.mov"
import flow4 from "../assets/Healthcare/flow4.mov"
import { Container, Row, Col } from 'react-bootstrap';
import "./healthcare.css"


class Healthcare extends Component {
  render() {
    return (
      <div className="Healthcare">
        <Image src={health} fluid />
        <div className="projectPadding">
          <h2 className="Title" Style="font-size:48px;font-weight:700;margin-top:20px;">UHealth+</h2>
          <h2 className="Tags mb-4" Style="color:grey;">Healthcare &middot; UX Design &middot; UX Research</h2>
          <span className="Intro" Style="background-color:#F2D785;font-size:24px;">Helping international students access healthcare services and understand health insurance plans without having to go through multiple resources.</span>
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

        <div Style="background-color:#e0d9c1;padding-bottom:3rem;margin-bottom:5rem;">
          <div className="projectPadding">
            <h5 className="quote"><i>“I didn’t know I was paying so much money for healthcare coverage I didn’t even know I had!”</i></h5>
            <p>Imagine being in a <strong>new country</strong>, being <strong>unfamiliar with the healthcare system</strong> and <strong>feeling lost</strong>.</p>
          </div>
        </div>

        <div className="projectPadding" Style="padding-bottom:5rem">
          <div className="problem">
            <Container fluid>
              <Row className="mb-1 d-flex justify-content-center">
                <Col xs={12} md={5}><h5>The Problem<Image src={problem} fluid width="35px;" Style="margin-left:10px;" /></h5> <p>The current state of accessing information regarding international students health insurance plans places the <strong>burden of finding accurate healthcare information on international students with little to no guidance</strong>. </p> </Col>
                <Col md={2}></Col>
                <Col xs={12} md={5}> <h5>The Solution<Image src={solution} fluid width="35px;" Style="margin-left:10px;" /></h5> <p>An app that allows international students <strong>access information about their health coverage plans without having to go through multiple resources</strong>.</p>
                </Col>
              </Row>
            </Container>
          </div>
        </div>

        <div Style="background-color:#87774d;padding-top:5rem;color:white;padding-bottom:5rem;">
          <div className="projectPadding">
            <h5>Understanding our Users</h5>
            <p> We thought it would be best to start out with some <strong>secondary research</strong> with a handful of websites that gave us the information we were looking for, such as <strong>UofT and insurance partner websites</strong>.</p>
            <p>Then, we lead our <strong>primary research</strong> in the form of <strong>34 online surveys and 10 semi-structured interviews </strong>with International students from University of Toronto tri-campus.  </p>
            <p>We created an affinity diagram and <strong>uncovered major issues given below:</strong> </p>
            <Image src={issues} width="900px;" fluid />
          </div></div>

        <div className="paddingQuotes">
          <p><i>It was clear through our research that International students are confused when navigating health coverage information.</i></p>
          <Container fluid>
            <Row className="mb-1 d-flex justify-content-center" Style="padding-bottom:4rem">
              <Col xs={12} md={6}><h5><i>"I’m confused between UHIP coverage and supplementary plan coverage"</i></h5> </Col>

              <Col xs={12} md={6}> <h5><i>"I was misinformed about coverage and I ended up paying the amount out of pocket"</i></h5> </Col>
            </Row>
            <Row className="mb-1 d-flex justify-content-center" Style="padding-bottom:2rem">
              <Col xs={12} md={6}><h5><i>“I spent a couple of hours calling Sunlife and Green Shield and most of the time, they sound as confused as I am.”</i></h5> </Col>

              <Col xs={12} md={6}> <h5><i>"I can’t find detailed information regarding coverage"</i></h5> </Col>
            </Row>
          </Container>
        </div>


        <div className="projectPadding" Style="background-color:#e0d9c1;padding-top:6rem;padding-bottom:8rem;">
          <h5>Meet Issa Inamorata (she/her), the international student</h5>
          <p>Through Issa, we were able to better understand the common motivations, frustrations and behaviours of our target user group and represent them.</p>
          <Container Style="display: flex;justify-content: center;padding-top:2rem;">
            <Row>
              <Col><Image src={persona} fluid /></Col>
            </Row>
          </Container>
        </div>

        <div className="projectPadding" Style="padding-top:5rem;">
          <p>To further <strong>identify the major struggles</strong> of Issa while seeking healthcare service, we had to <strong>put ourselves in her shoes</strong>.</p>
       
        <Container Style="display:flex;justify-content: center;">
          <Row>
            <Col><Image src={journey} fluid /></Col>
          </Row>
        </Container>
        </div>
        <div className="projectPadding" Style="padding-top:3rem;padding-bottom:3rem;">
          <p>Our team identified the major issues that students face while seeking healthcare service to be <strong>scattered information, information overload and clinic selection</strong>.</p>
        </div>



        <div Style="background-color:#f0eeed;padding-top:1rem;color:white;padding-bottom:5rem;">
        <div className="projectPadding" Style="padding-top:4rem;">
        <Container Style="display: flex;justify-content: center;">
          <Row>
            <Col><Image src={goals} fluid /></Col>
          </Row>
        </Container>     
       </div>
       </div>

        <div className="projectPadding" Style="padding-top:4rem;padding-bottom:5rem;">
          <h5>Ideation</h5> <p>Now, with our design goals in mind, we began <strong>envisioning potential solutions to help them get the care they need</strong> by sketching ideas and clustering them together. We voted and prioritized the ideas based on impact and feasibility. </p>

          <Container Style="display: flex;justify-content: center;padding-bottom:5rem;">
            <Row>
              <Col><Image src={ideas} fluid /></Col>
            </Row>
          </Container>


          <p>We decided to go with <strong>2 homerun ideas</strong> - <i>'Find a Clinic'</i> and <i>'Personalized Dashboard'</i> that scored a high impact and high feasibility along with <strong>1 quick win idea</strong> - <i>'Search your Coverage'</i> with moderate impact and moderate feasibility.</p>
          <Image src={features} fluid Style="padding-top:1rem;" />
        </div>
        <div Style="background-color:#f0eeed;padding-top:5rem;padding-bottom:2rem;">
          <div className="projectPadding" >
            <h5>Iterative Design</h5> <p>From there, we started ideating our lo-fi prototypes and went through <strong>multiple iterations</strong>. We decided to design a mobile app due to it being more <strong>accessible on the go</strong>. We focused on 3 main task flows:</p>

            <Row Style="margin-bottom:5rem;">
            <h4><strong className="highlight">Login, Search, Filter</strong></h4>
            <p> <ul>
              <li>Integrated university ID while login to <strong>build trust in the application</strong> and eliminate the registration process. </li>
              <li> Designed search and filter functions to <strong>find a nearby clinic that bills insurance partners</strong>.</li>
            </ul></p>
            <Image src={p1} fluid />
          </Row>

          <Row Style="margin-bottom:5rem;">
            <h4><strong className="highlight">View and Bookmark a Clinic</strong></h4>
            <p> <ul>
              <li> The bookmark feature would ensure that the users only have to <strong>go through the process once</strong>.  </li>
            </ul></p>
            <Image src={p2} fluid />
          </Row>

          <Row Style="margin-bottom:6rem;">
            <h4><strong className="highlight">Access Coverage Card and Service Details</strong></h4>
            <p> <ul>
              <li>Lastly, by providing users with their insurance card details, and services covered, we would provide them with <strong> their personalized information in one place</strong>. </li>
              <li>Added a section to view nearby clinics.</li>
            </ul></p>
            <Image src={p3} fluid />
          </Row>

          </div></div> 
        <div className="projectPadding" Style="padding-top:3rem;">
        <p>We then conducted lean evaluation with 7 international students to evaluate our designs and discovered the below issues:</p>
        <Row Style="margin-bottom:4rem;">
            <Col xs={12} md={6} className="d-flex align-items-center">  <p><h5><strong className="highlight">Issue #1</strong></h5>
            <Image src={eval1} fluid />
           </p></Col>
      
            <Col xs={12} md={6}>  <p><h5><strong className="highlight">Issue #2</strong></h5>
            <Image src={eval2} fluid /></p>
            </Col>
          </Row>
          <Row Style="margin-bottom:4rem;">
            <Col xs={12} md={6} className="d-flex align-items-center">  <p><h5><strong className="highlight">Issue #3</strong></h5>
            <Image src={eval3} fluid />
           </p></Col>
      
            <Col xs={12} md={6}>  <p><h5><strong className="highlight">Issue #4</strong></h5>
            <Image src={eval4} fluid /></p>
            </Col>
          </Row>
        </div>

        <div className="projectPadding" Style="padding-top:3rem;">
        <h5>Prototype</h5> <p>After receiving valuable feedbacks from our users, we incorporated all the changes and created a medium-fidelity clickable prototype.</p>
        <Row Style="margin-bottom:4rem;">
            <Col xs={12} md={4} className="d-flex align-items-center">  <p><strong className="highlight">Login and Find a Clinic</strong>
            <video controls autoPlay loop muted class="d-flex justify-content-center">
            <source src={flow1} type="video/mp4"></source>
          </video>
           </p></Col>
      <Col md={4}></Col>
      <Col xs={12} md={4} className="d-flex align-items-center">  <p><strong className="highlight">Filter Clinics</strong>
            <video controls autoPlay loop muted class="d-flex justify-content-center">
            <source src={flow2} type="video/mp4"></source>
          </video>
           </p></Col>
          </Row>
          <Row Style="margin-bottom:4rem;">
            <Col xs={12} md={4} className="d-flex align-items-center">  <p><strong className="highlight">Bookmark a Clinic</strong>
            <video controls autoPlay loop muted class="d-flex justify-content-center">
            <source src={flow3} type="video/mp4"></source>
          </video>
           </p></Col>
           <Col md={4}></Col>
            <Col xs={12} md={4}>  <p><strong className="highlight">View Profile and Services</strong>
            <video controls autoPlay loop muted class="d-flex justify-content-center">
            <source src={flow4} type="video/mp4"></source>
          </video></p>
            </Col>
          </Row>
        </div>




        <div Style="background-color:#f2f7f2;padding-top:5rem;padding-bottom:5rem;">
          <div className="projectPadding" >
            <h5>Evaluation</h5> <p>To evaluate the prototype, we conducted <strong>Usability testing remotely with 16 international students</strong> in presence of 1 moderator and 1 notetaker. We used <strong>System Usability Scale (SUS) to measure Satisfaction</strong> and <strong>NASA Task load Index (NASA TLX) to measure Cognitive Load</strong>. </p>
            <p>Here’s a brief overview of the process:</p>
            <ul>
              <li>Participants were given a brief about the project and asked to think-aloud.</li>
              <li>They were given 3 scenarios and tasks for each scenario.</li>
              <li>After completion of each scenario, we asked them to fill 2 surveys.</li>
              <li>At the end, we interviewed them to understand what went well and what didn’t.</li>
            </ul>
            <p>Overall the participants felt <strong>confident using the app</strong> and we received the following insights:</p>
            <Image src={results} fluid />
          </div>
        </div>
        <div className="projectPadding" Style="margin-top:6rem;">
          <h5>Next Steps</h5> <p > In our next steps, we would first explore adding <strong>additional personas</strong> such as:</p>
          <Image src={next1} fluid />
        
        </div>

        <div className="projectPadding" Style="margin-top:6rem;">
          <h5>Reflections</h5>
          <Image src={team2} fluid Style="margin-bottom:3rem;" />



          <p> <h4><strong>Squad Goals</strong></h4> As we were getting started with this course, I remember our professor mentioning how some students find groups they stick with for the entire program, I was fortunate enough to be a part of one such group. </p>
          <p> <h4><strong>Design is an Iterative process</strong></h4>It was my first experience working end-to-end on a design process where I learnt the importance of continuous iteration and feedback. </p>
          <p Style="margin-bottom:3rem;"><h4><strong>Creating an Impact</strong></h4> This project started when 6 international students tried to maximise their insurance and were lost in the process. Working on this project was extremely meaningful since we were tackling a real-world challenge that existed widely.</p>

        </div>

      </div>
    )
  }
}

export default Healthcare
