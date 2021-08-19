import React, { useContext } from "react";
import NavBarAfter from "./NavBarAfter";
import NavBarBefore from "./NavBarBefore";
import { LoginContext } from "../../Context/Login";

const NavBar = () => {
	// eslint-disable-next-line
	const [login, setLogin] = useContext(LoginContext);
	return (
		<React.Fragment>
			{login ? <NavBarAfter /> : <NavBarBefore />}
		</React.Fragment>
	);
};

export default NavBar;
