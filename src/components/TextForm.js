import React, { useState } from "react";

function TextForm(props) {
	const [text, setText] = useState(" ");

	function handleUpClick(event) {
		const upper = text.toUpperCase();
		setText(upper);
	}

	function handleLoClick() {
		const low = text.toLowerCase();
		setText(low);
	}

	function handleOnChnage(e) {
		setText(e.target.value);
	}

	function handleClear() {
		setText("");
	}
	return (
		<>
			<div className="container my-3 ">
				<h3>{props.text}</h3>
				<textarea
					style={{
						backgroundColor: props.mode === 'dark' ? 'gray' : 'white',
						color: props.mode === 'dark' ? 'white' : '#0f0f27'
					}
					}
					placeholder="Enter the text"
					className="form-control"
					id="my-box"
					rows="8"
					value={text}
					onChange={handleOnChnage}
				></textarea>
				<button className="btn btn-primary my-3" onClick={handleUpClick}>
					Convert To Uppercase
				</button>
				<button className="btn btn-warning my-3 mx-3" onClick={handleLoClick}>
					Convert To Lowercase
				</button>
				<button className="btn btn-dark my-3 mx-3" onClick={handleClear}>
					Clear Text
				</button>
			</div>

			<div className="container my-2" style={{ color: props.mode === 'dark' ? 'white' : '#0f0f27' }}>
				<h2>Your Text Summery</h2>
				<p>
					{text.split(" ").length} words and {text.length}
				</p>
				<h2>Preview</h2>
				<p>{text}</p>
			</div>
		</>
	);
}

export default TextForm;
