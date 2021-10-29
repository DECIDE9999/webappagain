import logo from "./logo.svg";
import "./App.css";

function Test() {
	console.log("Test");
}

function App() {
	Test();
	return (
		<div className="App">
			<header className="App-header">
				<img
					src={logo}
					className="App-logo"
					alt="logo"
				/>
				<p>thanushen</p>
				<div>Thanushen</div>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
