import React, { useState } from "react";
import Routes from "./Pages/Routes";
import { Login } from "./Context/Login";
// import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/collapse";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { SnackbarProvider } from "notistack";

const queryClient = new QueryClient();

const App = () => {
	const [login, setLogin] = useState(true);

	return (
		<React.Fragment>
			<QueryClientProvider client={queryClient}>
				<SnackbarProvider
					anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
					maxSnack={3}
				>
					<Login>
						<Routes login={login} setLogin={setLogin} />
					</Login>
					<ReactQueryDevtools initialIsOpen={false} />
				</SnackbarProvider>
			</QueryClientProvider>
		</React.Fragment>
	);
};

export default App;
