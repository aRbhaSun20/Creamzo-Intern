import React, { useState } from "react";
import Routes from "./Pages/Routes";

const App = () => {
	const [login, setLogin] = useState(false);

	return (
		<React.Fragment>
			<Routes login={login} setLogin={setLogin} />
		</React.Fragment>
	);
};

export default App;
