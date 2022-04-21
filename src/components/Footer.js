import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
// import placeholderImageLogo from "./Images/G.png";
import placeholderImageFB from "../Images/fb.png";
import placeholderImageIS from "../Images/insta.png";
import placeholderImageLI from "../Images/linkedIn.png";
import placeholderImageTW from "../Images/twitter2.png";

function Footer(){
    return(
        <Row className="footer-con" style={{display:"block"}}>
            <Row className="footer-header" style={{display:"block"}}>
                {/* <Col><a href="/"><Image src={placeholderImageLogo} className="logo-image"/></a></Col> */}
            </Row>
            <div className="footer-navigation">
              <div className='hver'>Privacy Policy<span className="separation"></span></div>
               <div className='hver'>Cookies Policy<span className="separation"></span></div>
               <div className='hver'>Terms and Conditions<span className="separation"></span></div>
               <div className='hver'>Security Policy</div>
            </div>
            <Row><div className="footer-line"></div></Row>
            <div className="social-media">
            <Image src={placeholderImageIS} className="media-img" />
         
                <Image src={placeholderImageLI} className="media-img"/>
               <Image src={placeholderImageTW} className="media-img" />
            </div>
            <div className="copyright">
                @2022 SummIT Team#
            </div>
        </Row>
    )
}
export default Footer;