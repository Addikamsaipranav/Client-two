import react,{useState,useEffect,useRef} from "react";
import "../Contact/Contact.css"
import {Form,Button, Container} from 'react-bootstrap';
import {Row,Col,Table} from  "react-bootstrap"

import {SiGooglemaps } from "react-icons/si";
import { FiUsers ,FiPhone } from "react-icons/fi";
import {HiOutlineMail} from "react-icons/hi"


const Contact=()=>{
  
 

 
    return(
        <div className="contact">
          <Container fluid className="full">
          
          <Row className="contactrow">
          
          <Col className="contactcol1" lg={6} md={6} sm={12}>
            <h1 className="contactcol1heading">Send a message</h1>
               <Form className="contactform">
                
               <Row>
                 <Col>
                    <Form.Control className="input" placeholder="Name" />
                 </Col>
                 <Col>
                     <Form.Control className="input" placeholder="Email" />
                 </Col>
                 </Row>

                 <Row className="formrow">
                  <Col>
                      <Form.Control className="input" placeholder="Phone-No" />
                  </Col>
                  <Col>
                  <Form.Control className="input" placeholder="Country" />
                  </Col>
                </Row>
                
                <Row className="formrow">
                
                <Col>
                <Form.Control className="input" size="lg" type="text" placeholder="Large text" />
              </Col>
              
              </Row>
              <Row className="formrow">
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            
            <Form.Control className="inputtextarea" as="textarea" rows={9} />
  </Form.Group>
              </Row>
              <Button className="button"><h3>Submit</h3></Button>
                </Form>
          </Col>

          <Col className="contactcol2" lg={6} md={6} sm={12}>
        <Row className="contactcol2row1">
        
        <div className="info">
        <h1> Let's Get in touch</h1>
        <p>For any accounting and financial works you can contact me by submitting this form</p>
        </div>
        <table className="virtualtable">
        <tr className="virtualtr">
          <td><FiUsers/></td>
          <td>Name</td>
         </tr>
          <tr className="virtualtr">
          <td className="none"></td>
          <td>Prudence Accounting Solutions</td>
         </tr>
          <tr className="virtualtr">
          <td className="icons"><SiGooglemaps/></td>
          <td>Address</td>
         </tr>
          <tr className="virtualtr">
          <td></td>
          <td>7,KHB colony,</td>
         </tr>
          <tr>
          <td></td>
          <td>7th block,Koramangala,</td>
         </tr>
          <tr>
          <td></td>
          <td>Bengaluru, Karnataka</td>
         </tr>
          <tr>
          <td className="icons"><HiOutlineMail/></td>
          <td>Email</td>
         </tr>
         <tr>
          <td></td>
          <td><a className="emaill" href="mailto:info@prudenceadvisory.in" >info@prudenceadvisory.in</a></td>
         </tr>
     </table>

        </Row>
        
          </Col>
          </Row>
         <Row className="map">
         <iframe data-aos="fade-up" className='iframe' width="1080" height="423" id="gmap_canvas" src="https://maps.google.com/maps?q=7,KHB%20colony,%207th%20block,Koramangala,%20Bengaluru,%20Karnataka&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
         
         </Row>
          </Container> 
        </div>
        
    )
}

export default  Contact;