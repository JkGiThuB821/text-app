import React, { useState } from 'react'

const About = (props) => {

    // const [myStyle, setMyStyle] = useState({
    //      color: "black",
    //     backgroundColor: "white"
    // })

    // const [btnText, setBtnText] = useState("Enable Dark Mode")

    // const toggleStyle = ()=>{
    //     if (myStyle.color == "black"){
    //         setMyStyle({
    //      color: "white",
    //      backgroundColor: "black",
    //      border: "1px solid white"
    //     })
    //     setBtnText("Enable Light Mode")
    //     }
    //     else{
    //         setMyStyle({
    //             color: "black",
    //             backgroundColor: "white"
    //            })
    //          setBtnText("Enable Dark Mode")
    //     }
    // }
    
  return (
    <div className='container' style={{backgroundColor:props.mode === 'dark'?'#042743':'white', color:props.mode === 'dark'?'white':'black'}} >
        <h1 className='my-4'>About Us</h1>
            <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button"  style={{backgroundColor:props.mode === 'dark'?'grey':'white', color:props.mode === 'dark'?'white':'black'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    #1 Transform your text 
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    Instantly change your text to uppercase or lowercase with a single click, making text formatting quick and hassle-free.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={{backgroundColor:props.mode === 'dark'?'grey':'white', color:props.mode === 'dark'?'white':'black'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    #2 In depth Text Analysis
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                Track the word and character count along with an estimated reading time, helping you refine your content effectively.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={{backgroundColor:props.mode === 'dark'?'grey':'white', color:props.mode === 'dark'?'white':'black'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    #3 User-friendly and customisable
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" >
                With dark mode support and real-time alerts, the app enhances usability while providing a smooth and engaging experience.
                </div>
                </div>
            </div>
            </div>

      
    </div>
  )
}

export default About
