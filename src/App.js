import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";

function App() {
	const [alert, setAlert] = useState(null);
	const [mode, setMode] = useState("light");
	const [text, setText] = useState("Enable Dark Mode");
	// Alert
	const showAlert = (message, type) => {
		setAlert({
			msg: message,
			type: type,
		});

		setTimeout(() => {
			setAlert(null);
		}, 2000);
	};

	// dark mode
	const toggleMode = () => {
		if (mode === "light") {
			setMode("dark");
			setText("Enable Light Mode");
			document.body.style.backgroundColor = "#0f0f27";
			showAlert("Dark Mode has been Enabled", "success");
		} else {
			setMode("light");
			setText("Disable	 Dark Mode");
			document.body.style.backgroundColor = "white";
			showAlert("Light Mode has been Enabled", "success");
		}
	};
	return (
		<BrowserRouter>
			<div className="App">
				<Navbar mode={mode} toggleMode={toggleMode} text={text} />
				<Alert alert={alert} />
				<Routes>
					<Route
						exact
						path="/"
						element={<TextForm mode={mode} showAlert={showAlert} heading = " Try TextUtils - Word Counter , Character Counter , Remove extra spaces "/>}
					/>
					<Route exact path="/about" element={<About mode={mode} />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
