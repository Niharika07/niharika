import React, { Component } from "react"
import Image from 'react-bootstrap/Image'
import health from "../assets/Healthcare/health.png";
import persona from "../assets/Healthcare/Persona.png";
import ideas from "../assets/Healthcare/ideas.png";
import iteration1 from "../assets/Healthcare/iteration1.png";
import iteration2 from "../assets/Healthcare/iteration2.png";
import problem from "../assets/Healthcare/problem.png";
import solution from "../assets/Healthcare/solution.png";
import alt1 from "../assets/Healthcare/alt1.png";
import alt2 from "../assets/Healthcare/alt2.png";
import p1 from "../assets/Healthcare/p11.png";
import p2 from "../assets/Healthcare/p22.png";
import p3 from "../assets/Healthcare/p33.png";
import features from "../assets/Healthcare/features.png";
import team2 from "../assets/Healthcare/team2.jpg";
import issues from "../assets/Healthcare/issues.png";
import results from "../assets/Healthcare/results.png";
import journey from "../assets/Healthcare/journey.png";
import next1 from "../assets/Healthcare/next1.png";
import next2 from "../assets/Healthcare/next2.png";

import { Container, Row, Col } from 'react-bootstrap';
import "./healthcare.css"


class Healthcare extends Component {
  render() {
    return (
      <div className="Healthcare">
        <Image src={health} fluid />
        <div className="projectPadding">
          <h2 className="Title" Style="font-size:48px;font-weight:700;margin-top:20px;">Quicker Fixer Upper</h2>
          <h2 className="Tags mb-4" Style="color:grey;">Healthcare &middot; UX Design &middot; UX Research</h2>
          <span className="Intro" Style="background-color:#F2D785;font-size:24px;">Helping international students find information regarding their healthcare insurance plans without them having to access multiple resources.</span>
          <Container className="Content" fluid>
            <Row>
              <Col>
                <h5> <strong> Roles and Responsibilties </strong></h5>
                <h6> <li>UX Research - Surveys, Competitive Analysis, Interviews, Affinity Mapping</li></h6>
                <h6> <li>UX Design - Wireframing, Prototyping, Usability Testing</li></h6>
              </Col>
              <Col>
                <h5> <strong> Project Context </strong></h5>
                <h6> <li>Fall 2021</li></h6>
                <h6><li>Collaboration with - Innovation Hub</li></h6>
              </Col>
              <Col>
                <h5><strong> Tools used </strong></h5>
                <h6><li>Figma</li></h6>
                <h6><li>Miro</li></h6>
              </Col>
            </Row>
          </Container>
        </div>

        <div Style="background-color:#e0d9c1;padding-bottom:3rem;margin-bottom:5rem;">
          <div className="projectPadding">
            <h5 className="quote"><i>“I didn’t know I was paying so much money for healthcare coverage I didn’t even know I had!”</i></h5>
            <p>Imagine being in a <strong>new country</strong>, being <strong>unfamiliar with the healthcare system</strong> and experiencing this.</p>
          </div></div>

        <div className="projectPadding">
          <div className="problem">
            <Container fluid>
              <Row className="mb-1 d-flex justify-content-center" Style="padding-bottom:2rem">
                <Col xs={12} md={5}><h5>The Problem<Image src={problem} fluid width="35px;" Style="margin-left:10px;"/></h5> <p>The current state of accessing information regarding international students health insurance plans places the <strong>burden of finding accurate healthcare information on international students with little to no guidance</strong>. </p> </Col>
                <Col md={2}></Col>
                <Col xs={12} md={5}> <h5>The Solution<Image src={solution} fluid width="35px;" Style="margin-left:10px;"/></h5> <p>An app that allows international students <strong>access information about their health coverage plans without having to go through multiple resources</strong>.</p>
                </Col>
              </Row>
            </Container>
   
          </div>
        </div>

        <div Style="background-color:#87774d;padding-top:4rem;color:white;padding-bottom:4rem;">
          <div className="projectPadding">
            <h5>Understanding our Users</h5>
            <p> We thought it would be best to start out with some <strong>secondary research</strong> with a handful of websites that gave us the information we were looking for, such as <strong>UofT and insurance partner websites</strong>.</p>
            <p>Then, we lead our <strong>primary research</strong> in the form of <strong>34 online surveys and 10 semi-structured interviews </strong>with International students from University of Toronto tri-campus.  </p>
            <p>We created an affinity diagram and <strong>uncovered major issues given below:</strong> </p>
            <Image src={issues} width="900px;" fluid />
          </div></div>

        <div Style="padding:50px 100px;">
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
        <p>Through Issa, we were able to better understand the common motivations, frustrations and behaviours of our target user group.</p>
        <Container Style="display: flex;justify-content: center;padding-top:2rem;">
            <Row>
              <Col><Image src={persona} fluid /></Col>
            </Row>
          </Container>

        
          </div>
          <Container Style="display: flex;justify-content: center;padding-top:2rem;">
            <Row>
              <Col><Image src={journey} fluid /></Col>
            </Row>
          </Container>
          <div className="projectPadding" Style="padding-top:6rem;padding-bottom:4rem;">
          <h5>Ideation</h5> <p>Based on our persona's journey and pain points, we envisioned potential solutions by sketching ideas and clustering them together. We voted and prioritized the ideas based on impact and feasibility. </p>
          
          <Container Style="display: flex;justify-content: center;padding-bottom:6rem;">
            <Row>
              <Col><Image src={ideas} fluid /></Col>
            </Row>
          </Container>
            
          
          <p>We decided to go with 2 homerun ideas - <i>'Find a Clinic'</i> and <i>'Personalized Dashboard'</i> that scored a high impact and high feasibility along with 1 quick win idea - <i>'Search your Coverage'</i> with moderate impact and moderate feasibility.</p>
          <Image src={features} fluid />
          </div>
          <div Style="background-color:#f2f7f2;padding-top:6rem;padding-bottom:2rem;">
          <div className="projectPadding" >
          <h5>Prototyping</h5> <p>From there, we started ideating our lo-fi prototypes and went through multiple iterations. We decided to design a mobile app due to it being more accessible on the go.</p>
         
          <Row Style="margin-bottom:4rem;">
            <Col xs={12} md={6}><Image src={iteration1} fluid /></Col>
            <Col xs={12} md={6}> <Image src={iteration2} fluid /></Col>
          </Row>
          
          <p>With our design goals to guide us, we decided to narrow our focus. Below are the other alternatives we had:</p>
          <Row Style="margin-bottom:4rem;">
            <Col xs={12} md={6}> <h4><strong className="highlight">Alternative #1</strong></h4><Image src={alt1} fluid /><p><strong>Issue:</strong> Focus is on accessing information, not navigation</p></Col>
            <Col xs={12} md={6}> <h4><strong className="highlight">Alternative #2</strong></h4><Image src={alt2} fluid /><p><strong>Issue:</strong> Potential to cause information overload</p></Col>
          </Row>
          </div></div>
          <div className="projectPadding" Style="padding-top:5rem;">
          <h5>Turning User Goals Into Actionable Designs</h5>
          <p Style="margin-bottom:2rem;" >After multiple iterations, & conducting lean evaluation, we created our mid-fi prototype. Here’s a high-level overview of the screens. Let’s dive deeper into the features.</p>
          <Row Style="margin-bottom:5rem;">
            <h4><strong className="highlight">Login, Search, Filter</strong></h4>
            <p> <ul>
                <li>Integrating university ID while logging in would <strong>build trust in the application</strong> and eliminate the registration process. </li>
                <li> With the search and filter functions, we resolved one of the biggest pain points - to <strong>find a nearby clinic that bills insurance partners</strong>.</li>
              </ul></p>
           <Image src={p1} fluid /> 
          </Row>

          <Row Style="margin-bottom:5rem;">
              <h4><strong className="highlight">View & Bookmark a Clinic</strong></h4>
            <p> <ul>
                <li> The bookmark feature would ensure that the users only have to go through the process once.  </li>
              </ul></p>
             <Image src={p2} fluid /> 
          </Row>

          <Row Style="margin-bottom:6rem;">
          <h4><strong className="highlight">Access Coverage Card & Service Details</strong></h4>
            <p> <ul>
                <li>Lastly, by providing users with their insurance card details, and services covered, we would provide them with all necessary information in one place. </li>
              </ul></p>
           <Image src={p3} fluid /> 
          </Row>
          </div>
        
          <div className="projectPadding">        
          <h5>Evaluation</h5> <p>To evaluate the prototype, we conducted Usability testing remotely with 6 international students in presence of 1 moderator and 1 notetaker. We used System Usability Scale (SUS) to measure Satisfaction and NASA Task load Index (NASA TLX) to measure Cognitive Load. </p>
         <p>Here’s a brief overview of the process:</p>
         <ul>
           <li>Participants were given a brief about the project and asked to think-aloud.</li>
           <li>They were given 3 scenarios and tasks for each scenario.</li>
           <li>After completion of each scenario, we asked them to fill 2 surveys.</li>
           <li>At the end, we interviewed them to understand what went well and what didn’t.</li>
         </ul>
         <p>We received the below insights:</p>
    <Image src={results} fluid /> 
        </div>

        <div className="projectPadding" Style="margin-top:6rem;">        
          <h5>Next Steps</h5> <p > In our next steps, we would first explore adding <strong>additional personas</strong> such as:</p>
          <Image src={next1} fluid />
          <p Style="margin-top:2rem;"> Secondly, we would conduct more iterations and <strong>add the below features</strong> based on the feedback we received from our latest evaluation:</p>
          <Image src={next2} fluid /> 
        </div>

        <div className="projectPadding" Style="margin-top:6rem;">        
          <h5>Reflections</h5> 
          <Image src={team2} fluid Style="margin-bottom:3rem;"/>
          <p>
            <ul>
              <li>This project started when 6 international students tried to maximise their insurance and were lost in the process. Working on this project was extremely meaningful since we were tackling a real-world challenge that existed widely. </li>
              <li>It was my first experience working end-to-end on a design process where I learnt the importance of continuous iteration and feedback. </li>
              <li> I remember our professor, Olivier mentioned in the beginning of the class how some students find groups they stick with for the entire program, I was fortunate enough to be a part of one such group.</li>
              </ul></p>
    </div>
      
      </div>
    )
  }
}

export default Healthcare
