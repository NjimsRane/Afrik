import s from "./About.module.css";
import {useEffect} from "react";
const About = () => {
	useEffect(() => {
		document.title = "About Us | Afrik";
	}, []);
	return <div className={s.About}>About</div>;
};

export default About;
