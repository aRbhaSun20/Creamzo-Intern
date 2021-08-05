import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Home/Home";
import NavBar from "../Components/NavBar/NavBar";
import EndSection from "../Components/EndSection/EndSection";
<<<<<<< HEAD
import Discover from "./Discover/Discover.jsx"
import ContactPage from "./Contact/ContactPage";
=======
import About from "./AboutUs/About";
>>>>>>> 1914dde9ba71a60d6474d6d66eaa2ddcc14cb2fb

const Routes = () => {
	return (
		<React.Fragment>
			<Router>
				<div className="App">
					<NavBar />
					<Switch>
						<Route path="/" exact component={Home}></Route>
<<<<<<< HEAD
						<Route path="/discover" exact component={Discover}></Route>
						<Route path="/contact" exact component={ContactPage}></Route>
=======
						<Route path="/" exact component={About}></Route>

>>>>>>> 1914dde9ba71a60d6474d6d66eaa2ddcc14cb2fb
					</Switch>
					<EndSection />
				</div>
			</Router>
		</React.Fragment>
	);
};

export default Routes;
