import React from "react";
import "./Header.css";
import { useSelector } from "react-redux";

const Header = () => {
	const name = useSelector((state) => state.name);

	return (
		<header>
			<p> Header </p> <span> hi {name} </span>{" "}
		</header>
	);
};

export default Header;
