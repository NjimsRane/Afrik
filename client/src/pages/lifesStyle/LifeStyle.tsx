import {useEffect} from "react";
import s from "./LifeStyle.module.css";
const LifeStyle = () => {
	useEffect(() => {
		document.title = "Lifestyle | Afrik";
	}, []);
	return <div className={s.lifeStyle}>LifeStyle</div>;
};

export default LifeStyle;
