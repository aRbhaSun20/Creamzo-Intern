import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Home/Home";
import NavBar from "../Components/NavBar/NavBar";
import EndSection from "../Components/EndSection/EndSection";
import FooterBeforeLogin from "../Components/EndSection/FooterBeforeLogin";
import Discover from "./Discover/Discover.jsx"
import ContactPage from "./Contact/ContactPage";
import PublicViewProfile from "./Profile/PublicViewProfile";
import UserViewProfile from "./Profile/UserViewProfile";
import MyUploadsPage from "./Profile/MyUploads";
import Glider from "../Components/Creative/Glider";
import Teams from "./Team/Teams";
const Routes = () => {
	return (
    <React.Fragment>
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/discover" exact component={Discover}></Route>
            <Route path="/contact" exact component={ContactPage}></Route>
            <Route path="/profilePublic" exact component={PublicViewProfile}></Route>
            <Route path="/profileUser" exact component={UserViewProfile}></Route>
            <Route path="/myuploads" exact component={MyUploadsPage}></Route>            
            <Route path="/creative" exact component={Glider}></Route>
            <Route path="/team" exact component={Teams}></Route>
          </Switch>
          <EndSection />
          <FooterBeforeLogin/>
        </div>
      </Router>
    </React.Fragment>
  );
};

export default Routes;
