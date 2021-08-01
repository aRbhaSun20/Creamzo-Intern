import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Home/Home";
import Login from "../Components/Login/Login";
import NavBar from "../Components/NavBar/NavBar";
import EndSection from "../Components/EndSection/EndSection";
class Routes extends Component {
	state = {};
	render() {
		return (
			<React.Fragment>
				<Router>
					<div className="App">
						<NavBar />
						<Switch>
							<Route path="/" exact component={Home}></Route>
							<Route path="/login" exact component={Login}></Route>
						</Switch>
						<EndSection />
					</div>
				</Router>
			</React.Fragment>
		);
	}
}

export default Routes;
