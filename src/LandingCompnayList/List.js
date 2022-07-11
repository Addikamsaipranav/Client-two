import React from 'react'
import Slider from "react-slick";
import "../LandingCompnayList/list.css"
import c1 from "../images/infosys.jpg"
import c2 from "../images/sap.jpg"
import c3 from "../images/tally.png"
import c4 from "../images/wave.png"
import c5 from "../images/zoho.png"

import {Container,Row,Col} from "react-bootstrap"
function List() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 1000,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div>
    
    <Container  className='listcontainer'>
    <div className='desk'>
    <center><h1>Top Accountig Technologies which we work</h1></center>
    <Row data-aos="fade-up" className='containerRow'>
 <Col lg={2} md={2} sm={2}></Col>
 <Col lg={2} md={2} sm={2}></Col>
 <Col lg={2} md={2} sm={2}></Col>
 <Col className='jjj' lg={2} md={2} sm={2}><img className='listimg' src={c1}/></Col>
 <Col lg={2} md={2} sm={2}></Col>
 <Col lg={2} md={2} sm={2}></Col>
    </Row>
    <Row data-aos="fade-left" className='containerRow'>
    <Col lg={2} md={2} sm={2}></Col>
    <Col lg={2} md={2} sm={2}></Col>
    <Col lg={2} md={2} sm={2}><img className='listimg' src={c2}/></Col>
    <Col className='jjj' lg={2} md={2} sm={2}><img className='listimg' src={c3}/></Col>
    <Col lg={2} md={2} sm={2}><img className='listimg' src={c4}/></Col>
    <Col lg={2} md={2} sm={2}></Col>
       </Row>
       <Row data-aos="fade-right" className='containerRow'>
       <Col lg={2} md={2} sm={2}></Col>
       <Col lg={2} md={2} sm={2}><img className='listimg' src={c5}/></Col>
       <Col lg={2} md={2} sm={2}><img className='listimg' src={c1}/></Col>
       <Col className='jjj' lg={2} md={2} sm={2}><img className='listimg' src={c2}/></Col>
       <Col lg={2} md={2} sm={2}><img className='listimg' src={c3}/></Col>
       <Col lg={2} md={2} sm={2}><img className='listimg' src={c4}/></Col>
          </Row>
          <Row data-aos="fade-left" className='containerRow'>
          <Col lg={2} md={2} sm={2}></Col>
          <Col lg={2} md={2} sm={2}></Col>
          <Col lg={2} md={2} sm={2}><img className='listimg' src={c5}/></Col>
          <Col lg={2} md={2} sm={2}><img className='listimg' src={c1}/></Col>
          <Col lg={2} md={2} sm={2}><img className='listimg' src={c2}/></Col>
          <Col lg={2} md={2} sm={2}></Col>
             </Row>
             <Row data-aos="fade-down" className='containerRow'>
          <Col lg={2} md={2} sm={2}></Col>
          <Col lg={2} md={2} sm={2}></Col>
          <Col lg={2} md={2} sm={2}></Col>
          <Col className='jjj' lg={2} md={2} sm={2}><img className='listimg' src={c3}/></Col>
          <Col lg={2} md={2} sm={2}></Col>
          <Col lg={2} md={2} sm={2}></Col>
             </Row>
        </div>
    </Container>
    
    </div>
  )
}

export default List