import React, { useState } from "react";

function TextForm(props) {
    const [text, setText] = useState("Enter the text ");
    
    function handleUpClick(event) {
        const upper = text.toUpperCase(); 
        setText(upper); 
    }

    function handleOnChnage(e) {
        setText(e.target.value); 
    }
	return (
		<div className="my-3">
			<div className="mb-3">
				<div className="container my-3 ">
					<h3>{props.text}</h3>
					<textarea className="form-control" id="my-box" rows="8" value={text}  onChange={handleOnChnage}>
						
					</textarea>
					<button className="btn btn-primary my-3" onClick={handleUpClick} >Convert To Uppercase</button>
				</div>
			</div>
		</div>
	);
}



export default TextForm;
