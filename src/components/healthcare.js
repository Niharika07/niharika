import React, { Component } from "react"
import Image from 'react-bootstrap/Image'
import health from "../assets/Healthcare/health.png";
import Persona from "../assets/Healthcare/Persona.png";
import insights from "../assets/Healthcare/insights.png";
import ci from "../assets/Healthcare/ci.png";
import mfc from "../assets/Healthcare/mfc.png";
import cfl from "../assets/Healthcare/cfl.png";
import us from "../assets/Healthcare/us.png"; 
import msf from "../assets/Healthcare/msf.png";
import mid from "../assets/Healthcare/mid.png";
import goal from "../assets/Healthcare/goal.png";
import demog from "../assets/Healthcare/demog.png";
import process from "../assets/Healthcare/process.png";
import hub from "../assets/Healthcare/hub.png";
import ideas from "../assets/Healthcare/ideas.png";
import p1 from "../assets/Healthcare/p1.png";
import p2 from "../assets/Healthcare/p2.png";
import p3 from "../assets/Healthcare/p3.png";
import features from "../assets/Healthcare/features.png";
import team2 from "../assets/Healthcare/team2.jpg";
import secondary from "../assets/Healthcare/secondary.png";
import journey from "../assets/Healthcare/journey.png";
import imagine from "../assets/Healthcare/imagine.png";
import next1 from "../assets/Healthcare/next1.png";
import next2 from "../assets/Healthcare/next2.png";
import task1 from "../assets/Healthcare/task1.mov"
import task2 from "../assets/Healthcare/task2.mov"
import task3 from "../assets/Healthcare/task3.mov"
import { Container, Row, Col } from 'react-bootstrap';
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import "./healthcare.css"

const images = [
  require('../assets/Healthcare/Persona.png'),
  require('../assets/Healthcare/journey.png'),
  require('../assets/Healthcare/p1.png'),
  require('../assets/Healthcare/p2.png'),
  require('../assets/Healthcare/p3.png'),
  require('../assets/Healthcare/mid.png'),
];

class Healthcare extends Component {
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
          
    
          <div className="projectPadding" Style="padding-bottom:5rem;">
          <h5 className="projectTopic" Style="font-size:50px;">Overview</h5>
          <p>It all began when a team of 6 international students were asked <strong>“How can you positively impact the lives of students at the University of Toronto?”</strong></p>
          <p>The answer came from our personal experiences – <strong>understanding healthcare insurance plans and accessing healthcare services.</strong> So, we collaborated with UofT’s Innovation Hub to investigate how can we make access to healthcare easier for international students.</p>
      
          <Container Style="display: flex;justify-content: center;padding-bottom:5rem;">
            <Row>
              <Col><Image src={hub} Style="cursor:default;" fluid /></Col>
            </Row>
          </Container>
          <h5 className="projectTopic" Style="font-size:50px;">Our Approach</h5>
          <Container Style="display: flex;justify-content: center; padding-bottom:5rem;">
            <Row>
              <Col><Image src={process} Style="cursor:default;" fluid /></Col>
            </Row>
          </Container>
          
          
            <p className="projectTopic" Style="font-size:50px;"><strong>User Research</strong></p>
            <p> Our secondary research revealed that <strong>international students have two types of plans that offer different services</strong> – UHIP (University Health Insurance Plan) and Supplementary Plans. Details regarding healthcare insurance plans and services were <strong>scattered across multiple websites</strong>, making it hard to find relevant information when needed.</p>
            <Container Style="display: flex;justify-content: center;padding-top:2rem;padding-bottom:4rem;">
            <Row>
              <Col><Image src={secondary} Style="cursor:default;" fluid /></Col>
            </Row>
          </Container>
            <p>Then, we lead our <strong>primary research</strong> in the form of <strong>online surveys and semi-structured interviews. </strong>We recruited international students of varying education levels from all three campuses (St George, Scarborough and Mississauga) to understand their issues with healthcare. 
            <Container Style="display: flex;justify-content: center; padding-top:5rem; padding-bottom:4rem;">
            <Row>
              <Col><Image src={demog} Style="cursor:default;" fluid /></Col>
            </Row>
          </Container>
           
