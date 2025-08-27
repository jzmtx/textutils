import React ,{useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("UPPER CASEW WAS CLICKED"+text)
        let newtext=text.toUpperCase();
        setText(newtext)
        props.showAlert("converted to uppercase","success")
    }
     const handleLowClick=()=>{
        console.log("UPPER CASEW WAS CLICKED"+text)
        let newtext=text.toLowerCase();
        setText(newtext)
        props.showAlert("converted to lowercase","success") 
    }
     const hadleOnChange=(event)=>{
        console.log("onchanged")
        setText(event.target.value)
        props.showAlert("text changed","success")
    }
   
    const [text,setText]=useState("")
  return (
    <>
   
<div className="container mb-3" style={{color: props.mode==='dark'?'white':'#582cddff'}}>
    <h1>{props.heading}</h1>
  
  <textarea className="form-control" value={text} onChange={hadleOnChange} id="mybox" rows="8" style={{backgroundColor: props.mode==='dark'?'white':'#575250ff'}}></textarea><br />
  <button className="btn btn-primary" onClick={handleUpClick}>CONVERT TO UPPERCASE</button>
  <button className="btn btn-primary mx-2" onClick={handleLowClick}>CONVERT TO LOWERCASE</button>

</div>
   <div className="container my-2" style={{color: props.mode==='dark'?'white':'#5d6166'}}>
    <h3>YOUR TEXT SUMMARY</h3>
    <p>{text.split(" ").length} words and {text.length} characters </p>
    <p>minutesto read {0.008*text.split(" ").length}</p>
    <h2>PREVIEW </h2>
    <p>{text.length>0?text:"eneter something to preview"}</p>
   </div>
    
     </>
  )
}
