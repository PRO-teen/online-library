import React from 'react';
import {FaGithub , FaLinkedin , FaInstagram , FaFacebook} from "react-icons/fa";

const Footer =()=>{
    return (
      <>
        <div className="footer-dark">
          <footer>
            <div className="container">
              <div className="col-md-6 item text">
                <h3>Online Library</h3>
                <p>
                  A digital library, also called an online library, an internet
                  library, a digital repository, or a digital collection is an
                  online database of digital objects that can include text,
                  still images, audio, video, digital documents, or other
                  digital media formats or a library accessible through the
                  internet.
                </p>
              </div>
              <div className="col item social">
                <a
                  href="https://www.linkedin.com/in/ayush-ydv/"
                  target="__blank"
                >
                  <FaLinkedin />
                </a>
                <a href="https://github.com/PRO-teen">
                  <FaGithub />
                </a>
                <a href="https://www.instagram.com/dev__ayush/">
                  <FaInstagram />
                </a>
                <a href="https://www.facebook.com">
                  <FaFacebook />
                </a>
              </div>
            </div>
            <p className="copyright">Copyright © 2022| online library</p>
          </footer>
        </div>
      </>
    );
}

export default Footer;
