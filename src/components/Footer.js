import React, { Component } from "react"
import { BsFillSuitHeartFill } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
         <div class="footer" Style="height:300px;backgroundColor:#212529;margin-bottom:2rem;margin-top:3rem;" >
          <p Style="font-size:32px; color:white;padding-top:5rem;">
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
        <p class="footer2" Style="font-size:18.5px;margin-bottom:3rem;">
          <i> Designed and developed with <BsFillSuitHeartFill /> and React by Niharika.</i>
        </p>
      </div>
    )
  }
}

export default Footer
