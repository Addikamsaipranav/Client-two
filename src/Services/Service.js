import React ,{useState,useEffect} from 'react'
import { AiOutlineRise ,AiFillBank,AiFillCreditCard,AiFillCalendar,AiFillDatabase,AiFillDropboxSquare,AiFillGoogleCircle} from "react-icons/ai";
import "../Services/Services.css"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {Container,Row,Col, Button} from "react-bootstrap";
import GridLoader from "react-spinners/GridLoader";
function Service() {
  const [loading,setLoading]=useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
        setLoading(false)
    },1000)
 },[])
  return (
    <div>
    {
      loading ?
      <div className='loader'>
      <GridLoader
       color={"black"} loading={loading}  size={10} />
      </div>
      :
      <div className='services'>
      <Container>
      <center data-aos="flip-up" className="serviceheading">Pick Your Service</center>
      <Row   className='sercicerow'>
      
      <Col data-aos="fade-up" className='servicescol' lg={3} md={12} sm={12}>
      <div className='icon'><AiOutlineRise/></div>
      <p>Virtual CFO</p>
      <center><Button><Link to="/virtualcfo">Know More</Link></Button></center>
      </Col>
      <Col data-aos="fade-up" className='servicescol' lg={3} md={12} sm={12}>
      <div className='icon'><AiFillCreditCard/></div>
      <p>Credit</p>
      <center><Button>Know More</Button></center>
      </Col>
      <Col data-aos="fade-up" className='servicescol' lg={3} md={12} sm={12}>
      <div className='icon'><AiFillBank/></div>
      <p>Finance</p>
      <center><Button>Know More</Button></center>
      </Col>
      <Col data-aos="fade-up" className='servicescol' lg={3} md={12} sm={12}>
      <div className='icon'><AiFillCalendar/></div>
      <p>Calender</p>
      <center><Button>Know More</Button></center>
      </Col>
      
      <Col data-aos="fade-left" className='servicescol' lg={3} md={3} sm={12}>
      <div className='icon'><AiFillDatabase/></div>
      <p>Data</p>
      <center><Button>Know More</Button></center>
      </Col>
      <Col data-aos="fade-left" className='servicescol' lg={3} md={6} sm={12}>
      <div className='icon'><AiFillDropboxSquare/></div>
      <p>Drop box</p>
      <center><Button>Know More</Button></center>
      </Col>
      <Col data-aos="fade-left" className='servicescol' lg={3} md={6} sm={12}>
      <div className='icon'><AiFillGoogleCircle/></div>
      <p>Google</p>
      <center><Button>Know More</Button></center>
      </Col>
      <Col data-aos="fade-left" className='servicescol' lg={3} md={6} sm={12}>
      <div className='icon'><AiOutlineRise/></div>
      <p>Virtual CFO</p>
      <center><Button>Know More</Button></center>
      </Col>
      
      </Row>
      
      
      </Container>
      
      
      
      </div>
    }
    
    </div>
    
  )
}

export default Service