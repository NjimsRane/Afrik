import {useEffect} from "react";
import s from "./Decoration.module.css";

const Decoration = () => {
	useEffect(() => {
		document.title = "Decor | Afrik";
	}, []);

	return <div className={s.decoration}>Decoration</div>;
};

export default Decoration;
