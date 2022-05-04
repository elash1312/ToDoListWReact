import React from "react";

const TodoList = () => {
	const [todos, setTodos] = React.useState([]);
	const [task, setTask] = React.useState("");

	const getTodos = () => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/elash1312")
			.then((response) => response.json)
			.then((data) => setTodos(data));
	};

	return (
		<div>
			<input
				value={task}
				onChange={(ev) => setTask(ev.currentTarget.value)}
				onKeyDown={(ev) => {
					if (ev.key === "Enter") {
						setTodos([...todos, task]);
						setTask("");
						// const newList = [...todos, task];
						// setTask(newList);
						// setTask("");
					}
				}}
			/>
			<ul className="ul">
				{todos.map((todo, index) => (
					<li className="li" key={index}>
						{todo}{" "}
						<button
							className="x btn btn-warning btn-circle btn-lg text-center font-weight-bold"
							onClick={() => {
								const newList = todos.filter(
									(todo, j) => index != j
								);
								setTodos(newList);
								setTask("");
							}}>
							x
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};
export default TodoList;
