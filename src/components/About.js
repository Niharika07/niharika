import React, { Component } from "react"
import {Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import pic2 from "../assets/Seekamentor/pic2.jpg";
import "./project.css"

class About extends Component {
  render() {
    return (
      <div className="About">
          <div Style="margin-top:3rem;padding:0 150px;">
          <Container className="projectContent" fluid>
        <Row Style="margin-bottom:6rem;">
        <Col xs={12} md={6}>  <Image src={pic2} fluid /> </Col>

          <Col xs={12} md={6} >
             
          <p Style="font-size:16px;"> Since the beginning of my formative years, I grew up amidst diverse cultures and met people from different backgrounds. My budding interest in Science led me to pursue a bachelor's degree in Information Technology from SRM University. My ease at understanding information systems logically and practically has compelled me to use them as a tool in <strong>solving real-life challenges</strong>. Going forward I want to improve the way humans interact with novel technologies and information systems. </p>

            <p Style="font-size:16px;">With <strong>over 3 years of experience</strong> building digital products in Banking and Education domain by studying the subtle dynamics of human interactions of varied users, I bring empathy, user-centred mindset and problem-solving skills to address complex scenarios and task flows. Teamwork and collaboration with cross-functional teams are some of my strong footholds.  </p>

            <p Style="font-size:16px;">Being an <strong>advocate of community-engaged learning</strong>, I’m working with the Centre for Community Partnerships at University of Toronto focused on delivering workshops that are inclusive and accessible. I deeply value equity in education and believe that with equal access and opportunities students can be equipped to make informed decisions related to their career.</p>

            <p Style="font-size:16px;">When I’m not behind my laptop, you’ll find me discovering hidden cafes and exploring Toronto with my DoD(Diary of Doodles). I enjoy binge watching Sci-fi movies and have an ear for music of every genre. </p>

           
          </Col>
        </Row>
        </Container>

        </div>
      </div>
    )
  }
}

export default About
