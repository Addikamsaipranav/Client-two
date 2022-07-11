import React from 'react'
import "../Landing/Landing.css"
import img2 from "../images/10624.jpg"
import img1 from "../images/contact.jpg"
import {Container,Row,Col} from "react-bootstrap"
import Roll from 'react-reveal/Roll';

function Landing() {
  return (
    <div>
  
    <Container fluid className='homeAbout'>
    <p data-aos="fade-down" className='head'><Roll left>About Us</Roll></p>
    <Row className='homeaboutrow'>

    <Col data-aos="fade-up" lg={6} sm={12} md={12} className='homeaboutimgcol' >
  <Roll left>
    <img   className='homeaboutimg' src={img2}/>
  </Roll>
    </Col>
    <Col data-aos="fade-right" lg={6} sm={12} md={12} className='homeaboutinfo'>
    
    <p>
    We incorporated Prudence with a moto”Let’s grow together”. Planning the business resources coupled with compliances of law has become a challenge today. It requires extensive theoretical knowledge and practical experience. Shanmukha and his associates have sound theoretical knowledge and good practical experience. By sharing their knowledge and practical experience with the team members and clients, we ensure effective and timely redressal of issues arising on routine basis or that can arise later.
    </p>
   
    <button data-aos="flip-up">Know More</button>
    
    </Col>
    </Row>
    
    </Container>
    </div>
  )
}

export default Landing