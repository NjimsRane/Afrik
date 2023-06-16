import {Outlet, Route, Routes} from "react-router-dom";
import {lazy, Suspense} from "react";
import {Header, Footer} from "./layouts";
import s from "./App.module.css";

const Home = lazy(() => import("./pages/home/Home"));
const Contact = lazy(() => import("./pages/contact/Contact"));
const Fashion = lazy(() => import("./pages/fashion/Fashion"));
const LifeStyle = lazy(() => import("./pages/lifesStyle/LifeStyle"));
const Decoration = lazy(() => import("./pages/decoration/Decoration"));
const Products = lazy(() => import("./pages/products/Products"));
const Account = lazy(() => import("./pages/account/Account"));
const Baskets = lazy(() => import("./pages/products/Baskets"));

const Layout = () => {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
};

const App = () => {
	return (
		<div className={s.app}>
			<Routes>
				<Route
					path="/"
					element={
						<Suspense fallback={<div>...loading</div>}>{<Layout />}</Suspense>
					}
				>
					<Route index element={<Home />} />
					<Route path="/products" element={<Products />} />
					<Route path="/baskets" element={<Baskets />} />
					<Route path="/fashion" element={<Fashion />} />
					<Route path="/decoration" element={<Decoration />} />
					<Route path="/account" element={<Account />} />
					<Route path="/lifestyle" element={<LifeStyle />} />
					<Route path="/contact" element={<Contact />} />
				</Route>
			</Routes>
		</div>
	);
};

export default App;
