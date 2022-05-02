import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
function App() {
	const [mode, setMode] = useState("light");
	const [text, setText] = useState('Enable Dark Mode');
	const toggleMode = () => {
		if (mode === "light") {
			setMode("dark");
			setText('Enable Light Mode');
			document.body.style.backgroundColor = '#0f0f27';

		} else {
			setMode("light");
			setText('Enable Dark Mode')
			document.body.style.backgroundColor = 'white';
		}
	};
	return (
		<BrowserRouter>
			<div className="App">
				<Navbar
					mode={mode}
					toggleMode={toggleMode}
					text={text}
				/>
				<Routes>
					<Route path="/" element={<TextForm mode={mode} />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
