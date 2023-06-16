import {useEffect} from "react";
import s from "./Fashion.module.css";

const Fashion = () => {
	useEffect(() => {
		document.title = "Fashion | Afrik";
	}, []);
	return <div className={s.fashion}>Fashion</div>;
};

export default Fashion;
