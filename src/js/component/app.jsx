import React from "react";
// import Todoform from "./todoform.jsx";
import Todolist from "./todolist.jsx";
import Footer from "./footer.jsx";

function App() {
	return (
		<div className="container-fluid bg-success text-light">
			<div className="list bg-success">
				<div className="todo-app text-center">
					<h1 className="title">To-do's</h1>
					<Todolist />
					<Footer />
				</div>
			</div>
		</div>
	);
}
export default App;
