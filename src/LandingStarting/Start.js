import React from 'react'
import "../LandingStarting/Start.css"
import ss from "../images/Invoice.gif"
import {Link} from "react-router-dom"
import {Container,Col,Row} from "react-bootstrap"
import { AiOutlineRise ,AiFillBank,AiFillCreditCard,AiFillCalendar,AiFillDatabase,AiFillDropboxSquare,AiFillGoogleCircle} from "react-icons/ai";
function Start() {
  return (
    <div className='start'>
    <Container fluid className='containerstart'>
    <Row className="flex-column-reverse flex-md-row">
    <Col>
    <div data-aos="fade-up" class="text ">
        <p>Financial Solutions to Advance your Business <span>corporis lobortis</span> quas nunc semper eius ullam ullam velit voluptas.</p>
        <button className='landbutton'>Get Started</button>
    </div>
    </Col>
    <Col>
    <div data-aos="fade-down" class="img col-lg-6 col-md-12 col-sm-12">
        <div class="social-icons">
            <div data-aos="fade-up" className='icon2 social-icon1'><AiOutlineRise/></div>
            <div data-aos="fade-left" className='icon2 social-icon2'><AiFillCreditCard/></div>
            <div data-aos="fade-right" className='icon2 social-icon3'><AiFillBank/></div>
            <div data-aos="fade-left" className='icon2 social-icon4'><AiFillCalendar/></div>
            <div data-aos="fade-right" className='icon2 social-icon5'><AiOutlineRise/></div>
        </div>

        <img  class="email-icon" src="images/mail-142.svg" alt=""/>
    </div>
    <div data-aos="fade-up" class="wave">
        <img src="images/blue_wave.svg" alt=""/>
    </div>

    </Col>

    </Row>
    </Container>
    </div>
  )
}

export default Start