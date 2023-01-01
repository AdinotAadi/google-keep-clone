import logo from "./logo.svg";
import "./App.css";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://blog.logrocket.com/creating-a-google-keep-clone-with-react-and-firebase/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Make a Google Keep Clone
				</a>
			</header>
		</div>
	);
}

export default App;
