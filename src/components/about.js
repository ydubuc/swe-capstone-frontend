import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import LogoTitle from './LogoTitle.js';
// import Footer from './Footer.js';
import { Container, Row, Col, Image } from 'react-bootstrap';
import placeholderImageCN from '../Images/GM.jpg'
import placeholderImageGM from "../Images/GM.jpg";
import placeholderImageLE from "../Images/LE.png";
import placeholderImagePN from "../Images/LE.png";

function About(){
    return(
        <Container fluid class="con">
            {/* <LogoTitle /> */}
            <Row>
                <Col className="page-title"><h1>About Us</h1></Col>
            </Row>
            <Row className="body-row">
                <Col className="section-title"><h2>MISSION</h2></Col>
            </Row>
            <Row className="body-row">
                <Col className="section-content mission-text"><p>Companies need IT management tools for the day-to-day activities of their organization. The constant drive to have a tool that simplifies and optimize the work of the IT department. We built our system to meet all the needs and requirements of an IT department taking into consideration the little things from licensing asset tracking to the bigger things of budget management. Our Mission is “Maximize your time with a quality to be at the forefront of your business”. </p></Col>
            </Row>
            <Row className="body-row">
             <Col className="section-title OS_Title"><h2>OUR STORY</h2></Col>
            </Row>
            <Row className="body-row">
             <Col className="section-content Our-Story"><p>The SummIT team consist of six unique individuals with a common goal: creating a tool for managing an IT department (licensing, asset tracking, budget management, self-service software/configuration, issue management/tickets, etc.). With SummIT companies IT department are able to run their activities efficiently and log in tickets and perform IT servicing activities. We observed companies and inferred from monitoring their activities the need to have a tool that does all the managing and offers the ability for users to login and the backdrop was also to make this tool open source for future development and ease of use. Using SummIT the management of an IT department will be optimal and effective for your company.  </p></Col>
            </Row>
            <Row className="body-row">
               <Col className="section-title teamTitle"><h2>MEET THE TEAM MEMBERS</h2></Col>
            </Row>
            <Row className="body-row body-row-member">
                <Col><div><Image src={placeholderImageCN} className="member-img" /></div></Col>
                <Col className="member-info ChristyName">
                    <h3><strong>Christy Neal</strong></h3>
                    <h5>Team Leader</h5>
                    <p>I’m a bachelor’s degree holder of 2018 in dance mainly focusing on production. But after a while IT related fields started capturing my interest more than I would like to admit. After a while I decided to fully pursue the IT related fields in 2019. Currently I’m a Software engineer masters student in her second semester trying to learn something new every day. I’m working on the G.Match app with my team mates.</p>
                </Col>
            </Row>
            <Row className="body-row body-row-member">
                <Col><div><Image src={placeholderImageGM} className="member-img" /></div></Col>
                <Col className="member-info GopiName">
                    <h3><strong>Gopi Macha</strong></h3>
                    <h5>Team Member</h5>
                    <p>Gopi is currently a graduate student at Kennesaw State University.He had Two Years experience in Software field.Mainly with Front-end part of the applications. </p>
                </Col>
            </Row>
            <Row className="body-row body-row-member">
                <Col><div><Image src={placeholderImageLE} className="member-img" /></div></Col>
                 <Col className="member-info LeulName">
                    <h3><strong>Leul Endashaw</strong></h3>
                    <h5>Team Member</h5>
                    <p>I’m a students at Kennesaw state university doing my masters in software engineering. I did my bachelors degree in computer science, which started me on this journey and encouraged me to pursue it more. I’m currently working in this game matching project which has thought me a lot and gave me a chance to collaborate with my team mates.</p>
                </Col>
            </Row>
            <Row className="body-row body-row-member">
                <Col><div><Image src={placeholderImageCN} className="member-img" /></div></Col>
                <Col className="member-info ChristyName">
                    <h3><strong>Christy Neal</strong></h3>
                    <h5>Team Leader</h5>
                    <p>I’m a bachelor’s degree holder of 2018 in dance mainly focusing on production. But after a while IT related fields started capturing my interest more than I would like to admit. After a while I decided to fully pursue the IT related fields in 2019. Currently I’m a Software engineer masters student in her second semester trying to learn something new every day. I’m working on the G.Match app with my team mates.</p>
                </Col>
            </Row>
            <Row className="body-row body-row-member">
                <Col><div><Image src={placeholderImageCN} className="member-img" /></div></Col>
                <Col className="member-info ChristyName">
                    <h3><strong>Christy Neal</strong></h3>
                    <h5>Team Leader</h5>
                    <p>I’m a bachelor’s degree holder of 2018 in dance mainly focusing on production. But after a while IT related fields started capturing my interest more than I would like to admit. After a while I decided to fully pursue the IT related fields in 2019. Currently I’m a Software engineer masters student in her second semester trying to learn something new every day. I’m working on the G.Match app with my team mates.</p>
                </Col>
            </Row>
            <Row className="body-row body-row-member">
                <Col><div><Image src={placeholderImagePN} className="member-img" /></div></Col>
                <Col className="member-info">
                   <div className='PhuongName'> <h3><strong>Phuong Nguyen</strong></h3></div>
                    <h5>Team Member</h5>
                    <p>Phuong is currently a graduate student at Kennesaw State University. His bachelor degree is in 
                        Civil Engineering. He is always facinated about how computer technology works and developped. 
                        That is why he has chosen Software Engineering for his advance degree. Completing this web app 
                        in a timely manner will help him gain more experiences in web application development and increase 
                        chances for job seeking in the future.</p>
                </Col>
            </Row>
            {/* <Footer /> */}
        </Container>
        
    )
}
export default About;