import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("Enter text here");

    const handleUpClick =  ()=> {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text converted to uppercase!", "success")

    }

    const handleLowClick =  ()=> {
        let newText2 = text.toLowerCase();
        setText(newText2);
        props.showAlert("Text converted to lowercase!", "success")

    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleClearClick = ()=>{
        setText("");
        props.showAlert("Text cleared!", "success")

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
            <div className="mb-3" style={{color:props.mode === 'dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
            <textarea className="form-control" value = {text} id="myText" rows="10" onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark'?'grey':'white', color:props.mode === 'dark'?'white':'black'}}> </textarea>
            </div>
            <button className = "btn btn-sm btn-success" type="submit" class="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Upper Case</button>
            <button className = "btn btn-sm btn-success" type="submit" class="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lower Case</button>
            <button className = "btn btn-sm btn-success" type="submit" class="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>

            </div>
        
        </div>
        <div className="container" style={{color:props.mode === 'dark'?'white':'black'}}>
            <h2>Your text summary</h2>
            <p> Number of words: {countWords()}, Number of characters: {text.length}</p>
            <p> Approximate reading time: {countWords() * 0.008} minutes </p> 
            {/* Average reading time per word was taken from google */}
        </div>
    </>
  )
}
