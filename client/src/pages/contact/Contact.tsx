import {useEffect} from "react";
import s from "./Contact.module.css";
const Contact = () => {
	useEffect(() => {
		document.title = "Contact | Afrik";
	}, []);
	return <div className={s.contact}>Contact</div>;
};

export default Contact;
