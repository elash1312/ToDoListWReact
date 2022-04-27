import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Footer = () => {
	return (
		<div class="container-fluid">
			<div className="row">
				<div className="footer">
					<p>
						Made by Erin Lash @{" "}
						<a href="http://www.4geeksacademy.com">
							4Geeks Academy
						</a>
						, with 💔!
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
