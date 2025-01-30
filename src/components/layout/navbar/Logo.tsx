import logo from "@/assets/image/logo.png";
import React from "react";
import { Link } from "react-router-dom";

const Logo: React.FC = () => {
	return (
		<Link to="/">
			<img src={logo} alt="" />
		</Link>
	);
};

export default Logo;
