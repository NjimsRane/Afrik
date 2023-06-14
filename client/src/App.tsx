import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import {lazy, Suspense} from "react";
import {Header, Footer} from "./layouts";
import s from "./App.module.css";

const Home = lazy(() => import("./pages/home/Home"));
const Contact = lazy(() => import("./pages/contact/Contact"));
const Fashion = lazy(() => import("./pages/fashion/Fashion"));
const LifeStyle = lazy(() => import("./pages/lifesStyle/LifeStyle"));
const Decoration = lazy(() => import("./pages/decoration/Decoration"));
const About = lazy(() => import("./pages/about/About"));
const Account = lazy(() => import("./pages/account/Account"));

const Layout = () => {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
};

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<Suspense fallback={<div>loading...</div>}>
				<Layout />
			</Suspense>
		),
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/contact",
				element: <Contact />,
			},
			{
				path: "/decoration",
				element: <Decoration />,
			},
			{
				path: "/fashion",
				element: <Fashion />,
			},
			{
				path: "/lifestyle",
				element: <LifeStyle />,
			},
			{
				path: "/account",
				element: <Account />,
			},
		],
	},
]);

const App = () => {
	return (
		<div className={s.app}>
			<RouterProvider router={router} />
		</div>
	);
};

export default App;
