//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import App from "./component/app.jsx";
import Todoform from "./component/todoform";

//render your react application
ReactDOM.render(
	<div>
		<App />, <Todoform />
	</div>,
	document.querySelector("#app")
);
