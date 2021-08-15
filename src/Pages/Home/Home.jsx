import React, { useContext } from "react";

import "./style/style.css";
import HomeBefore from "./HomeBefore";
import HomeAfter from "./HomeAfter";
import { LoginContext } from "../../Context/Login";

const Home = () => {
	// eslint-disable-next-line
	const [login, setLogin] = useContext(LoginContext);
	return (
		<React.Fragment>{login ? <HomeAfter /> : <HomeBefore />}</React.Fragment>
	);
};

export default Home;
