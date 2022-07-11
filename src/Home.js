import React ,{useState,useEffect} from 'react'
import {Link} from "react-router-dom"
import GridLoader from "react-spinners/GridLoader";
import Landing from './Landing/Landing';
import { AiOutlineRise ,AiFillBank,AiFillCreditCard,AiFillCalendar,AiFillDatabase,AiFillDropboxSquare,AiFillGoogleCircle} from "react-icons/ai";
import "../src/Services/Services.css"
import {Container,Row,Col, Button} from "react-bootstrap";
import List from './LandingCompnayList/List';
import Slide from 'react-reveal/Slide';
import Start from './LandingStarting/Start';
import Footer from "../src/Footer/Footer"
function Home() {
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
    <div>
    <Start/>
    <Landing/>
    <div className='services'>
    <Container id="services">
   
    <center className="serviceheading">Pick Your Service</center>
    <Row   className='sercicerow'>
    
    <Col data-aos="fade-up" className='servicescol' lg={3} md={12} sm={12}>
    <div className='icon'><AiOutlineRise/></div>
    <p>Virtual CFO</p>
    <center> <Link to="/virtualcfo"><Button>Know More</Button></Link></center>
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
<List/>
<Footer/>
    </div>
    }
   
    
    </div>
  )
}

export default Home