import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div class="container-fluid">
			<h1 className="text-center mt-5">To-Do's</h1>
			<p>
				Made by Erin Lash @{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				💔!
			</p>
		</div>
	);
};

export default Home;
