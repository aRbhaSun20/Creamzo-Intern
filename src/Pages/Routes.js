import React, { useContext } from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";

import Home from "./Home/Home";
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/EndSection/Footer";
import About from "./AboutUs/About";
import Discover from "./Discover/Discover";
import ContactPage from "./Contact/ContactPage";
import Blog from "./Blog/Blog";
import BlogArticles from "./BlogArticles/BlogArticles";
import Articledisplay from "./ArticleDisplay/Articledisplay";
import Account from "./Account/Account";
import Teams from "../Pages/Team/Teams";
import Collection from "../Components/Collections/Collection";
import BoardCreation from "../Components/Board/BoardCreation";
import BoardDisplay from "../Components/Board/BoardDisplay";
import TermsAndConditions from "../Components/TermsAndConditions/TermsAndConditions";
import BoardCreations from "./BoardCreations/BoardCreations";
import PublicViewProfile from "./Profile/PublicViewProfile";
import UserViewProfile from "./Profile/UserViewProfile";
import { LoginContext } from "../Context/Login";
import PrivacyPolicy from "../Components/Tnc/PrivacyPolicy";

const Routes = () => {
	// eslint-disable-next-line
	const [login, setLogin] = useContext(LoginContext);

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
							render={(props) => <BoardCreations />}
						></Route>
						<Route
							path="/boardDisplay"
							exact
							render={(props) => <BoardDisplay />}
						></Route>
						<Route
							path="/terms"
							exact
							render={(props) => <TermsAndConditions />}
						></Route>
						<Route
							path="/profile"
							exact
							render={(props) =>
								!login ? <PublicViewProfile /> : <UserViewProfile />
							}
						></Route>
						<Route
							path="/privacy"
							exact
							render={(props) => <PrivacyPolicy />}
						></Route>
						<Redirect to="/" />
					</Switch>
					<Footer />
				</div>
			</Router>
		</React.Fragment>
	);
};

export default Routes;
