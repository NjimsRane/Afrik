import {useEffect} from "react";

import s from "./Account.module.css";
const Account = () => {
	useEffect(() => {
		document.title = "Account | Afrik";
	}, []);
	return <div className={s.account}>Account</div>;
};

export default Account;
