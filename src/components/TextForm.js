import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("Enter text here");

    const handleUpClick =  ()=> {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowClick =  ()=> {
        let newText2 = text.toLowerCase();
        setText(newText2);
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    
    const countWords = () =>{
        let allWords = text.split(" ")

        let count = 0;

        if(text.length == 0){
            return 0;
        }
        // else{
        //     return allWords.length;
        // }

        for(let word of allWords){
            if (word != ""){
                count ++;
            }
        }
        return count;
    }

  return (

    <>
        <div>
            <div className='container my-5'>
            <div className="mb-3">
                <h1>{props.heading}</h1>
            <textarea className="form-control" value = {text} id="myText" rows="10" onChange={handleOnChange}></textarea>
            </div>
            <button className = "btn btn-sm btn-success" type="submit" class="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Upper Case</button>
            <button className = "btn btn-sm btn-success" type="submit" class="btn btn-primary" onClick={handleLowClick}>Convert to Lower Case</button>

            </div>
        
        </div>
        <div className="container">
            <h2>Your text summary</h2>
            <p> Number of words: {countWords()}, Number of characters: {text.length}</p>
            <p> Approximate reading time: {countWords() * 0.008} minutes </p> 
            {/* Average reading time per word was taken from google */}
        </div>
    </>
  )
}
