import React from "react";

const TodoList = () => {
	const [todos, setTodos] = React.useState([]);
	const [task, setTask] = React.useState("");

	return (
		<div>
			<input
				value={task}
				onChange={(ev) => setTask(ev.currentTarget.value)}
				onKeyDown={(ev) => {
					if (ev.key === "Enter") {
						setTodos([...todos, task]);
						setTask("");
					}
				}}
			/>
			<ul>
				{todos.map((todo, index) => (
					<li key={index}>{todo}</li>
				))}
			</ul>
		</div>
	);
};
export default TodoList;
