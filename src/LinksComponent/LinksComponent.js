import React ,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import {Table} from "react-bootstrap"
import "../LinksComponent/LinkComp.css"
import Aos from 'aos'
import "aos/dist/aos.css";
function LinksComponent() {

  useEffect(()=>{
    Aos.init({duration:2000});
  },[])

  return (
    <div>
   
           <div data-aos="flip-up" className="links">
           <Table>
           <thead>
             <tr>
              
               <th>.<br/></th>
               <td>VirtualCFO</td>
             </tr>
           </thead>
           <tbody>
             <tr>
             <th>.<br/></th>
               <td><span>Accounting Services</span></td>
             </tr>
             <tr>
               <th>. <br/></th>
               <td><span>AR & AP</span> <br/></td>
            </tr>
             <tr>
               <th>.<br/></th>
               <td> <span>Audit & Assurance</span> <br/></td>
            </tr>

            <tr>
               <th>. <br/></th>
               <td><span>Taxation</span> <br/></td>
             </tr>
             <tr>
               <th>. <br/> </th>
               <td><span>Corporate Law</span> <br/></td>
            </tr>
            <tr>
            <th>.<br/></th>
            <td> <span>Treasury Management</span> <br/></td>
            </tr>
            <tr>
            <th>.<br/></th>
            <td><span>Other Services</span> <br/></td>
            </tr>
           </tbody>
         </Table>
            </div>
           
        
    </div>
  )
}

export default LinksComponent