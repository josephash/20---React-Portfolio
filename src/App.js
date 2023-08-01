import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Project from "./components/Project";

function App() {
	return (
		<div className="d-flex flex-column justify-content-between align-items-stretch bg-secondary maxsize">
			<Nav />
			<Project />
			<Footer />
		</div>
	);
}

export default App;