import React, { useState } from "react";
import Routes from "./Pages/Routes";
import { Login } from "./Context/Login";
// import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/collapse";
const App = () => {
	const [login, setLogin] = useState(true);

	return (
		<React.Fragment>
			<Login>
				<Routes login={login} setLogin={setLogin} />
			</Login>
		</React.Fragment>
	);
};

export default App;
