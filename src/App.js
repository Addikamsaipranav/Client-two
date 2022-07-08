import React, { useEffect } from 'react';
import './App.css';
import Aos from "aos";
import "aos/dist/aos.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../src/Navbar/Navbar"
function App() {
  useEffect(()=>{
    Aos.init({duration:2000});
  },[]);
  return (
    <div className="App">
       <Navbar/>
    </div>
  );
}

export default App;
