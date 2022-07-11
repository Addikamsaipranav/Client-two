import React from 'react'
import "../LandingStarting/Start.css"
import ss from "../images/Invoice.gif"
import {Link} from "react-router-dom"
import {Container,Col,Row} from "react-bootstrap"
function Start() {
  return (
    <div className='start'>
    <Container fluid className='containerstart'>
    <Row className="flex-column-reverse flex-md-row">
    <Col>
       Col one text with button
    </Col>
    <Col>
     rotating imagess
    css will be there in start.css

    i will keep padding left and right for the Container such that it will get adjusted as per services and about in home page
    you juz write code in these cols and pls use icons in place of logos ?
    #Lets make the website animated bro
    
    </Col>
    
    </Row>
    </Container>
    </div>
  )
}

export default Start