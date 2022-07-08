import React from 'react'
import { AiOutlineRise } from "react-icons/ai";
import "../Services/Services.css"
import {Container,Row,Col, Button} from "react-bootstrap";

function Service() {
  return (
    <div className='services'>
    <Container>
    <center className="serviceheading">Pick Your Service</center>
    <Row data-aos="fade-up" className='sercicerow'>
    
    <Col className='servicescol' lg={3} md={6} sm={12}>
    <div className='icon'><AiOutlineRise/></div>
    <p>Virtual CFO</p>
    <center><Button>Know More</Button></center>
    </Col>
    <Col className='servicescol' lg={3} md={6} sm={12}>
    <div className='icon'><AiOutlineRise/></div>
    <p>Virtual CFO</p>
    <center><Button>Know More</Button></center>
    </Col>
    <Col className='servicescol' lg={3} md={6} sm={12}>
    <div className='icon'><AiOutlineRise/></div>
    <p>Virtual CFO</p>
    <center><Button>Know More</Button></center>
    </Col>
    <Col className='servicescol' lg={3} md={6} sm={12}>
    <div className='icon'><AiOutlineRise/></div>
    <p>Virtual CFO</p>
    <center><Button>Know More</Button></center>
    </Col>
    
    </Row>
    <Row data-aos="fade-left" className='sercicerow'>
    
    <Col className='servicescol' lg={3} md={6} sm={12}>
    <div className='icon'><AiOutlineRise/></div>
    <p>Virtual CFO</p>
    <center><Button>Know More</Button></center>
    </Col>
    <Col className='servicescol' lg={3} md={6} sm={12}>
    <div className='icon'><AiOutlineRise/></div>
    <p>Virtual CFO</p>
    <center><Button>Know More</Button></center>
    </Col>
    <Col className='servicescol' lg={3} md={6} sm={12}>
    <div className='icon'><AiOutlineRise/></div>
    <p>Virtual CFO</p>
    <center><Button>Know More</Button></center>
    </Col>
    <Col className='servicescol' lg={3} md={6} sm={12}>
    <div className='icon'><AiOutlineRise/></div>
    <p>Virtual CFO</p>
    <center><Button>Know More</Button></center>
    </Col>
    
    </Row>
    
    
    </Container>
    
    
    
    </div>
  )
}

export default Service