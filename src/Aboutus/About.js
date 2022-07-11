import React ,{useState,useEffect} from 'react'
import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css'
import "../Aboutus/About.css"
import img2 from "../images/10624.jpg"
import img1 from "../images/contact.jpg"
import {Container,Row,Col} from "react-bootstrap"
import ToolTipdata from '../ToolTipdata'
import GridLoader from "react-spinners/GridLoader";
function About() {  const [loading,setLoading]=useState(false)
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
    <center><h1 className='ourteamhead'>Our amazing team</h1></center>
    <Container className='ourteam'>
       
    <Row>
    <Col >
  <Tippy className='tipy' placement='top' animation='fade' inertia="true" content={<ToolTipdata/>}>
    <img data-aos="fade-up" className='hlo' src={img1}/>
    </Tippy>
 </Col>
 <Col >
 <Tippy className='tipy' placement='down' animation='fade' inertia="true" content={<ToolTipdata/>}>
   <img data-aos="fade-down"  className='hlo' src={img2}/>
   </Tippy>
</Col>
<Col >
<Tippy className='tipy' placement='top' animation='fade' inertia="true" content={<ToolTipdata/>}>
  <img data-aos="fade-up"  className='hlo' src={img1}/>
  </Tippy>
</Col>
<Col >
<Tippy className='tipy' placement='down' animation='fade' inertia="true" content={<ToolTipdata/>}>
  <img data-aos="fade-down"  className='hlo' src={img1}/>
  </Tippy>
</Col>
<Col >
<Tippy className='tipy' placement='top' animation='fade' inertia="true" content={<ToolTipdata/>}>
  <img data-aos="fade-up"  className='hlo' src={img1}/>
  </Tippy>
</Col>
    </Row>
    
    </Container>
    </div>
    }
    </div>
  )
}

export default About