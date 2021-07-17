import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
 
  faGoogle,
  faInstagram,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";


export default function SocialFollow() {
  return (
    <div className="social-container">
  
      <a
        href="https://www.linkedin.com/in/sankalp-wahane-512932212/"
        className="youtube social"
      >
        <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
      </a>
      <a
        href="mailto:sankalpwahane29@gmail.com"
        className="facebook social"
      >
        <FontAwesomeIcon icon={faGoogle}size="2x" />
      </a>
      <a href="https://github.com/SankalpWr" className="twitter social">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a
        href="https://www.instagram.com/sankalp_29/"
        className="instagram social"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
        
      </a>
      <p >Copyright Sankalp Wahane &copy; 2021</p><br/>
    </div>
  );
}
