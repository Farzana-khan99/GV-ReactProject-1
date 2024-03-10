import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
      <div className="container">
        <div className="footerContent">
          <div className="ft-text">
            <h2>Full Stack</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam,
              accusantium officia! Dignissimos labore vel similique.
            </p>
          </div>

          <div className="ft-text">
            <h2>follow us</h2>
            <ul className="social-link">
              <li><FaLinkedin /></li>
              <li><FaGithub /></li>
              <li><FaFacebookSquare /></li>
            </ul>
          </div>

          <div className="ft-text">
            <h2>subscribe</h2>
            <input type="text" placeholder="subscribe" />
          </div>
          <div className="ft-text">
            <h2>call  us</h2>
            <ul className="social-link">
              <li>+36789890980</li>
              
            </ul>
          </div>
        </div>
      </div>
      </div>
      
      <div className="copyright">
        <p>abc &copy; fk 2024</p>
        vv
      </div>
    </footer>
  );
};

export default Footer;
