import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  // state for enabling dark mode in the whole app 
  const [mode, setMode] = useState('light');

  const toggleMode = ()=>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "grey";
    }else{
      setMode('light');
      document.body.style.backgroundColor = "white";

    }
    
  }
  return (  
    <>
  <Navbar title="Text Utility" aboutText = "About" mode = {mode} toggleMode = {toggleMode}/>
  <TextForm heading= "Enter your text here" mode = {mode}/>
  {/* <About/> */}
    </>
  )
}

export default App;
