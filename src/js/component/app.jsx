import React, { useState } from "react";

const App = () => {
	const [taskName, setTaskName] = useState("");
	const [taskList, setTaskList] = useState([]);

	const addTask = () => {
		setTaskList([...taskList, { task: taskName }]);
		setTaskName("");
	};

	return (
		<div className="container">
			<div className="App">
				<h1>Todo's</h1>
				<label>Task</label>
				<input
					type="text"
					id="task"
					onChange={(e) => {
						setTaskName(e.target.value);
					}}
				/>
				<button onClick={addTask}>Add to list</button>

				{taskList.map((task) => {
					return <Task taskName={task.task} />;
				})}
			</div>
		</div>
	);
};
export default App;
