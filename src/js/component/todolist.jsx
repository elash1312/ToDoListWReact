import React, { useState } from "react";
import Todoform from "./todoform.jsx";

function Todolist() {
	const [todos, setTodos] = useState([]);

	const addTodo = (todo) => {
		if (!todo.text || /^\s*$/.test(todo.text)) {
			return;
		}
		const newTodos = [todo, ...todos];

		setTodos(newTodos);
		console.log(...todos);
	};
	return (
		<div>
			<h1>What's the Plan for Today?</h1>
			<Todoform onSubmit={addTodo} />
		</div>
	);
}

export default Todolist;
