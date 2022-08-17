import React, { useState } from "react";

export default function TextForm(props) {

  const handleUpClick = () => {
    // console.log("Uppercase Clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleDownClick = () => {
    // console.log("Uppercase Clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="container" style={{color : props.mode==='dark' ? 'white' : 'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor : props.mode==='dark' ? 'grey' : 'white', color : props.mode==='dark' ? 'grey' : 'white'}}
            id="myBox"
            rows="6"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Covert to UpperCase
        </button>
        <button className="btn btn-success mx-3" onClick={handleDownClick}>
          Covert to LowerCase
        </button>
      </div>
      <div className="container my-3" style={{color : props.mode==='dark' ? 'white' : 'black'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something to preview"}</p>
      </div>
    </>
  );
}
