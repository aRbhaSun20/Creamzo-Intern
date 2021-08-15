import React, { useState } from "react";
import Routes from "./Pages/Routes";
import { Login } from "./Context/Login";

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
