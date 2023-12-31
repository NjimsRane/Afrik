import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import {BrowserRouter} from "react-router-dom";
import ScrollToTop from "./utilities/ScrollToTop.tsx";
import UserContextProvider from "./context/UserContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<UserContextProvider>
		<React.StrictMode>
			<BrowserRouter>
				<ScrollToTop />
				<App />
			</BrowserRouter>
		</React.StrictMode>
	</UserContextProvider>
);
