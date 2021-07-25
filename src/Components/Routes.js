import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./Login/Login";

class Routes extends Component {
	state = {};
	render() {
		return (
            <React.Fragment>
                <Router>
				<div className="App">
					<Switch>
						<Route path="/" exact></Route>
						<Route path="/login" component={Login}></Route>
					</Switch>
				</div>
			</Router>
            </React.Fragment>
			
		);
	}
}

export default Routes;
