import React, { Component } from "react"
import Image from 'react-bootstrap/Image'
import health from "../assets/Healthcare/health.png";
import persona from "../assets/Healthcare/Persona.png";

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
          <span className="Intro" Style="background-color:#F2D785;font-size:24px;">Helping international students find information regarding their healthcare insurance plans without having to access multiple resources.</span>
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
              <Row className="mb-1 d-flex justify-content-center" Style="padding-bottom:4rem">
                <Col xs={12} md={5}><h5>The Problem</h5> <p>What the existing product/service fails to address is that international students have limited knowledge about the Ontario healthcare system and experience confusion due to an overwhelming amount of information across multiple platforms.</p> </Col>
                <Col md={2}></Col>
                <Col xs={12} md={5}> <h5>The Solution</h5> <p>Our project will address this gap by creating a solution that will allow international students to find relevant information regarding their coverage without having to access multiple resources.</p>
                  <p>Our initial focus will be on making sure that international students can easily find the right information regarding their healthcare plan.</p>
                </Col>
              </Row>
            </Container>
          </div>
        </div>

        <div Style="background-color:#87774d;padding-top:4rem;color:white;padding-bottom:4rem;">
          <div className="projectPadding">
            <h5>Understanding our Users</h5>
            <p> We thought it would be best to start out with some <strong>secondary research</strong> with a handful of websites that gave us the information we were looking for, such as <strong>UofT and insurance partner websites</strong>.</p>
            <p>We also lead our <strong>primary research in the form of interviews and surveys</strong>, aiding us in both <strong>qualitative and quantitative results</strong>. </p>

          </div></div>

        <div Style="padding:50px 100px;">
          <Container fluid>
            <Row className="mb-1 d-flex justify-content-center" Style="padding-bottom:4rem">
              <Col xs={12} md={6}><h5><i>"I’m confused between UHIP coverage and supplementary plan coverage"</i></h5> </Col>

              <Col xs={12} md={6}> <h5><i>"I was misinformed about coverage and I ended up paying the amount out of pocket"</i></h5> </Col>
            </Row>
            <Row className="mb-1 d-flex justify-content-center" Style="padding-bottom:4rem">
              <Col xs={12} md={6}><h5><i>“I spent a couple of hours calling Sunlife and Green Shield and most of the time, they sound as confused as I am.”</i></h5> </Col>

              <Col xs={12} md={6}> <h5><i>"I can’t find detailed information regarding coverage"</i></h5> </Col>
            </Row>
          </Container>         
        </div>
        <div className="projectPadding">
        <h5>Meet Issa Inamorata (she/her), the international student</h5>
        <p>Through Issa, we were able to better understand the common motivations, frustrations and behaviours of our target user group.</p>
        <Container Style="display: flex;justify-content: center;">
            <Row>
              <Col><Image src={persona} fluid /></Col>
            </Row>
          </Container>
        </div>

      </div>
    )
  }
}

export default Healthcare
