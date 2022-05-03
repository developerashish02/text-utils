import React, { useState } from "react";

function TextForm(props) {
	const [text, setText] = useState(" ");

	function handleUpClick(event) {
		const upper = text.toUpperCase();
		if (upper === " ") {
			props.showAlert("text not shoud be empty", "warning");
			return;
		}
		setText(upper);
		props.showAlert("Converted to uppercase 🎉", "success");
	}

	function handleLoClick() {
		const low = text.toLowerCase();
		if (low === " ") {
			props.showAlert("text not shoud be empty", "warning");
			return;
		}
		setText(low);
		props.showAlert("Converted to lowercase 🔥", "success");
	}

	function handleOnChnage(e) {
		setText(e.target.value);
	}

	function handleClear() {
		setText("");

		if (text === ' ') {
			props.showAlert("Alredy Clear", "warning");
			return;
		}
		props.showAlert("clear text 😊", "success");
	}
	return (
		<>
			<div className="container my-3  " style={{ color: props.mode === "dark" ? "white" : "#0f0f27" }}>
				<h2>Enter the text to analyze below</h2>
				<h3>{props.text}</h3>
				<textarea style={{
					backgroundColor: props.mode === "dark" ? "gray" : "white",
					color: props.mode === "dark" ? "white" : "#0f0f27",
				}}
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

			<div
				className="container my-2"
				style={{ color: props.mode === "dark" ? "white" : "#0f0f27" }}
			>
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
