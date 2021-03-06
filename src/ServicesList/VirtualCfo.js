import React ,{useState,useEffect} from 'react'
import GridLoader from "react-spinners/GridLoader";
import {Container,Row,Col} from "react-bootstrap"
import '../ServicesList/servicelist.css'
import Description from '../ServicesDescription/Description';
import LinksComponent from "../LinksComponent/LinksComponent"
function VirtualCfo() {
    const [loading,setLoading]=useState(false);
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
      <div className='servicedes'>
      <Container className="allservices">
      <Row>
        <Col lg={9} sm={12}>
      
        <div className="servicecontainer">

        <Col lg={9} sm={12}>
                  
        <div className="servicecard">
        <p className='servicedheading'>Books Keeping Services</p>
        <Description data="ERP selection and implementation"/>
       <Description data="Recording of journal entries"/>
       <Description data="Preparation of ledger accounts"/>
       <Description data="Preparation of monthly/yearly Profit & Loss account and Balance sheet in compliance with the Indian GAAP."/>
       <Description data="Inventory Managament"/>
       <Description data="Management audit"/>
       <Description data="Internal Audit"/>
       <Description data="Prepare MIS reports in a format and at a frequency as desired by the management of the Company."/>
       <Description data="Facilitate audit of accounts of the Company."/>
  </div>

  <div className="servicecard">
  <p className='servicedheading'>Payroll Services</p>
  <Description data="Salary processing and Payslip generation"/>
  <Description data="Expense reimbursement"/>
  <Description data="Leave Tracking"/>
  <Description data="TDS, PT, ESI and PF payment advice and monthly returns"/>
  <Description data="Allowances"/>
</div>
  
     </Col>
 </div> 
         </Col>

       <Col className="sidelinks" lg={3} sm={12}>
           <LinksComponent/>
       </Col>
      </Row>
      
    </Container>
      </div>
    }
    
    </div>
  )
}

export default VirtualCfo