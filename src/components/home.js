// import powerslap from'./video.mp4'
import '../App.css'
import axios from 'axios';

import photo from '../Images/video1.jpg'
import time from '../Images/timenew.jpg'
import quality from '../Images/quality.jpg'
import data from '../Images/data.jpg'
import { Container, Row, Col, Image } from 'react-bootstrap';
import React from 'react';
// import { browserHistory } from 'react-router';
import { useHistory } from "react-router-dom";
// import { Row } from 'react-bootstrap';

function Home(){
    const history = useHistory();
    function handleClick() {
        // history.push(
        //     {
        //         pathname:"/start",
        //         // state:{detail:response.data}
        // });
        // const options = {
        //     method: 'GET',
        //     url: 'https://api.pubg.com/shards/pc-na/leaderboards/division.bro.official.console-03/squad',
        //     headers: {
             
        //       'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI5ZWQzNmVlMC01NDJkLTAxMzktZjdhNC01NzUxZjM2N2FmMzQiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNjEzNjYyODU4LCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6Ii0xYjJjN2NhMy01NjZlLTQ1ODYtOTk4OC1iZjBhZmM5ZTJmODMifQ.PxgiPhW--aQAKlhRaiGwriuiSir2gILZVB5tuXZtLXQ',
        //       'Accept': 'application/vnd.api+json'
        //     }
        //   };
          
         
         
        
            // var myObject = JSON.parse(newData);
            
            // console.log(newData)
          
        //   }).catch(function (error) {
        //     console.error(error);
        //   });
      
      }
    return(
        <div className="home" >
            <div style={{height:"624px",position:"relative"}}>
            <div style={{transform:'translatey(300px)'}}>
        <div className='Line1'> <h1>The Ultimate Destination</h1></div>
<div className= 'Line2'> <h1>For Call of Duty Players Match Making</h1></div>
               <div className='getStartedButton'>  <button  onClick={handleClick}>Get Started</button></div>
            </div>
            <div  className="image" style={{ backgroundImage: `url(${photo})`}}></div>
            </div>
          
            {/* <video autoPlay loop muted
            style={{
                position:"absolute",
                height:"100%",
                width:"100%",
                left:"50%",
                top:"50%",
                objectFit:"cover",
                transform:"translate(-50%, -50%)",
                zIndex:"-1"
            }}
            >
                <source src ={powerslap} type="video/mp4" />
            </video> */}
    
            <div>
<Container>
    <Row className="mobile1" style={{paddingLeft:"100px"}}>
        <Col className="mobile"  style={{display: 'flex', justifyContent: 'center'}}>
            <Col  className="inside" >
            <div className="Highlight">
                <div className="HighlightIconInner"> 
<div>
    <img src={time} />
    {/* <p>benifit1</p> */}
</div>

                </div>
            </div>
            <h3>Time</h3>
<div>
    <p>Save time by finding connections in a convenient location. GMatch provides all the information you need to connect to other users. GMatch allows you to find your matches quickly by allowing you to sort the data and add friends</p>
</div>
            </Col>
            <Col  className="inside">
            <div className="Highlight">
                <div className="HighlightIconInner"> 
<div>
    <img src={quality} />
    {/* <p>benifit1</p> */}
</div>

                </div>
            </div>
            <h3>Quality</h3>
<div>
    <p>In this unique experience, find connections through GMatch, the highest quality matching website for gamers out there. On this sleek application, you can find the best connections in a simple, high-quality space.</p>
</div>
            </Col>
            <Col  className="inside">
            <div className="Highlight">
                <div className="HighlightIconInner"> 
<div>
    <img src={data} />
    {/* <p>benifit1</p> */}
</div>

                </div>
            </div>
            <h3>Forefront</h3>
<div className="benefit3">
    <p>Always have the latest, up-to-date information. GMatch will provide you with the current statistics and information, along with displaying them clearly. By using the latest data, we ensure that you will have the best options available and not have to worry that your results are outdated. </p>
</div>
            </Col>
        </Col>
    </Row>
</Container>



            </div>
            {/* <Footer /> */}
        </div>        
    )
}
export default Home;
