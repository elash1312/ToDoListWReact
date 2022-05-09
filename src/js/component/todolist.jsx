import React, { useEffect } from "react";

const TodoList = () => {
	const [todos, setTodos] = React.useState([]);
	const [task, setTask] = React.useState("");

	const getTodos = () => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/elash1312")
			.then((response) => response.json())
			.then((data) => {
				setTodos(data.map((item) => item.label));
			});
	};

	useEffect(() => {
		getTodos();
	}, []);

	const onKeyPress = (ev) => {
		if (ev.key === "Enter") {
			let newTodos = [...todos, task];
			setTodos(newTodos);
			setTask("");
			updateFetch(newTodos);
		}
	};

	const updateFetch = (newList) => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/elash1312", {
			method: "PUT",
			body: JSON.stringify(
				newList.map((item) => ({ label: item, done: false }))
			),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((resp) => {
				console.log(resp.ok); // will be true if the response is successfull
				console.log(resp.status); // the status code = 200 or code = 400 etc.
				console.log(resp.text()); // will try return the exact result as string
				return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
			})
			.then((data) => {
				//here is were your code should start after the fetch finishes
				console.log(data); //this will print on the console the exact object received from the server
			})
			.catch((error) => {
				//error handling
				console.log(error);
			});
	};

	const deleteTodos = (index) => {
		const newList = todos.filter((todo, j) => index != j);
		setTodos(newList);
		setTask("");
		updateFetch(newList);
	};

	return (
		<div>
			<input
				value={task}
				onChange={(ev) => setTask(ev.currentTarget.value)}
				onKeyDown={(ev) => {
					onKeyPress(ev);
				}}
			/>
			<ul className="ul">
				{todos.map((todo, index) => (
					<li className="li" key={index}>
						{todo}{" "}
						<button
							className="x btn btn-warning btn-circle btn-lg text-center font-weight-bold"
							onClick={() => {
								deleteTodos(index);
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
