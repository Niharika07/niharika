import React, { Component } from "react"
import Image from 'react-bootstrap/Image'
import mainAMS from "../assets/AMS/mainAMS.png";
import before from "../assets/AMS/before.png";
import after from "../assets/AMS/after.png";
import team from "../assets/AMS/team.png"
import teamTwo from "../assets/AMS/teamTwo.jpg";
import icon from "../assets/AMS/icon.png"
import { Container, Row, Col, Figure } from 'react-bootstrap';
import { Card, CardGroup } from 'react-bootstrap';
import "./project.css"
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import mock from "../assets/AMS/mock.mov"

const images = [
  require('../assets/AMS/before.png'),
  require('../assets/AMS/after.png'),
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
        <div className="project">
          <h2 className="projectTitle" Style="font-size:48px;font-weight:700;margin-top:20px;">Access Management System</h2>
          <h5 className="projectTags">FinTech &middot; UX Design &middot; Frontend development</h5>
          <h5 className="projectIntro">Redesigning an application feature for an undisclosed European banking client with their Internet banking team to help over 1 million customers of the bank manage their means of access.</h5>
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
          <p>For the safety and privacy of the application, it will be referred to as Access Management System. I worked with a team of 2 Backend developers, a Business Analyst, a Scrum Master and a Product owner, my dream team.</p>


          <h5 className="projectTopic">Background</h5>
          <p>During Summer’2020 while I was working with my client on Frontend automation strategies, a team from Internet banking reached out to me for redesigning an application that allowed employees of the bank to manage the means of access which the customers have with the bank. We will refer Means of access as Access Tools.</p>
          <p>Access Tools are ways through which a person can access their bank account and could be divided into 3 main categories:
            1. Physical Device : a debit card, credit card
            2. Accessing via mobile : PIN 5(the 5 digit pin that you provide in a mobile banking app)
            3. Accessing via web : Userid and password
            The bank’s vision was to give control and autonomy to its customers for managing their means of access. </p>


          <h5 className="projectTopic">Solution</h5>
          <video controls autoPlay loop muted class="d-flex justify-content-center">
            <source src={mock} type="video/mp4"></source>
          </video>
          <CardGroup>
            <Card Style="max-width:32rem;">
              <Card.Img variant="top" src={before} onClick={() => this.setState({ photoIndex: 0, isOpen: true })} /> <Card.Text>Before</Card.Text></Card>
            <Card Style="max-width:32rem;"><Card.Img variant="top" src={after} onClick={() => this.setState({ photoIndex: 1, isOpen: true })} /> <Card.Text>After</Card.Text></Card>
          </CardGroup>


          <h5 className="projectTopic">Research</h5>
          <p>I first reached out to the product owner to understand the existing application and then conducted user interviews with existing users. Some of the questions I asked were:</p>
          <p>To further understand the problem space, I organised meetings with IT operations team to study the incidents they received from the existing application. These meetings turned out to be insightful since I discovered a common frustration in them - <b>bad user experience</b>. </p>
          <div class="eval_research">
            <li>What are their pain points while interacting with the current UI?</li>
            <li>What is the lifecycle of a means of access?</li>
            <li>What are the unique identities for searching a means of access?</li>
            <li>Do we need Internationalization?</li>
            <li>What are the specific details of a means of access that a user want to see?</li>
            <li>What actions can a user perform on their MOA?</li>
          </div>

          <h5 className="projectTopic">Dream Team</h5>
          <p>The time when we bid our final goodbyes. Even though it was virtual, it felt the closest we were since we had come full circle. No one was as sad as Ed's cat(she's right in the center). This picture is a testament of the values and bond we shared as a team and the amazing milestones we achieved together. I'm forever grateful for learning how Empathy at Work can bring a huge difference in our day-to-day lives. </p>
          <Row>
            <Col xs={12} md={6}> <Image onClick={() => this.setState({ photoIndex: 2, isOpen: true })} src={team} rounded fluid /><br />My last working day!</Col>
            <Col xs={12} md={6}> <Image onClick={() => this.setState({ photoIndex: 3, isOpen: true })} src={teamTwo} rounded fluid /><br />Team outing in Netherlands</Col>
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
              <Figure.Image
                width={80}
                alt="171x180"
                src={icon}
              />
              <Figure.Caption>
                <p className="iconText">Designing for a million user base is a humbling opportunity but daunting nonetheless. Given the impact, each screen had to go over 20 iterations and daily meet-ups.</p>

              </Figure.Caption>
            </Figure>
            <Figure>
              <Figure.Image
                width={80}
                alt="171x180"
                src={icon}
              />
              <Figure.Caption>
                <p className="iconText">My team taught me the true value of Empathy at workplace. They nurtured me by welcoming my ideas and encouraged me at every step of the way, even through the not-so-bright days.</p>
              </Figure.Caption>
            </Figure>
          </div>
          <div class="d-md-flex justify-content-between mt-5">
            <Figure>
              <Figure.Image
                width={80}
                alt="171x180"
                src={icon}
              />
              <Figure.Caption>
                <p className="iconText">Stakeholder buy-in is a difficult business. Striking a balance between user and business needs can be really difficult. I tackled it by documenting my process and backing my decisions with reason and data.</p>

              </Figure.Caption>
            </Figure>
            <Figure>
              <Figure.Image
                width={80}
                alt="171x180"
                src={icon}
              />
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
