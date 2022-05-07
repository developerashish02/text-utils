import React, { useState } from "react";

function TextForm(props) {
	const [text, setText] = useState("");

	function handleUpClick(event) {
		const upper = text.toUpperCase();
		if (upper === " ") {
			props.showAlert("text not shoud be empty", "warning");
			return;
		}
		setText(upper);
		props.showAlert("Converted to uppercase 🎉", "success");
	}

	// converted to lowercase
	function handleLoClick() {
		const low = text.toLowerCase();
		if (low === " ") {
			props.showAlert("text not shoud be empty", "warning");
			return;
		}
		setText(low);
		props.showAlert("Converted to lowercase 🔥", "success");
	}

	// onChange this function help to  write the text in input not block input box
	function handleOnChnage(e) {
		setText(e.target.value);
	}

	// clear the all text
	function handleClear() {
		setText("");

		if (text === " ") {
			props.showAlert("Alredy Clear", "warning");
			return;
		}
		props.showAlert("clear text 😊", "success");
	}

	// copy text
	function handleCopy() {
		const text = document.getElementById("my-box");
		text.select();
		navigator.clipboard.writeText(text.value);
		document.getSelection().removeAllRanges(); 
		props.showAlert("text copy", "success");
	}

	// remove extra space
	const handleExtraSpaces = () => {
		let newText = text.split(/[ ]+/);
		setText(newText.join(" "));
		props.showAlert("Removed Extra spaces", "success");
	};
	return (
		<div className="container ms-5 my-3">
			<div style={{ color: props.mode === "dark" ? "white" : "#0f0f27" }}>
				<h2 className="mb-3">{props.heading}</h2>
				<h3>{props.text}</h3>
				{/* <div className="form-floating"> */}
				<textarea
					style={{
						backgroundColor: props.mode === "dark" ? "#1e213c" : "white",
						color: props.mode === "dark" ? "white" : "#0f0f27",
					}}
					className="form-control"
					id="my-box"
					rows="8"
					value={text}
					onChange={handleOnChnage}
				></textarea>
				{/* </div> */}

				<div className=" my-2  ">
					<button
						disabled={text.length === 0}
						className="btn btn-primary  mx-1 my-1"
						onClick={handleUpClick}
					>
						Convert To Uppercase
					</button>
					<button
						disabled={text.length === 0}
						className="btn btn-warning mx-1 my-1"
						onClick={handleLoClick}
					>
						Convert To Lowercase
					</button>
					<button
						className="btn btn-dark  mx-1 my-1"
						onClick={handleClear}
						disabled={text.length === 0}
					>
						Clear Text
					</button>

					<button
						disabled={text.length === 0}
						type="button"
						className="btn btn-info  mx-1 my-1"
						onClick={handleCopy}
					>
						Copy Text
					</button>

					<button
						disabled={text.length === 0}
						type="button"
						className="btn btn-secondary mx-1 m"
						onClick={handleExtraSpaces}
					>
						Remove Extra spaces
					</button>
				</div>
			</div>

			<div
				className="container my-2"
				style={{ color: props.mode === "dark" ? "white" : "#0f0f27" }}
			>
				<h2>Your Text Summery</h2>
				<p>
					{
						text.split(" ").filter((element) => {
							return element.length !== 0;
						}).length
					}{" "}
					words and {text.length} character
				</p>
				<h2>Preview</h2>
				<p>{text.length > 0 ? text : "Nothing to preview!"}</p>
			</div>
		</div>
	);
}

export default TextForm;
