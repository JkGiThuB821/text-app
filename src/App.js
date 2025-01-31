import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';


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
  <Navbar title="Text Utility" aboutText = "About" mode = {mode} toggleMode = {toggleMode}/>
  <Alert alert = {alert}/>
  <TextForm heading= "Enter your text here" mode = {mode} showAlert= {showAlert}/>
  {/* <About/> */}
    </>
  )
}

export default App;
