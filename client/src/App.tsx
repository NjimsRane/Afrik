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
const Trinkets = lazy(() => import("./pages/products/Trinkets"));
const Jewelry = lazy(() => import("./pages/products/Jewelry"));
const Login = lazy(() => import("./pages/login/Login"));
const Register = lazy(() => import("./pages/register/Register"));

const Layout = () => {
	return (
		<div style={{display: "flex", flexDirection: "column"}}>
			<Header />
			<Outlet />
			<Footer />
		</div>
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
					<Route path="/products" element={<Products />}></Route>
					<Route path="/products/baskets" element={<Baskets />} />
					<Route path="/products/trinkets" element={<Trinkets />} />
					<Route path="/products/jewelry" element={<Jewelry />} />
					<Route path="/fashion" element={<Fashion />} />
					<Route path="/decoration" element={<Decoration />} />
					<Route path="/account" element={<Account />} />
					<Route path="/lifestyle" element={<LifeStyle />} />
					<Route path="/contact" element={<Contact />} />
				</Route>
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		</div>
	);
};

export default App;
