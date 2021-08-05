import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Home/Home";
import NavBar from "../Components/NavBar/NavBar";
import EndSection from "../Components/EndSection/EndSection";
import About from "./AboutUs/About";
import Discover from "./Discover/Discover";
import ContactPage from "./Contact/ContactPage";
import Blog from "./Blog/Blog";
import Article from "../Components/Blog/Article/Article";
import BlogArticles from "./BlogArticles/BlogArticles";

const Routes = () => {
	return (
		<React.Fragment>
			<Router>
				<div className="App">
					<NavBar />
					<Switch>
						<Route path="/" exact component={Home}></Route>
						<Route path="/about" exact component={About}></Route>
						<Route path="/discover" exact component={Discover}></Route>
						<Route path="/contact" exact component={ContactPage}></Route>
						<Route path="/blog" exact component={Blog}></Route>
						<Route path="/articles" exact component={BlogArticles}></Route>
						<Route path="/articleitem" exact component={Article}></Route>
					</Switch>
					<EndSection />
				</div>
			</Router>
		</React.Fragment>
	);
};

export default Routes;
