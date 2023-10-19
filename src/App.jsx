import { useState } from "react";
import Header from "./components/Header";
import Repos from "./components/Repos";
import "./index.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="main">
			<Header />
			<Repos />
		</div>
	);
}

export default App;
