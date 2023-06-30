import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub,
  faLinkedin,
  faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>Anilreddy.webdev@gmail.com</span>
        <span>Ph No:<span   style={{color:"black" }}>7989239989</span></span>
        <div className="f-icons">
        <a href="https://www.youtube.com"
        className="youtube social">
        <FontAwesomeIcon icon={faYoutube} size="3x" />
      </a>
      <a href="https://www.facebook.com/anilkumarreddy.mothukapalli?mibextid=ZbWKwL"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="3x" />
      </a>
      <a href="https://www.linkedin.com/in/anil-kumar-mothukapalli-0239b5152_" className="Linkedin social">
        <FontAwesomeIcon icon={faLinkedin} size="3x" />
      </a>
      <a href="https://instagram.com/mr_error_lover?igshid=MzNlNGNkZWQ4Mg=="
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="3x" />
      </a>
      <a href="https://github.com/anilreddy428"
        className="Github social">
        <FontAwesomeIcon icon={faGithub} size="3x" />
      </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