          We synthesized the collected data from the interviews and surveys into an affinity map to help form insights and <strong>uncovered major issues:</strong> </p>
            <Container fluid>
              <Row className="mb-1 d-flex justify-content-center">
                <Col xs={12} md={5}><h5>78%</h5> <p>Students felt they received <strong>misinformation around coverage </strong></p> </Col>
                <Col md={2}></Col>
                <Col xs={12} md={5}> <h5>86%</h5> <p>Students mentioned <strong>lack of information surrounding the reimbursement process</strong>. </p>
                </Col>
              </Row>
              <Row className="mb-1 d-flex justify-content-center">
                <Col xs={12} md={5}><h5>89%</h5> <p>Students expressed <strong>overload of information</strong>. </p> </Col>
                <Col md={2}></Col>
                <Col xs={12} md={5}> <h5>84%</h5> <p>Students were <strong>confused between UHIP and supplementary plans</strong>. </p>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="projectPadding">
        <div >
          <p><i>It was clear through our research that International students are <strong>confused when navigating health coverage information</strong>.</i></p>
          <Container fluid>
            <Row className="mb-1 d-flex justify-content-center" Style="padding-bottom:4rem">
              <Col xs={12} md={6}><h4><i><strong>"I’m confused between UHIP coverage and supplementary plan coverage"</strong></i></h4> </Col>

              <Col xs={12} md={6}> <h4><i><strong>"I was misinformed about coverage and I ended up paying the amount out of pocket"</strong></i></h4> </Col>
            </Row>
            <Row className="mb-1 d-flex justify-content-center" Style="padding-bottom:2rem">
              <Col xs={12} md={6}><h4><i><strong>“I spent a couple of hours calling Sunlife and Green Shield and most of the time, they sound as confused as I am.”</strong></i></h4> </Col>

              <Col xs={12} md={6}> <h4><i><strong>"I can’t find detailed information regarding coverage"</strong></i></h4> </Col>
            </Row>
          </Container>
        </div>
        </div>
        <div className="projectPadding" Style="padding-bottom:5rem">
        <Container Style="display:flex;justify-content: center; margin-top:5rem;margin-bottom:10rem;">
          <Row>
            <Col><Image src={imagine} Style="cursor:default;" fluid /></Col>
          </Row>
        </Container>
      

       
        <h6 className="projectTopic" Style="font-size:24px;font-weight:700;color:grey;">Define</h6>
          <h2 Style="font-size:48px;font-weight:700;">Problem Statement</h2>
          <p>The current state of accessing information regarding international students health insurance plans places the <strong>burden of finding accurate healthcare information on international students with little to no guidance</strong>. </p> 
        
        </div>

        <div className="projectPadding" >
          <h2 className="projectTopic" Style="font-size:48px;font-weight:700;">Persona</h2>
          <h5>Meet Issa Inamorata (she/her), the international student</h5>
          <p>Through Issa, we were able to better understand the <strong>common motivations, frustrations and behaviours</strong> of our target user group and represent them.</p>
          <Container Style="display: flex;justify-content: center;padding-top:2rem;">
            <Row>
              <Col><Image onClick={() => this.setState({ photoIndex: 0, isOpen: true })} src={Persona} Style="cursor:pointer;" fluid /></Col>
            </Row>
          
          </Container>
 
         
          <h2 className="projectTopic" Style="font-size:48px;font-weight:700;">User Journey</h2>
       
          <p>To further <strong>identify the major struggles</strong> of Issa while seeking healthcare service, we had to <strong>put ourselves in her shoes</strong>.</p>
       
        <Container Style="display:flex;justify-content: center;">
          <Row>
            <Col><Image onClick={() => this.setState({ photoIndex: 1, isOpen: true })} src={journey} fluid /></Col>
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
        </Container>


        </div>
        <div className="projectPadding" Style="padding-top:3rem;">
          <p>Our team identified the <strong>major issues</strong> that students face while seeking healthcare service.</p>
          <Container Style="display:flex;justify-content: center;">
          <Row>
            <Col><Image src={insights} Style="cursor:default;" fluid /></Col>
          </Row>
        </Container>
        </div>



       
        <div className="projectPadding" Style="padding-top:3rem;">
        <h2 className="projectTopic" Style="font-size:48px;font-weight:700;">Design Goals</h2>
        <Container Style="display: flex;justify-content: center;">
          <Row>
            <Col><Image src={goal} Style="cursor:default;" fluid /></Col>
          </Row>
        </Container>     
       </div>
   
