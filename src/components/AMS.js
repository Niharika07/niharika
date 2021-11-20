import React, { Component } from "react"
import Image from 'react-bootstrap/Image'
import mainAMS from "../assets/AMS/mainAMS.png";
import access from "../assets/AMS/accessTools.png";
import quote from "../assets/AMS/quote.png";
import landing from "../assets/AMS/landing.jpg";
import searchAccounts from "../assets/AMS/searchAccounts.jpg";
import details from "../assets/AMS/details.jpg";
import team from "../assets/AMS/team.png"
import outcome from "../assets/AMS/outcome.png"
import teamTwo from "../assets/AMS/teamTwo.jpg";
import icon from "../assets/AMS/icon.png"
import { Container, Row, Col, Figure } from 'react-bootstrap';
import "./project.css"
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import mock from "../assets/AMS/mock.mov"

const images = [
  require('../assets/AMS/team.png'),
  require('../assets/AMS/teamTwo.jpg'),
];

class AMS extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 1,
      isOpen: false
    };
  }
  render() {
    const { photoIndex, isOpen } = this.state;
    return (
      <div className="AMS">
        <Image src={mainAMS} fluid />
        <div className="project" Style="margin-bottom:4rem;">
          <h2 className="projectTitle" Style="font-size:48px;font-weight:700;margin-top:20px;">Access Management System</h2>
          <h2 className="projectTags" Style="color:grey;">Banking &middot; UX Design &middot; Frontend development</h2>
          <span className="projectIntro" Style="background-color:#b8e2ff;font-size:24px;">Redesigning an application feature for an undisclosed European banking client with their Internet banking team to manage the Means of Access that the customers have with the bank.</span>
          <Container className="projectContent" fluid>
            <Row>
              <Col>
                <h5> <strong> Roles and Responsibilties </strong></h5>
                <h6> <li>User Research - Redesigning Information Architecture</li></h6>
                <h6> <li>User Interface Design</li></h6>
                <h6> <li>Frontend Development</li></h6>
              </Col>
              <Col>
                <h5> <strong> Project Context </strong></h5>
                <h6> <li>Mar 2020 - June 2021</li></h6>
                <h6><li>Domain - Identity and Access Management</li></h6>
              </Col>
              <Col>
                <h5><strong> Tools used </strong></h5>
                <h6><li>Figma</li></h6>
                <h6><li>Vue</li></h6>
                <h6><li>Azure DevOps</li></h6>
              </Col>
            </Row>
          </Container>
          <p>For the safety and privacy of the application, it will be referred to as Access Management System. I worked with a team of 2 Backend developers, a Business Analyst, a Scrum Master and a Product owner.</p>


          <h5 className="projectTopic">Background</h5>
          <p>During Summer’2020 I was developing the Front-end as part of modernizing a legacy application, called Access Management System for my client - a leading bank based out of Netherlands, when I realized how the <strong>interface lacked interactivity and usability</strong>. 
           Owing to which <strong>I took the responsibility of redesigning the application</strong>.


          <h5 className="projectTopic">Understanding the Application</h5>
            Access Management System is an application that was developed 18 years ago. It allowed  the bank employees to manage the Means of Access which the customers have with the bank.</p>
          <p><strong>Means of Access are ways through which a person can access their bank account.</strong> The 3 Means of Access which the customers have are:
            <Image src={access} Style="padding-top:3rem;padding-bottom:3rem;" fluid />
            Being one of the financial institutions focused on user-centric design, there were many issues with the application. Some of them being :
           <p> 1. <strong>Several Heuristic violations</strong> such as -
              <ul><li><strong>Human limitations</strong>  - There was too many operations that a user had to perform on one screen which increased their cognitive load.</li>
              <li><strong>Consistency and standards</strong>  - since the organization has evolved from what it was 18 years back, there were inconsistencies with the current standards that the bank followed.</li>
              <li><strong>Recognition rather than recall</strong>  - terminologies of the application often confused the users and increased their cognitive effort.</li>
               </ul></p>
               <p>  2. <strong>Low task success rate</strong> - for a first time user, it was extremely difficult to successfully complete a task without regular support from fellow employees. </p>
          <p>  3. <strong>High task completion time</strong> - since the application was 18 years old, there were too many unnecessary steps that a user had to go through to complete a task. </p>
	   <p> 4. <strong>High error rates</strong> - since the font was too small, users always ended up clicking on wrong information, leading to high error rates with the application.</p>

    </p>
    </div>
<div Style="background-color:#d3e6be;padding-top:8rem;padding-bottom:8rem;">
<div className="project">
    <Image src={quote} fluid />
    </div>
</div>
    <div className="project">
          <h5 className="projectTopic">Solution</h5>
          <video controls autoPlay loop muted class="d-flex justify-content-center">
            <source src={mock} type="video/mp4"></source>
          </video>
        

          <h5 className="projectTopic">Research</h5>
          <p>I first reached out to the product owner to understand the existing application.
            Then, I took a survey and held semi-structured interviews with the users of the application to <strong>understand their pain-points and frustrations</strong>.
          </p><p> The survey was created in a way to understand what all <strong>features must be covered</strong> in the solution and the <strong>priority of each feature to inform our Product Roadmap</strong>.
          </p>

          <p>To further understand the problem space, I organised meetings with IT operations team to study the incidents they received from the existing application. These meetings turned out to be insightful since I discovered a common frustration in them - <b>bad user experience</b>. </p>


          <h5 className="projectTopic">Gathering Insights</h5>
          <p>Through the user research we <strong>uncovered insights that became the basis for the design and experience of the product</strong>.</p>
          <Row Style="margin-bottom:4rem;">
            <Col xs={12} md={5} className="d-flex align-items-center"> <p><h5> <strong className="highlightInsights">Insight #1</strong></h5>
             Display all linked accounts that a person has with the bank.</p></Col>
             <Col md={2}></Col>
            <Col xs={12} md={5}>  <p><h5><strong className="highlightInsights">Insight #2</strong></h5>
            Display all means of access linked to each account along with their details.</p>
            </Col>
          </Row>
          <Row Style="margin-bottom:4rem;">
            <Col xs={12} md={5} className="d-flex align-items-center">  <p><h5><strong className="highlightInsights">Insight #3</strong></h5>
            Manage lifecycle of every means of access i.e manage the actions that a user can perform on each Means of access which are - Block, Unblock, Add and Delete.</p></Col>
            <Col md={2}></Col>
            <Col xs={12} md={5}>  <p><h5><strong className="highlightInsights">Insight #4</strong></h5>
            Show history of all actions that have been performed.</p>
            </Col>
          </Row>


          <h5 className="projectTopic">Converting Insights into Designs</h5>
          <p>The bank had a <strong>design system in place so that even though each application in the bank served a different purpose, they resonated in form and appearance</strong>. I used the components from the design system for developing my prototypes.</p>
          <h4> <strong className="highlightInsights">Landing page - search Accounts</strong></h4>
          <p>The employee of the bank can search for all accounts that are linked to a customer using a Search ID from the dropdown on the landing page. There is also an option of FAQ to guide the users through the UI at the top right corner of the screen.</p>
          <Image src={landing} fluid />

          <h4 Style="margin-top:4rem;"> <strong className="highlightInsights"> Details of all Accounts</strong></h4>
          <p>After the search, the employee finds all the accounts linked to the Search ID along with the level of account and details about the account which the employees shortlisted during the interviews. Here the employee selects an account to see the Means of Access linked to that account.</p>
          <Image src={searchAccounts} fluid />

          <h4 Style="margin-top:4rem;"> <strong className="highlightInsights">Managing Means of Access linked with each Account</strong></h4>
          <p>Now that the employee can see all the Means of Access linked to an account, the employee can perform actions to manage the lifecycle of each Means of Access. For example, the employee can block, unblock and delete a Bank Card on the customer's request.</p>
          <Image src={details} fluid />
          
          <h5 className="projectTopic">Milestones Achieved</h5>
          <Image src={outcome} fluid />


          <h5 className="projectTopic">My Dream Team</h5>
          <p>The time when we bid our final goodbyes. Even though it was virtual, it felt the closest we were since we had come full circle. No one was as sad as Ed's cat(in the left picture). This picture is a <strong>testament of the values and bond we shared as a team</strong> and the amazing milestones we achieved together. I'm forever grateful for learning how Empathy at Work can bring a huge difference in our day-to-day lives. </p>
          <Row>
            <Col xs={12} md={6}> <Image onClick={() => this.setState({ photoIndex: 0, isOpen: true })} src={team} rounded fluid /><br />My last working day!</Col>
            <Col xs={12} md={6}> <Image onClick={() => this.setState({ photoIndex: 1, isOpen: true })} src={teamTwo} rounded fluid /><br />Team outing in Netherlands</Col>
          </Row>
          {isOpen && (
            <Lightbox
              mainSrc={images[photoIndex]}
              nextSrc={images[(photoIndex + 1) % images.length]}
              prevSrc={images[(photoIndex + images.length - 1) % images.length]}
              onCloseRequest={() => this.setState({ isOpen: false })}
              onMovePrevRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + images.length - 1) % images.length
                })
              }
              onMoveNextRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + 1) % images.length
                })
              }
            />
          )}


          <h5 className="projectTopic mb-4">Learnings</h5>
          <div class="d-md-flex justify-content-between">
            <Figure>
            <div Style="display: flex; align-items: center;">
                  <Figure.Image
                    width={80}
                    alt="171x180"
                    src={icon}
                  /> <h4>Creating an impact</h4></div>
                <Figure.Caption>
                <p className="iconText">Designing for a large number of users is a humbling opportunity but daunting nonetheless. Improving the experience for the users felt like I was serving my purpose and making a difference through design.</p>

              </Figure.Caption>
            </Figure>
            <Figure>
            <div Style="display: flex; align-items: center;">
                  <Figure.Image
                    width={80}
                    alt="171x180"
                    src={icon}
                  /> <h4>Empathy at Workplace</h4></div>
                <Figure.Caption>
                <p className="iconText">My team taught me the true value of Empathy at workplace. They nurtured me by welcoming my ideas and encouraged me at every step of the way, even through the not-so-bright days.</p>
              </Figure.Caption>
            </Figure>
          </div>
          <div class="d-md-flex justify-content-between mt-5">
            <Figure>
            <div Style="display: flex; align-items: center;">
                  <Figure.Image
                    width={80}
                    alt="171x180"
                    src={icon}
                  /> <h4>Iterative Design</h4></div>
                <Figure.Caption>
                <p className="iconText"> Striking a balance between user and business needs can be really difficult. Given the impact, each screen had to go over 20 iterations and daily meet-ups.</p>

              </Figure.Caption>
            </Figure>
            <Figure>
            <div Style="display: flex; align-items: center;">
                  <Figure.Image
                    width={80}
                    alt="171x180"
                    src={icon}
                  /> <h4>Working with Design System</h4></div>
                <Figure.Caption>
                <p className="iconText">I learnt how to work in a design system. By adhering to the design system, I brought consistency, adaptability, and in the application.</p>
              </Figure.Caption>
            </Figure>
          </div>
        </div>
      </div>
    )
  }
}

export default AMS
