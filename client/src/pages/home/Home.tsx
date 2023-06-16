import {lazy, Suspense, useEffect} from "react";

const Hero = lazy(() => import("../../layouts/hero/Hero"));

import s from "./Home.module.css";
const Home = () => {
	useEffect(() => {
		document.title = "Home | Afrik";
	}, []);

	return (
		<div className={s.home}>
			<Suspense fallback={<div>loading...</div>}>
				<Hero />
			</Suspense>
		</div>
	);
};

export default Home;
