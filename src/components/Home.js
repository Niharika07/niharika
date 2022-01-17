import React, { Component } from "react"
import { Card, CardGroup } from 'react-bootstrap';
import ams from "../assets/ams1.png";
import seekamentor from "../assets/seekamen.png";
import health from "../assets/health.png";
import engroup from "../assets/engroup.png";
import { BsFillSuitHeartFill } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import "./project.css"

class Home extends Component {
  render() {
    return (
      <div>
      <div className="Home">
        <h1 className="introtext">An emerging <span Style="color:#ff3366"> UX Designer</span> and experienced <span Style="color:#ff3366">Frontend Developer</span>.</h1>
        <h4 className="subtext">Focused on studying the subtle dynamics of human interactions and <strong className="highlightIntro">addressing complex task flows</strong>. Passionate about <strong className="highlightIntro">designing meaningful experiences</strong> that <strong className="highlightIntro">shape how we interact with technology</strong>.</h4>
       
        <h3 Style="border-bottom: 1px solid rgb(236, 232, 232);color:grey;font-weight:600;margin-top:3rem;padding-bottom:1rem;">My Work</h3>
        <CardGroup>
        <Card>
            <Card.Link href="/health"><Card.Img variant="top" src={health} /></Card.Link>
            <Card.Body>
              <Card.Title>UHealth+</Card.Title>
              <Card.Text>
                <span Style="font-size:24px;color:grey;">Healthcare &middot; UX Design &middot; UX Research</span>
              </Card.Text>
              <Card.Text>
                <span Style="font-size:20px;">How can international students receive the healthcare they need without feeling lost?</span><br />
                Designing a mobile application for international students to find relevant information about their coverage without having to access multiple resources.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card>
            <Card.Link href="/seekamentor"><Card.Img variant="top" src={seekamentor} /></Card.Link>
            <Card.Body>
              <Card.Title>Seekamentor</Card.Title>
              <Card.Text>
                <span Style="font-size:24px;color:grey;">Education &middot; UX Design &middot; UX Research</span>
              </Card.Text>
              <Card.Text>
                <span Style="font-size:20px;"> How do we bring back the lost practices of mentorship?</span><br />
                Helping students navigate their career by connecting them with field experts to provide them guidance and support.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
        <CardGroup>
          <Card>
            <Card.Link href="/ams"><Card.Img variant="top" src={ams} /></Card.Link>
            <Card.Body>
              <Card.Title>Access Management System</Card.Title>
              <Card.Text>
                <span Style="font-size:24px;color:grey;">Banking &middot; UX Design &middot; Frontend development</span>
              </Card.Text>
              <Card.Text>
                <span Style="font-size:20px;">How to manage means of access a person has with the bank?</span><br />
                Redesigning an application feature for an undisclosed European banking client with their Internet banking team to help the customers of the bank manage their means of access.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Link href="/engroup"><Card.Img variant="top" src={engroup} /></Card.Link>
            <Card.Body>
              <Card.Title>Engroup</Card.Title>
              <Card.Text>
                <span Style="font-size:24px;color:grey;">Community Service &middot; UX Design &middot; UX Research</span>
              </Card.Text>
              <Card.Text>
                <span Style="font-size:20px;">How might we connect high school students with the community and make them feel involved?</span><br />
                Designing a community service mobile application to foster an inclusive experience for students who want to volunteer and help their local community.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
          </div>
          <div class="footer" Style="height:300px;backgroundColor:#212529;margin-bottom:2rem;margin-top:3rem;" >
         <p Style="font-size:32px; color:white;padding-top:4rem;">
           Would you like to <span Style="color:#F6CE54">CONNECT</span>?
        </p>
        <p class="text-muted">
          I'd love that too!
        </p>
        <p class="desc" Style="font-size:15px;color:#9CA9B6;">
          Reach me over<br></br>
          niharika.sharma@mail.utoronto.ca<br></br>
        </p> 
       </div>

       <div class="footer2 h2 p-2">
       <a href="https://www.linkedin.com/in/niharika-sharma-0b5822b6/" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a> 
       <a href="https://github.com/Niharika07" target="_blank" rel="noopener noreferrer" Style="padding:0 10px;"><BsGithub /></a>
       <a href="https://www.instagram.com/niharikasharma07/" target="_blank" rel="noopener noreferrer"><BsInstagram /></a>
       </div>
       <p  class="footer2" Style="font-size:18.5px;margin-bottom:3rem;">
        <i> Designed and developed with <BsFillSuitHeartFill /> and React by Niharika.</i>
       </p>
       
       </div>
      
    )
  }
}

export default Home