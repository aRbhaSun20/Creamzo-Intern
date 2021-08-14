import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";

import Home from "./Home/Home";
import NavBar from "../Components/NavBar/NavBar";
import EndSection from "../Components/EndSection/EndSection";
import About from "./AboutUs/About";
import Discover from "./Discover/Discover";
import ContactPage from "./Contact/ContactPage";
import Blog from "./Blog/Blog";
import BlogArticles from "./BlogArticles/BlogArticles";
import Articledisplay from "./ArticleDisplay/Articledisplay";
import Account from "./Account/Account";
import Tnc from "../Components/Tnc/Tnc";
import Teams from "../Pages/Team/Teams";
import Collection from "../Components/Collections/Collection";
import BoardCreation from "../Components/Board/BoardCreation";
import BoardDisplay from "../Components/Board/BoardDisplay";
import TermsAndConditions from "../Components/TermsAndConditions/TermsAndConditions";
const Routes = () => {
	return (
		<React.Fragment>
			<Router>
				<div className="App">
					<NavBar />
					<Switch>
						<Route
							path="/"
							exact
							render={(props) => <Home {...props} />}
						></Route>

						<Route
							path="/about"
							exact
							render={(props) => <About {...props} />}
						></Route>

						<Route
							path="/discover"
							exact
							render={(props) => <Discover {...props} />}
						></Route>

						<Route
							path="/contact"
							exact
							render={(props) => <ContactPage {...props} />}
						></Route>

						<Route
							path="/blog"
							exact
							render={(props) => <Blog {...props} />}
						></Route>

						<Route
							path="/articles"
							exact
							render={(props) => <BlogArticles {...props} />}
						></Route>
						<Route
							path="/settings"
							exact
							render={(props) => <Account {...props} />}
						></Route>
						<Route
							path="/terms"
							exact
							render={(props) => <Tnc {...props} />}
						></Route>

						{/* <Route path="/articleitem"></Route> */}

						<Route
							path="/articleitem"
							exact
							render={(props) => <Articledisplay {...props} />}
						></Route>
						<Route path="/teams" exact render={(props) => <Teams />}></Route>
						<Route
							path="/collection"
							exact
							render={(props) => <Collection />}
						></Route>
						<Route
							path="/boardCreation"
							exact
							render={(props) => <BoardCreation />}
						></Route>
						<Route
							path="/boardDisplay"
							exact
							render={(props) => <BoardDisplay />}
						></Route>
						<Route
							path="/boardDisplay"
							exact
							render={(props) => <BoardDisplay />}
						></Route>
						<Route
							path="/termsAndConditions"
							exact
							render={(props) => <TermsAndConditions />}
						></Route>
						<Redirect to="/" />
					</Switch>
					<EndSection />
				</div>
			</Router>
		</React.Fragment>
	);
};

export default Routes;