        <div className="projectPadding" Style="padding-top:4rem;padding-bottom:5rem;">
        <h2 className="projectTopic" Style="font-size:48px;font-weight:700;">Ideation</h2>
          <p>Now, with our design goals in mind, we began <strong>envisioning potential solutions to help them get the care they need</strong> by sketching ideas and clustering them together. We voted and prioritized the ideas based on impact and feasibility. </p>

          <Container Style="display: flex;justify-content: center;padding-bottom:5rem;">
            <Row>
              <Col><Image src={ideas} Style="cursor:default;" fluid /></Col>
            </Row>
          </Container>


          <p>We decided to go with <strong>2 homerun ideas</strong> - <i>'Find a Clinic'</i> and <i>'Personalized Dashboard'</i> that scored a high impact and high feasibility along with <strong>1 quick win idea</strong> - <i>'Search your Coverage'</i> with moderate impact and moderate feasibility.</p>
          <Image src={features} fluid Style="padding-top:1rem;cursor:default;" />
        </div>
        <div Style="background-color:#f0eeed;padding-top:5rem;padding-bottom:2rem;">
          <div className="projectPadding" >
          <h2 Style="font-size:48px;font-weight:700;">Iterative Design</h2><p>From there, we started ideating our lo-fi prototypes and went through <strong>multiple iterations</strong>. We decided to design a mobile app due to it being more <strong>accessible on the go</strong>. We focused on 3 main task flows:</p>

            <Row Style="margin-bottom:5rem;">
            <h4><strong >Login, Search, Filter</strong></h4>
            <p> <ul>
              <li>Integrated university ID while login to <strong>build trust in the application</strong> and eliminate the registration process. </li>
              <li> Designed search and filter functions to <strong>find a nearby clinic that bills insurance partners</strong>.</li>
            </ul></p>
            <Image onClick={() => this.setState({ photoIndex: 2, isOpen: true })} src={p1} fluid />
          </Row>

          <Row Style="margin-bottom:5rem;">
            <h4><strong >View and Bookmark a Clinic</strong></h4>
            <p> <ul>
              <li> The bookmark feature would ensure that the users only have to <strong>go through the process once</strong>.  </li>
            </ul></p>
            <Image onClick={() => this.setState({ photoIndex: 3, isOpen: true })} src={p2} fluid />
          </Row>

          <Row Style="margin-bottom:6rem;">
            <h4><strong >Access to Coverage Card and Service Details</strong></h4>
            <p> <ul>
              <li>Lastly, by providing users with their insurance card details, and services covered, we would provide them with <strong> their personalized information in one place</strong>. </li>
              <li>Added a section to view nearby clinics.</li>
            </ul></p>
            <Image onClick={() => this.setState({ photoIndex: 4, isOpen: true })} src={p3} fluid />
          </Row>

          </div></div> 
        <div className="projectPadding" Style="padding-top:3rem;">
        <p>We then conducted a <strong>lean evaluation of our low-fidelity prototype with 7 participants</strong> to detect potential issues. Since users found a few icons ambiguous and some information both redundant and unnecessary, we fixed these problems while shifting our designs from pen and paper to Figma. We created a medium-fidelity wireframe set before moving on to usability testing.</p>
        <Container Style="display: flex;justify-content: center;padding-bottom:7rem;padding-top:4rem;">
            <Row>
              <Col><Image onClick={() => this.setState({ photoIndex: 5, isOpen: true })} src={mid} fluid /></Col>
            </Row>
          </Container>
         
          
        <h2 className="projectTopic" Style="font-size:48px;font-weight:700;">Usability Testing</h2>
       <p>To evaluate the prototype, we conducted <strong>Usability testing remotely with 16 international students</strong> in presence of 1 moderator and 1 notetaker. We asked each participant to think-aloud as they completed the following tasks: </p>
       <ul>
              <li>Log in and Find a Clinic for a General Check-Up</li>
              <li>Apply Filters to the Search Results</li>
              <li>Bookmark a Clinic</li>
              <li>Find Profile Information</li>
        </ul><br></br>
        <p Style="padding-bottom:6rem;">We conducted post-task surveys and post-test interviews to capture their attitude and behaviour regarding the application. Participants <strong>liked the overall flow, information organization and easy access to personal healthcare information</strong>. They also found the search, filter and bookmark functions <strong>intuitive and easy to use</strong>. However, there were also a few issues, which we intend to fix.</p>

