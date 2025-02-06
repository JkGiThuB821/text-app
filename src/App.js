import { useState } from 'react';
import React from "react";
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import Footer from './components/Footer';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import { Footer } from './components/Footer';



function App() {
  // state for enabling dark mode in the whole app 
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(()=>{
      setAlert(null);

    }, 3000)
  }


  const toggleMode = ()=>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success")

    }else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success")

    }
    
  }
  return (  
    <>
  <Router>

    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
    }}>
   
  <Navbar title="Text Utility" aboutText = "About" mode = {mode} toggleMode = {toggleMode}/>
  <Alert alert = {alert}/>
  {/* <About/> */}
        <div className='content'style={{flex:1}}>
          <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}>
          </Route>
          <Route exact path="/" element={<TextForm heading= "Enter your text here" mode = {mode} showAlert= {showAlert}/>}>
          </Route>
        </Routes>
        </div>
  <Footer/>
  </div>
  </Router>

    </>
  )
}

export default App;
