import React,{useState,useEffect} from 'react'
import {Container,Row,Col} from "react-bootstrap"
import "../src/Testing.css"
import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css'
import img1 from "../src/images/contact.jpg"
import GridLoader from "react-spinners/GridLoader";
import ToolTipdata from './ToolTipdata'
function Testing() {
   const [loading,setLoading]=useState(false)
  useEffect(()=>{
     setLoading(true)
     setTimeout(()=>{
         setLoading(false)
     },1000)
  },[])
    let x=-1;
    const [show,setShow] =useState("")
  return (
    <div>
    <Container className='laptop'>
    <Row>
    <Col>
    <Row><button  onClick={()=>{
        x=x+1
        x%2==0 ?  setShow("virtualcfo") : setShow("")
       
        
    }}>virtual cfo</button></Row>
    <Row><button onClick={()=>setShow("finance")}>finance</button></Row>
    
    </Col>
    <Col>
       {show === "virtualcfo" && <div ><p>janu i love you </p></div>} 
       {show === "finance" && <div><p>janu i hate you janu</p></div>}   
    </Col>
    </Row>
    
    </Container>

    <Container className='mobile'>
    
    <Row>
    <Col sm={12}>
    <Row><button  onClick={()=>setShow("virtualcfo")}>virtual cfo</button></Row>
   <Row> 
   {show === "virtualcfo" && <div><p className='jjj'>janu i love you mmmm</p></div>}
   
   </Row>
    
    </Col>
    <Col sm={12}>
    <Row><button  onClick={()=>setShow("finance")}>finance</button></Row> 
      <Row> {show === "finance" && <div><p className='jjj'>janu i hate you mmmm</p></div>}   </Row>
    </Col>
    </Row>
    
    </Container>
    <Container>
    
    <Row>
    <Col >
    <Tippy placement='top-start' content={<ToolTipdata/>}>
    <img  className='hlo' src={img1}/>
    </Tippy>
     
    </Col>
    <Col>
    <img  className='hlo' src={img1}/>
   </Col>
   <Col>
   <img  className='hlo' src={img1}/>
  </Col>
  <Col >
  <Tippy className='tipy' placement='top' animation='fade' inertia="true" content={<ToolTipdata/>}>
    <img  className='hlo' src={img1}/>
    </Tippy>
 </Col>
 <Col >
 <img  className='hlo' src={img1}/>
</Col>
    </Row>
    
    </Container>


    <Container>
    
    <Row>
 <Col ></Col>
 <Col ></Col>
 <Col ></Col>
 <Col >hlo</Col>
 <Col ></Col>
 <Col ></Col>
    </Row>
    <Row>
 <Col></Col>
 <Col></Col>
 <Col>hlo</Col>
 <Col >hlo</Col>
 <Col>hlo</Col>
 <Col></Col>
    </Row>
    <Row>
 <Col ></Col>
 <Col lg={2} md={2} sm={12}>hlo</Col>
 <Col lg={2} md={2} sm={12}>glo</Col>
 <Col lg={2} md={2} sm={12}>hlo</Col>
 <Col lg={2} md={2} sm={12}>glo</Col>
 <Col lg={2} md={2} sm={12}>jll</Col>
    </Row>
    <Row>
 <Col lg={2} md={2} sm={12}></Col>
 <Col lg={2} md={2} sm={12}></Col>
 <Col lg={2} md={2} sm={12}>jjj</Col>
 <Col lg={2} md={2} sm={12}>hlo</Col>
 <Col lg={2} md={2} sm={12}>jlo</Col>
 <Col lg={2} md={2} sm={12}></Col>
    </Row>
    <Row>
 <Col lg={2} md={2} sm={12}></Col>
 <Col lg={2} md={2} sm={12}></Col>
 <Col lg={2} md={2} sm={12}></Col>
 <Col lg={2} md={2} sm={12}>hlo</Col>
 <Col lg={2} md={2} sm={12}></Col>
 <Col lg={2} md={2} sm={12}></Col>
    </Row>
    
   

    
    
    </Container>
    </div>
  )
}

export default Testing