import React from 'react'
import { AiOutlineRise } from "react-icons/ai";
import "../Services/Services.css"
import {Container,Row,Col} from "react-bootstrap";

function Service() {
  return (
    <div className='services'>
    <Container>
    
    <Row className='sercicerow'>
    
    <Col className='servicescol' lg={3} md={6} sm={12}>
    <div className='icon'><AiOutlineRise/></div>
    <p>Virtual CFO</p>
    </Col>
    <Col className='servicescol' lg={3} md={6} sm={12}>
    <div className='icon'><AiOutlineRise/></div>
    <p>Virtual CFO</p>
    </Col>
    <Col className='servicescol' lg={3} md={6} sm={12}>
    <div className='icon'><AiOutlineRise/></div>
    <p>Virtual CFO</p>
    </Col>
    <Col className='servicescol' lg={3} md={6} sm={12}>
    <div className='icon'><AiOutlineRise/></div>
    <p>Virtual CFO</p>
    </Col>
    
    </Row>
    <Row className='sercicerow'>
    
    <Col className='servicescol' lg={3} md={6} sm={12}>
    <div className='icon'><AiOutlineRise/></div>
    <p>Virtual CFO</p>
    </Col>
    <Col className='servicescol' lg={3} md={6} sm={12}>
    <div className='icon'><AiOutlineRise/></div>
    <p>Virtual CFO</p>
    </Col>
    <Col className='servicescol' lg={3} md={6} sm={12}>
    <div className='icon'><AiOutlineRise/></div>
    <p>Virtual CFO</p>
    </Col>
    <Col className='servicescol' lg={3} md={6} sm={12}>
    <div className='icon'><AiOutlineRise/></div>
    <p>Virtual CFO</p>
    </Col>
    
    </Row>
    
    
    </Container>
    
    
    
    </div>
  )
}

export default Service