import React from "react";

//include images into your bundle

//create your first component
const Footer = () => {
	return (
		<div className="container-fluid">
			<div className="row">
				<footer className="footer mt-auto py-3 bg-success text-warning">
					<p>
						Made by Erin Lash @{" "}
						<a href="http://www.4geeksacademy.com">
							4Geeks Academy
						</a>
						, with 💔!
					</p>
				</footer>
			</div>
		</div>
	);
};

export default Footer;
