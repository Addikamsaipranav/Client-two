import React, { useEffect,useState } from 'react';
import './App.css';
import Aos from "aos";
import "aos/dist/aos.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../src/Navbar/Navbar"
import GridLoader from "react-spinners/GridLoader";
import Testing from "../src/Testing"
import VirtualCfo from './ServicesList/VirtualCfo';

function App() {
  const [loading,setLoading]=useState(false)
  useEffect(()=>{
     setLoading(true)
     setTimeout(()=>{
         setLoading(false)
     },1000)
  },[])
  useEffect(()=>{
    Aos.init({duration:2000});
  },[]);
  return (
    <div className="App">
    {
      loading ?
      <div className='loader'>
      <GridLoader
       color={"black"} loading={loading}  size={10} />
      </div>
      :
    <Navbar/>
    }
       
    </div>
  );
}

export default App;