          <Row Style="margin-bottom:6rem;padding:0 5rem;">
            <h4><strong >Confusing Icons</strong></h4>
            <Image src={ci} fluid />
          </Row>
          <Row Style="margin-bottom:6rem;padding:0 5rem;">
            <h4><strong >Missing Filter CTA</strong></h4>
            <Image src={mfc} fluid />
          </Row>
          <Row Style="margin-bottom:6rem;padding:0 5rem;">
            <h4><strong >Confusing Filter Labels</strong></h4>
            <Image src={cfl} fluid />
          </Row>
          <Row Style="margin-bottom:6rem;padding:0 6rem;">
            <h4><strong >Unclear Scope</strong></h4>
            <Image src={us} fluid />
          </Row>
          <Row Style="margin-bottom:6rem;padding:0 6rem;">
            <h4><strong >Missing sharing feature</strong></h4>
            <Image src={msf} fluid />
          </Row>
       
        </div>

        <div className="projectPadding" Style="padding-top:3rem;">
        <h5>Prototype</h5> <p>After receiving valuable feedbacks from our users, I incorporated all the changes and created a high-fidelity clickable prototype.</p>
        <Row Style="margin-bottom:8rem;">
            <Col xs={12} md={5}>  <video controls autoPlay loop muted>
              <source src={task1} type="video/mp4"></source>
            </video></Col>
            <Col md={2}> </Col>
            <Col xs={12} md={5} className="d-flex align-items-center"> <p><h5><strong>Login and Search a Clinic</strong></h5>
              <ul>
                <li>Supports students to <strong>login using their UofT credentials</strong>. </li>
                <li>Enables students to <strong>search clinics based on the healthcare service</strong> they seek.</li>

              </ul>
            </p></Col>
          </Row>
     
        <Row Style="margin-bottom:8rem;">
            <Col xs={12} md={5} className="d-flex align-items-center">  <p><h5><strong>Filter and Bookmark a Clinic</strong></h5>
              <ul>
                <li>Filters clinics by <strong>location, insurance plan type</strong>, and whether it is <strong>paid by the insurance company</strong> directly. </li>
                <li>Allows students to <strong>bookmark</strong> their preferred choice of clinics.</li>

              </ul></p></Col>
              <Col md={2}> </Col>
            <Col xs={12} md={5}>  <video controls autoPlay loop muted>
              <source src={task2} type="video/mp4"></source>
            </video></Col>
          </Row>

          <Row Style="margin-bottom:8rem;">
            <Col xs={12} md={5}>  <video controls autoPlay loop muted>
              <source src={task3} type="video/mp4"></source>
            </video></Col>
            <Col md={2}> </Col>
            <Col xs={12} md={5} className="d-flex align-items-center"> <p><h5><strong>View Profile and Services</strong></h5>
              <ul>
                <li>A personalized dashboard for students to <strong>view their coverage details and save them</strong>. </li>
                <li>Provides a list of services that are covered and <strong>smart recommendations of nearby clinics</strong> that covers a specific service.</li>

              </ul>
            </p></Col>
          </Row>
       
        </div>


        <div className="projectPadding" Style="margin-top:6rem;">
        <h2 className="projectTopic" Style="font-size:48px;font-weight:700;">Next Steps</h2> <p > In our next steps, we would first explore adding <strong>additional personas</strong> such as:</p>
          <Image src={next1} Style="cursor:default;" fluid />
          <p Style="margin-top:2rem;"> Secondly, we would <strong>explore features derived from our big ideas and based on the suggestions</strong> from our participants:</p>
          <Image src={next2} Style="cursor:default;" fluid /> 
        </div>

        <div className="projectPadding" Style="margin-top:6rem;">
        <h2 className="projectTopic" Style="font-size:48px;font-weight:700;">Reflections</h2>
          <Image src={team2} fluid Style="margin-bottom:3rem;cursor:default;" />



          <p> <h4><strong>Power of teamwork</strong></h4> As we were getting started with this course, I remember our professor mentioning how some students find groups they stick with for the entire program, I was fortunate enough to be a part of one such group. </p>
          <p> <h4><strong>Design is an iterative process</strong></h4>It was my first experience working end-to-end on a design process where I learnt the importance of continuous iteration and feedback. </p>
          <p Style="margin-bottom:3rem;"><h4><strong>Creating an Impact</strong></h4> This project started when 6 international students tried to maximise their insurance and were lost in the process. Working on this project was extremely meaningful since we were tackling a real-world challenge that existed widely.</p>

        </div>

      </div>
    )
  }
}

export default Healthcare

